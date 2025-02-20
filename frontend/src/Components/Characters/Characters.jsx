import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import 'aos/dist/aos.css';
import CharactersData from '../data/CharactersData';
import { Link } from 'react-router-dom';

// Utility function to get local images for a character
const getLocalImages = (characterName) => {
    const localChar = CharactersData.find(
        char => char.name.toLowerCase() === characterName.toLowerCase()
    );
    return {
        image: localChar?.image,
        portrait: localChar?.portrait
    };
};

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:5000/api/characters');
                const jsonData = await response.json();

                if (!response.ok || !jsonData.data) {
                    throw new Error(jsonData.error || 'Failed to fetch characters');
                }

                // Merge API data with local images
                const mergedData = jsonData.data.map(char => {
                    const localImages = getLocalImages(char.CharacterName);
                    return {
                        ...char,
                        ...localImages,
                        Rarity: parseInt(char.Rarity) // Ensure Rarity is a number
                    };
                });

                // Sort by Rarity first, then by CharacterID
                const sortedCharacters = mergedData.sort((a, b) => {
                    if (b.Rarity === a.Rarity) {
                        return a.CharacterID - b.CharacterID; // Secondary sort by ID
                    }
                    return b.Rarity - a.Rarity; // Primary sort by Rarity
                });

                setCharacters(sortedCharacters);
            } catch (err) {
                console.error('Error fetching characters:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    const getRarityBackground = (rarity) => {
        // Convert string to number if needed
        const rarityNum = parseInt(rarity);
        switch(rarityNum) {
            case 5:
                return 'bg-gradient-to-b from-yellow-300 to-yellow-500';
            case 4:
                return 'bg-gradient-to-b from-purple-400 to-purple-600';
            default:
                return 'bg-gradient-to-b from-gray-400 to-gray-600';
        }
    };

    // Debug logging to check data
    useEffect(() => {
        if (characters.length > 0) {
            console.log('First character rarity:', characters[0].Rarity, typeof characters[0].Rarity);
        }
    }, [characters]);

    if (loading) return <div className="text-center mt-14">Loading...</div>;
    if (error) return <div className="text-center mt-14 text-red-500">Error: {error}</div>;

    return (
        <div className="mt-14 mb-12">
            <div className="container mx-auto">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos='fade-up' className="text-sm justify-center">Newest Characters</p>
                    <h1 data-aos='fade-up' className="text-3xl font-bold">Characters</h1>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-4 mg:grid-cols-4 lg:grid-cols-8 place-items-center gap-8">
                            {characters.map((data) => (
                                <Link to={`/characters/${data.CharacterID}`} key={data.CharacterID}>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        className='relative group space-y-2 text-center'>
                                        <div className={`relative h-[85px] w-[120px] object-cover rounded-md overflow-hidden ${getRarityBackground(data.Rarity)} ${data.CharacterName.toLowerCase()}`}>
                                            <img src={data.image} alt={data.CharacterName} className="h-full w-full object-cover rounded-md group-hover:blur-sm transition-all duration-300" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                                                {data.Attribute} - {data.WeaponType}
                                                <div className='flex justify-center items-center gap-1'>
                                                    <FaStar className='text-white' />
                                                    <span>{data.Rarity}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold mt-2 text-white relative bg-black bg-opacity-50 p-1 rounded-md transform translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 transition-all duration-300">
                                            {data.CharacterName}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Characters;
import React, { useEffect, useState } from 'react'; // Import React and hooks
import { useParams } from 'react-router-dom'; // Import useParams hook from react-router-dom
import { fetchCharacterById } from '../axios'; // Import fetchCharacterById function
import charactersData from '../Characters/charactersData'; // Import local characters data
import CharacterStats from './CharacterStats'; // Import CharacterStats component

const CharacterDetail = () => {
    const { id } = useParams(); // Get the character ID from the URL parameters
    const [character, setCharacter] = useState(null); // State to store character data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        const getCharacter = async () => {
            try {
                // Check if character exists in local data
                const localCharacter = charactersData.find(char => char.id === parseInt(id));
                if (localCharacter) {
                    setCharacter(prevState => ({ ...prevState, ...localCharacter })); // Update state with local character data
                }
                // Fetch character from API
                const data = await fetchCharacterById(id);
                setCharacter(prevState => ({ ...prevState, ...data })); // Update state with fetched character data
            } catch (err) {
                setError(err.message); // Set error message if fetching fails
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        getCharacter(); // Call the function to fetch character data
    }, [id]); // Dependency array to re-run effect when ID changes

    if (loading) return <div>Loading...</div>; // Show loading message if data is still being fetched
    if (error) return <div>Error: {error}</div>; // Show error message if there was an error
    if (!character) return <div>Character not found</div>; // Show message if character is not found

    return (
        <div className="bg-gray-900 text-white p-6 max-w-7xl rounded-lg mx-auto mt-14 mb-12"> {/* Character detail container */}
            <div className="flex gap-6"> {/* Flex container with gap */}
                <div className="w-1/2"> {/* Character image and name */}
                    <h1 className="text-3xl font-bold mb-4 ">{character.name}</h1> {/* Character name */}
                    <img src={character.portrait} alt={character.name} className="w-full h-auto rounded-md " /> {/* Character image */}
                </div>
                <div className="w-1/2 space-y-4"> {/* Character details */}
                    <CharacterStats />
                    <div className="space-y-2"> {/* Character information */}
                        {[
                            ['Attribute', character.Attribute],
                            ['Weapon Type', character.Weapon_type],
                            ['Rarity', character.Rarity],
                            ['Signature Weapon', character.SigWea],
                            ['Stat', character.Stat],
                            ['Tag', character.Tag],
                            ['Description', character.Description]
                        ].map(([label, value]) => ( // Map through character details
                            <p key={label} className="text-2xl ml-7"> {/* Increase text size to text-2xl and add left margin */}
                                <span className="font-semibold">{label}:</span> {value} {/* Display label and value */}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail; // Export the CharacterDetail component
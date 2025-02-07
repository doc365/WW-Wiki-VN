import React, { useEffect, useState } from 'react'; // Import React and hooks
import { useParams } from 'react-router-dom'; // Import useParams hook
import { fetchCharacterById } from '../axios'; // Import API call function
import charactersData from '../Characters/CharactersData'; // Import local character data

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
                    setCharacter(prevState => ({ ...prevState, ...localCharacter })); // Update state with local data
                }
                // Fetch character from API
                const data = await fetchCharacterById(id);
                setCharacter(prevState => ({ ...prevState, ...data })); // Update state with API data
            } catch (err) {
                setError(err.message); // Set error state
            } finally {
                setLoading(false); // Set loading state to false
            }
        };
        getCharacter();
    }, [id]); // Dependency array to re-run effect when ID changes

    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div>Error: {error}</div>; // Show error message
    if (!character) return <div>Character not found</div>; // Show not found message

    return (
        <div className="bg-gray-900 text-white p-8 max-w-7xl rounded-lg mx-auto mt-14 mb-14">
            <div className="flex gap-8">
                <div className="w-1/2">
                    <h1 className="text-3xl w-full font-bold mb-4">{character.name}</h1>
                    <img src={character.portrait} alt={character.name} className="w-full h-auto rounded-md" />
                </div>
                <div className="w-1/2 space-y-6">
                    <div className="space-y-2">
                        {[
                            ['Attribute', character.Attribute],
                            ['Weapon Type', character.Weapon_type],
                            ['Rarity', character.Rarity],
                            ['Signature Weapon', character.SigWea],
                            ['Stat', character.Stat],
                            ['Tag', character.Tag],
                            ['Description', character.Description]
                        ].map(([label, value]) => (
                            <p key={label} className="text-lg">
                                <span className="font-semibold">{label}:</span> {value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail; // Export the component
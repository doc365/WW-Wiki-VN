import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCharacterById } from '../../Components/axios.js';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                setLoading(true);
                const data = await fetchCharacterById(id);
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getCharacter();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!character) return <div>Character not found</div>;

    return (
        <div className="container mx-auto mt-14 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold mb-4">{character.Name}</h1>
                </div>
                {character.Image && (
                    <div>
                        <img 
                            src={`data:image/jpeg;base64,${character.Image}`} 
                            alt={character.Name} 
                            className="w-full h-auto rounded-md mb-4"
                        />
                    </div>
                )}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Character Details</h2>
                    <p>Attribute: {character.Attribute}</p>
                    <p>Weapon Type: {character.Weapon_type}</p>
                    <p>Rarity: {character.Rarity}</p>
                    <p>Signature Weapon: {character.SigWea}</p>
                    <p>Stat: {character.Stat}</p>
                    <p>Tag: {character.Tag}</p>
                </div>
                {character.Description && (
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md md:col-span-2">
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p>{character.Description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CharacterDetail;
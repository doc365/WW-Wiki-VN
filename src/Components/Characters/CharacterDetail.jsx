import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../axios';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
            try {
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
                            src={`data:image/jpeg;base64,${character.portrait}`} 
                            alt={character.Name} 
                            className="w-full h-auto rounded-md mb-4"
                        />
                    </div>
                )}
                {/* Add other character details here */}
            </div>
        </div>
    );
};

export default CharacterDetail;
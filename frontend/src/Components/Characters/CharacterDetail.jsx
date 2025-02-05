import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../axios';
import charactersData from '../Characters/charactersData';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const data = await fetchCharacterById(id);
                const characterImage = charactersData.find(char => char.id === id)?.portrait || '';
                setCharacter({ ...data, portrait: characterImage });
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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <div className="md:col-span-2 flex flex-col items-start w-150">
                    <h1 className="text-3xl font-bold mb-1">{character.name}</h1>
                    <img src={CharacterData.portrait} alt={character.name} className="w-full h-auto rounded-md mb-4" />
                    {/* Add more character details as needed */}
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-md shadow-md">
                        <p><span className="font-semibold">Attribute:</span> {character.Attribute}</p>
                        <p><span className="font-semibold">Weapon Type:</span> {character.Weapon_type}</p>
                        <p><span className="font-semibold">Rarity:</span> {character.Rarity}</p>
                        <p><span className="font-semibold">Signature Weapon:</span> {character.SigWea}</p>
                        <p><span className="font-semibold">Stat:</span> {character.Stat}</p>
                        <p><span className="font-semibold">Tag:</span> {character.Tag}</p>
                        <p><span className="font-semibold">Skill ID:</span> {character.Skill_id}</p>
                        <p><span className="font-semibold">Description:</span> {character.Description}</p>
                    </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
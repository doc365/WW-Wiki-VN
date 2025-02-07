import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../axios';
import charactersData from '../data/CharactersData';
import icondata from '../data/IconData'; // Import icondata

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                // Find character data locally
                const localCharacter = charactersData.find(char => char.id === parseInt(id));
                if (localCharacter) {
                    setCharacter(prevState => ({ ...prevState, ...localCharacter }));
                }
                // Fetch character data from the server
                const data = await fetchCharacterById(id);
                setCharacter(prevState => ({ ...prevState, ...data }));
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
        <div className="bg-gray-900 text-white p-8 max-w-7xl rounded-lg mx-auto mt-14 mb-14">
            <div className="flex justify-center gap-8">
                <div className="w-1/2 relative">
                    <img 
                        src={character.portrait} 
                        alt={character.name} 
                        className="w-full h-auto rounded-md"
                    />
                    <div className="absolute bottom-13 right-15 bg-gray-800/70 backdrop-blur-md justify-center text-white p-4 rounded-lg">
                        <p className="text-2xl font-semibold ">{character.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-lg flex items-center gap-2">
                                <img src={icondata[character.Attribute]} alt={character.Attribute} className="w-12 h-12" />
                                {character.Attribute}
                            </p>
                        </div>
                        <div className="flex justify-center gap-1 mt-2">
                            {[...Array(character.Rarity)].map((_, index) => (
                                <span key={index} className="text-yellow-400 text-xl ">★</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="w-1/2 space-y-6">
                    <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-lg grid grid-cols-2 gap-0 text-center">
                            <div className="font-semibold p-2">HP:</div>
                            <div className="p-2">{character.HP}</div>
                            <div className="font-semibold p-2">ATK:</div>
                            <div className="p-2">{character.ATK}</div>
                            <div className="font-semibold p-2">DEF:</div>
                            <div className="p-2">{character.DEF}</div>
                            <div className="font-semibold p-2">ER:</div>
                            <div className="p-2">{character.ER}%</div>
                            <div className="font-semibold p-2">CR:</div>
                            <div className="p-2">{character.CR}%</div>
                            <div className="font-semibold p-2">CD:</div>
                            <div className="p-2">{character.CD}%</div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg grid grid-cols-2 gap-0 text-center">
                            <div className="font-semibold p-2">Attribute:</div>
                            <div className="flex items-center justify-center gap-2 p-2">
                                <img src={icondata[character.Attribute]} alt={character.Attribute} className="w-8 h-8" />
                                {character.Attribute}
                            </div>
                            <div className="font-semibold p-2">Weapon:</div>
                            <div className="p-2">{character.Weapon_type}</div>
                            <div className="font-semibold p-2">Rarity:</div>
                            <div className="p-2">{[...Array(character.Rarity)].map((_, index) => (
                                <span key={index} className="text-yellow-400 text-xl">★</span>
                            ))}</div>
                            <div className="font-semibold p-2">Signature:</div>
                            <div className="p-2">{character.SigWea}</div>
                            <div className="font-semibold p-2">Tag:</div>
                            <div className="p-2">{character.Tag}</div>
                            <div className="font-semibold p-2">Description:</div>
                            <div className="p-2">{character.Description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
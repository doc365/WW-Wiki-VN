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
                const localCharacter = charactersData.find(char => char.id === parseInt(id));
                if (localCharacter) {
                    setCharacter(prevState => ({ ...prevState, ...localCharacter }));
                }
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
            <div className="flex gap-8">
                <div className="w-1/2 relative">
                    <img 
                        src={character.portrait} 
                        alt={character.name} 
                        className="w-full h-auto rounded-md"
                    />
                    <div className="absolute bottom-13 right-15 bg-gray-800/70 backdrop-blur-md text-white p-4 rounded-lg">
                        <p className="text-2xl font-semibold">{character.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="w-20 h-10">
                                <img src={icondata.Spectro} alt={character.Attribute} className="w-full h-full" /> 
                            </div>
                            <p className="text-lg">{character.Attribute}</p> 
                        </div>
                        <div className="flex gap-1 mt-2">
                            {[...Array(character.Rarity)].map((_, index) => (
                                <span key={index} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="w-1/2 space-y-6">
                    <div className="space-y-4">
                        {[
                            ['Attribute', character.Attribute],
                            ['Weapon', character.Weapon_type],
                            ['Rarity', [...Array(character.Rarity)].map((_, index) => (
                                <span key={index} className="text-yellow-400 text-xl">★</span>
                            ))],
                            ['Signature', character.SigWea],
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

export default CharacterDetail;
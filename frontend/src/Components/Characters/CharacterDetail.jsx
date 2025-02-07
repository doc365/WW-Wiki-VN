import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../axios';
import charactersData from '../data/CharactersData';

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
                    <div className="absolute bottom-4 right-4 bg-gray-800/80 backdrop-blur-sm text-white p-4 rounded-lg">
                        <p className="text-2xl font-semibold">{character.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="w-6 h-6">
                                <img src="/spectro-icon.png" alt="Spectro" className="w-full h-full" />
                            </div>
                            <p className="text-lg">Spectro</p>
                        </div>
                        <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                    </div>
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

export default CharacterDetail;
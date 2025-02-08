import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../axios';
import charactersData from '../data/CharactersData';
import icondata from '../data/IconData';


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

    // Helper component for stat rows
    const StatRow = ({ label, value, icon }) => (
        <div className="flex justify-between items-center p-3 bg-gray-900 border-b border-gray-800">
            <span className="text-gray-300">{label}</span>
            <div className="flex items-center gap-2">
                {icon && <img src={icon} alt={label} className="w-8 h-8" />}
                <span className="text-white">{value}</span>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-900 text-white p-8 max-w-7xl rounded-lg mx-auto mt-14 mb-14">
            <div className="flex justify-center gap-8">
                {/* Left side - Portrait */}
                <div className="w-1/2 relative">
                    <img 
                        src={character.portrait} 
                        alt={character.name} 
                        className="w-full h-auto rounded-md"
                    />
                    <div className="absolute bottom-13 right-15 bg-gray-800/70 backdrop-blur-md justify-center text-white p-4 rounded-lg">
                        <p className="text-2xl font-semibold">{character.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-lg flex items-center gap-2">
                                <img src={icondata[character.Attribute]} alt={character.Attribute} className="w-12 h-12" />
                                {character.Attribute}
                            </p>
                        </div>
                        <div className="flex justify-center gap-1 mt-2">
                            {[...Array(character.Rarity)].map((_, index) => (
                                <span key={index} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right side - Stats */}
                <div className="w-1/2">
                    <div className="bg-gray-950 rounded-lg overflow-hidden">
                        {/* Header */}
                        <div className="p-4">
                            <h1 className="text-2xl font-bold">Ascension Stats</h1>
                            <div className="text-blue-500 mb-4">CHARACTER STATS</div>
                            
                            {/* Default Level 90 */}
                            <div className="text-center text-blue-500 mb-6">
                                <span className="text-lg">Level: 90</span>
                            </div>
                            <div>
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">Materials Needed</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <img src="/path/to/material1.png" alt="Material 1" className="w-8 h-8" />
                                    <span className="text-white">Material 1</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/path/to/material2.png" alt="Material 2" className="w-8 h-8" />
                                    <span className="text-white">Material 2</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/path/to/material3.png" alt="Material 3" className="w-8 h-8" />
                                    <span className="text-white">Material 3</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/path/to/material4.png" alt="Material 4" className="w-8 h-8" />
                                    <span className="text-white">Material 4</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Stats Grid */}
                        <div className="divide-y divide-gray-800">
                            <StatRow label="Base HP" value={character.HP} />
                            <StatRow label="Base ATK" value={character.ATK} />
                            <StatRow label="Base DEF" value={character.DEF} />
                            <StatRow label="Energy Recharge" value={`${character.ER}%`} />
                            <StatRow label="Crit Rate" value={`${character.CR}%`} />
                            <StatRow label="Crit DMG" value={`${character.CD}%`} />
                            <StatRow 
                                label="Attribute" 
                                value={character.Attribute}
                                icon={icondata[character.Attribute]}
                            />
                            <StatRow label="Weapon Type" value={character.Weapon_type} />
                            <StatRow label="Signature Weapon" value={character.SigWea} />
                            <StatRow label="Tag" value={character.Tag} />
                            

                        </div>

                        {/* Description Section */}
                        <div className="p-4">
                            <button className="w-full p-3 text-center border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                                {character.Description}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
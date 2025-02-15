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
    const [selectedSkill, setSelectedSkill] = useState('basic-attack'); // Default to "Basic Attack"

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
                            <div className="text-blue-500 mb-4">CHARACTER STATS </div>
                            
                            {/* Stats Grid */}
                            <div className="divide-y divide-gray-700 bg-gray-950 rounded-lg">
                                <StatRow label="Level" value="90" />
                                <StatRow label="Base HP" value={character.HP} />
                                <StatRow label="Base ATK" value={character.ATK} />
                                <StatRow label="Base DEF" value={character.DEF} />
                                <StatRow label="ER" value={`${character.ER}%`} />
                                <StatRow label="Crit Rate" value={`${character.CR}%`} />
                                <StatRow label="Crit DMG" value={`${character.CD}%`} />
                                <StatRow 
                                    label="Attribute" 
                                    value={
                                        <div className="flex items-center gap-2">
                                            {character.Attribute}
                                            <img src={icondata[character.Attribute]} alt={character.Attribute} className="w-8 h-8" />
                                        </div>
                                    }
                                />
                                <StatRow label="Weapon Type" value={character.Weapon_type} />
                                <StatRow label="Signature Weapon" value={character.SigWea} />
                                <StatRow label="Description" value={character.Description} />
                            </div>
                        </div>

                        {/* Tag Section */}
                        <div className="p-4">
                            <button className="w-full p-3 text-center border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                                {character.Tag}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-8 mt-8">
                {/* Materials Needed Box */}
                <div className="w-1/2 p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2 text-blue-500">Materials Needed</h2>
                    <div className="grid grid-cols-4 gap-4">
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

                {/* Ascension Skill Material Box */}
                <div className="w-1/2 p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2 text-blue-500">Ascension Skill Material</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/path/to/skillMaterial1.png" alt="Skill Material 1" className="w-8 h-8" />
                            <span className="text-white">Skill Material 1</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/path/to/skillMaterial2.png" alt="Skill Material 2" className="w-8 h-8" />
                            <span className="text-white">Skill Material 2</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/path/to/skillMaterial3.png" alt="Skill Material 3" className="w-8 h-8" />
                            <span className="text-white">Skill Material 3</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/path/to/skillMaterial4.png" alt="Skill Material 4" className="w-8 h-8" />
                            <span className="text-white">Skill Material 4</span>
                        </div>
                    </div>
                </div>
            </div>        
            <div className="flex justify-center gap-8 mt-8">
                {/* Navbar for Skills and Passives */}
                <div className="w-full p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 text-blue-400 left spacing">Skills & Passives</h2>
                    <nav className="flex justify-around mb-4">
                        <button onClick={() => setSelectedSkill('basic-attack')} className="text-blue-500 font-bold hover:underline">Basic Attack</button>
                        <button onClick={() => setSelectedSkill('resonance-skill')} className="text-blue-500 font-bold hover:underline">Resonance Skill</button>
                        <button onClick={() => setSelectedSkill('forte-circuit')} className="text-blue-500 font-bold hover:underline">Forte Circuit</button>
                        <button onClick={() => setSelectedSkill('resonance-liberation')} className="text-blue-500 font-bold hover:underline">Resonance Liberation</button>
                        <button onClick={() => setSelectedSkill('intro-skill')} className="text-blue-500 font-bold hover:underline">Intro Skill</button>
                        <button onClick={() => setSelectedSkill('oturo-skill')} className="text-blue-500 font-bold hover:underline">Oturo Skill</button>
                    </nav>
                    <div>
                    {selectedSkill === 'basic-attack' && (
                        <div id="basic-attack" className="bg-gray-800 rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">Basic Attack</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/normalAttack1.png" alt="Normal Attack 1" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Normal Attack 1</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/normalAttack2.png" alt="Normal Attack 2" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Normal Attack 2</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/normalAttack3.png" alt="Normal Attack 3" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Normal Attack 3</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedSkill === 'resonance-skill' && (
                        <div id="resonance-skill" className="bg-gray-800 rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">Resonance Skill</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/resonanceSkill1.png" alt="Resonance Skill 1" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Resonance Skill 1</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/resonanceSkill2.png" alt="Resonance Skill 2" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Resonance Skill 2</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/resonanceSkill3.png" alt="Resonance Skill 3" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Resonance Skill 3</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedSkill === 'forte-circuit' && (
                        <div id="forte-circuit" className="bg-gray-800 rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">Forte Circuit</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/forteCircuit1.png" alt="Forte Circuit 1" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Forte Circuit 1</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/forteCircuit2.png" alt="Forte Circuit 2" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Forte Circuit 2</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/forteCircuit3.png" alt="Forte Circuit 3" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Forte Circuit 3</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedSkill === 'resonance-liberation' && (
                        <div id="resonance-liberation" className="bg-gray-800 rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">Resonance Liberation</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/resonanceLiberation1.png" alt="Resonance Liberation 1" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Resonance Liberation 1</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/resonanceLiberation2.png" alt="Resonance Liberation 2" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Resonance Liberation 2</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/resonanceLiberation3.png" alt="Resonance Liberation 3" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Resonance Liberation 3</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedSkill === 'intro-skill' && (
                        <div id="intro-skill" className="bg-gray-800 rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">Intro Skill</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/introSkill1.png" alt="Intro Skill 1" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Intro Skill 1</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/introSkill2.png" alt="Intro Skill 2" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Intro Skill 2</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/introSkill3.png" alt="Intro Skill 3" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Intro Skill 3</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedSkill === 'oturo-skill' && (
                        <div id="oturo-skill" className="bg-gray-800 rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">Oturo Skill</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/oturoSkill1.png" alt="Oturo Skill 1" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Oturo Skill 1</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/oturoSkill2.png" alt="Oturo Skill 2" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Oturo Skill 2</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-1">
                                    <img src="/path/to/oturoSkill3.png" alt="Oturo Skill 3" className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-white">Oturo Skill 3</span>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
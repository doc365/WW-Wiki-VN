import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../axios';
import charactersData from '../data/CharactersData';
import icondata from '../data/IconData';
const SKILL_TYPES = [
    'basic-attack',
    'resonance-skill',
    'forte-circuit',
    'resonance-liberation',
    'intro-skill',
    'oturo-skill'
];

const defaultStats = {
    EnergyRecharge: 100,
    CritRate: 5,
    CritDamage: 150
};

const CharacterDetail = () => {
    // State management
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState('basic-attack');
    const [selectedSkillDetail, setSelectedSkillDetail] = useState(null);
    useEffect(() => {
        const getCharacter = async () => {
            try {
                const data = await fetchCharacterById(id);
                
                if (!data) {
                    throw new Error('No character data received');
                }

                // Find matching local character data by id
                const localCharacter = charactersData.find(
                    char => char.id === parseInt(id)
                );

                setCharacter({
                    ...data,
                    image: localCharacter?.image || null,
                    portrait: localCharacter?.portrait || null
                });
            } catch (err) {
                console.error('Error fetching character:', err);
                setError(err.message || 'Failed to load character data');
            } finally {
                setLoading(false);
            }
        };
        getCharacter();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500 text-xl">Error: {error}</div>
            </div>
        );
    }

    if (!character) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-white text-xl">Character not found</div>
            </div>
        );
    }



    // Utility functions
    const formatSkillType = (type) => 
        type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Render helpers
    const renderStatRow = (label, value, icon) => (
        <div key={label} className="flex justify-between items-center p-3 bg-gray-900 border-b border-gray-800">
            <span className="text-gray-300">{label}</span>
            <div className="flex items-center gap-2">
                <span className="text-white">{value}</span>
                {icon && <img src={icon} alt={value} className="w-8 h-8" />}
            </div>
        </div>
    );

    const renderMaterials = (title, materials = []) => (
        <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-blue-500">{title}</h2>
            <div className="grid grid-cols-4 gap-4">
                {materials && materials.length > 0 ? (
                    materials.map((material, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {material?.image && (
                                <img 
                                    src={material.image} 
                                    alt={material.name} 
                                    className="w-8 h-8"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            )}
                            <span className="text-white">{material?.name || 'Unknown Material'}</span>
                        </div>
                    ))
                ) : (
                    <div className="col-span-4 text-center text-gray-400">No materials available</div>
                )}
            </div>
        </div>
    );

    const renderSkillModal = () => selectedSkillDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700">
                    <button 
                        onClick={() => setSelectedSkillDetail(null)}
                        className="float-right text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 mb-4">
                        {selectedSkillDetail.image && (
                            <img 
                                src={selectedSkillDetail.image} 
                                alt={selectedSkillDetail.name} 
                                className="w-16 h-16 rounded"
                            />
                        )}
                        <h3 className="text-xl font-bold text-white">{selectedSkillDetail.name}</h3>
                    </div>
                    <p className="text-gray-300 whitespace-pre-wrap">{selectedSkillDetail.description}</p>
                </div>
            </div>
        </div>
    );

    const renderPortrait = () => (
        <div className="w-1/2 relative">
        <img 
            src={character.portrait} 
            alt={character.name} 
            className="w-full h-auto rounded-md"
        />
        <div className="absolute bottom-0 right-0 bg-gray-800/70 backdrop-blur-md p-4 rounded-lg">
            <p className="text-2xl font-semibold">{character.name}</p>
            <div className="flex items-center gap-2">
                <p className="text-lg">{character.Attribute}</p>
                <img 
                    src={icondata[character.Attribute]} 
                    alt={character.Attribute}
                    className="w-8 h-8"
                />
            </div>
            <div className="flex justify-center gap-1 mt-2">
                {[...Array(character.Rarity)].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-xl">★</span>
                ))}
            </div>
        </div>
    </div>
    );

    const renderStats = () => {
        // Handle case where LevelStats might be empty or undefined
        const levelStats = character?.LevelStats && character.LevelStats.length > 0 
            ? character.LevelStats[0] 
            : {};
            
        const stats = {
            "Level Range": `${levelStats?.LevelMin || 1} - ${levelStats?.LevelMax || 90}`,
            "Rank": levelStats?.RankID || "0",
            "Base HP": levelStats?.HP || "0",
            "Base ATK": levelStats?.ATK || "0",
            "Base DEF": levelStats?.DEF || "0",
            "ER": `${levelStats?.EnergyRecharge ?? defaultStats.EnergyRecharge}%`,
            "Critical Rate": `${levelStats?.CritRate ?? defaultStats.CritRate}%`,
            "Critical DMG": `${levelStats?.CritDamage ?? defaultStats.CritDamage}%`,
            "EXP Required": levelStats?.EXP_Required || "0",
            "Weapon Type": character?.WeaponType || "Unknown",
        };
        return (
            <div className="w-full md:w-1/2">
                <div className="bg-gray-950 rounded-lg overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Ascension Stats</h2>
                        <div className="text-blue-500 mb-4">CHARACTER STATS</div>
                        
                        <div className="divide-y divide-gray-700 bg-gray-950 rounded-lg">
                            {Object.entries(stats)
                                .filter(([label]) => label !== "Weapon Type")
                                .map(([label, value]) => renderStatRow(label, value))}
                        </div>
                    </div>
                    <div className="p-4">
                        <button className="w-full p-3 text-center border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                            {character.CharacterTags && character.CharacterTags[0]?.CharacterTags || "No Tag"}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const renderSkills = () => (
        <div className="mt-8">
            <div className="bg-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-blue-400">Skills & Passives</h2>
                <div className="flex gap-4 mb-6 overflow-x-auto p-2 scrollbar-thin scrollbar-thumb-gray-600 -mx-2">
                    {SKILL_TYPES.map(skill => (
                        <button 
                            key={skill}
                            onClick={() => setSelectedSkill(skill)}
                            className={`p-2 text-blue-500 font-bold hover:bg-gray-700 rounded-lg transition-colors ${
                                selectedSkill === skill ? 'bg-gray-700' : ''
                            }`}
                        >
                            {formatSkillType(skill)}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    {SKILL_TYPES.map(skill => {
                        const skillKey = `${skill}Skills`;
                        const skillArray = character[skillKey] || [];
                        
                        return selectedSkill === skill && (
                            <div key={skill} className="bg-gray-800 rounded-lg p-4 mb-4">
                                <h2 className="text-xl font-semibold mb-4 text-blue-500">
                                    {formatSkillType(skill)}
                                </h2>
                                <div className="grid gap-4">
                                    {skillArray && skillArray.length > 0 ? (
                                        skillArray.map((skillDetail, index) => (
                                            <div 
                                                key={index} 
                                                className="bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-600"
                                                onClick={() => setSelectedSkillDetail(skillDetail)}
                                            >
                                                <div className="flex items-start gap-4 p-4">
                                                    {skillDetail?.image && (
                                                        <img 
                                                            src={skillDetail.image} 
                                                            alt={skillDetail.name} 
                                                            className="w-12 h-12 rounded"
                                                            onError={(e) => e.target.style.display = 'none'}
                                                        />
                                                    )}
                                                    <h3 className="font-semibold text-white">
                                                        {skillDetail?.name || 'Unknown Skill'}
                                                    </h3>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-400">
                                            No {formatSkillType(skill)} skills available
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    // Loading and error states
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-white">
                    Loading...
                </div>
            </div>
        );
    }

    // Main render
    return (
        <div className="bg-gray-900/80 backdrop-blur-sm text-white p-4 md:p-8 max-w-7xl mx-auto mt-14 mb-14 rounded-lg">
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                {renderPortrait()}
                {renderStats()}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8">
                {renderMaterials("Materials Needed", character.materials)}
                {renderMaterials("Ascension Skill Material", character.ascensionMaterials)}
            </div>

            {renderSkills()}
            {renderSkillModal()}
        </div>
    );
};

export default CharacterDetail;
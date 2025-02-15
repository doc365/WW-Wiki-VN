import React, { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../axios';
import charactersData from '../data/CharactersData';
import icondata from '../data/IconData';

// Update StatRow component to have larger icon
const StatRow = memo(({ label, value, icon }) => (
    <div className="flex justify-between items-center p-3 bg-gray-900 border-b border-gray-800">
        <span className="text-gray-300">{label}</span>
        <div className="flex items-center gap-2">
            <span className="text-white">{value}</span>
            {icon && <img src={icon} alt={value} className="w-8 h-8" />}
        </div>
    </div>
));

const CharacterPortrait = memo(({ character }) => (
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
));

const StatsPanel = memo(({ character }) => (
    <div className="w-1/2">
        <div className="bg-gray-950 rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-2xl font-bold">Ascension Stats</h2>
                <div className="text-blue-500 mb-4">CHARACTER STATS</div>
                
                <div className="divide-y divide-gray-700 bg-gray-950 rounded-lg">
                    {Object.entries({
                        Level: "90",
                        "Base HP": character.HP,
                        "Base ATK": character.ATK,
                        "Base DEF": character.DEF,
                        "ER": `${character.ER}%`,
                        "Crit Rate": `${character.CR}%`,
                        "Crit DMG": `${character.CD}%`,
                        "Weapon Type": character.Weapon_type,
                        "Signature Weapon": character.SigWea,
                        "Description": character.Description,
                        "Attribute": character.Attribute
                    }).map(([label, value]) => (
                        <StatRow 
                            key={label} 
                            label={label} 
                            value={value}
                            icon={label === "Attribute" ? icondata[value] : null}
                        />
                    ))}
                </div>
            </div>
            <div className="p-4">
                <button className="w-full p-3 text-center border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                    {character.Tag}
                </button>
            </div>
        </div>
    </div>
));

const MaterialsSection = memo(({ title, materials = [] }) => (
    <div className="w-1/2 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-blue-500">{title}</h2>
        <div className="grid grid-cols-4 gap-4">
            {materials.map((material, index) => (
                <div key={index} className="flex items-center gap-2">
                    <img src={material.image} alt={material.name} className="w-8 h-8" />
                    <span className="text-white">{material.name}</span>
                </div>
            ))}
        </div>
    </div>
));

const SkillTab = memo(({ skill, isActive, onClick }) => (
    <button 
        onClick={onClick}
        className={`p-2 text-blue-500 font-bold hover:bg-gray-700 rounded-lg transition-colors ${
            isActive ? 'bg-gray-700' : ''
        }`}
    >
        {skill}
    </button>
));

const SkillContent = memo(({ skillType, skills = [] }) => {
    const [openSkills, setOpenSkills] = useState({}); // Track open/closed state for each skill

    const toggleSkill = (skillId) => {
        setOpenSkills(prev => ({
            ...prev,
            [skillId]: !prev[skillId]
        }));
    };

    return (
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">{skillType}</h2>
            <div className="grid gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
                        <div 
                            onClick={() => toggleSkill(index)}
                            className="flex items-start gap-4 p-4 cursor-pointer hover:bg-gray-600 transition-colors"
                        >
                            <img src={skill.image} alt={skill.name} className="w-12 h-12 rounded" />
                            <h3 className="font-semibold text-white">{skill.name}</h3>
                        </div>
                        {openSkills[index] && skill.description && (
                            <div className="px-4 pb-4 pt-2 border-t border-gray-600">
                                <p className="text-gray-300">{skill.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
});

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState('basic-attack');

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

    const SKILL_TYPES = [
        'basic-attack',
        'resonance-skill',
        'forte-circuit',
        'resonance-liberation',
        'intro-skill',
        'oturo-skill'
    ];

    const formatSkillType = (type) => 
        type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="bg-gray-900/80 backdrop-blur-sm text-white p-8 max-w-7xl mx-auto mt-14 mb-14 rounded-lg">
            <div className="flex justify-center gap-8">
                <CharacterPortrait character={character} />
                <StatsPanel character={character} />
            </div>

            <div className="flex justify-center gap-8 mt-8">
                <MaterialsSection title="Materials Needed" />
                <MaterialsSection title="Ascension Skill Material" />
            </div>

            <div className="mt-8">
                <div className="bg-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4 text-blue-400">Skills & Passives</h2>
                    <div className="flex gap-4 mb-6 overflow-x-auto p-2">
                        {SKILL_TYPES.map(skill => (
                            <SkillTab
                                key={skill}
                                skill={formatSkillType(skill)}
                                isActive={selectedSkill === skill}
                                onClick={() => setSelectedSkill(skill)}
                            />
                        ))}
                    </div>
                    {SKILL_TYPES.map(skill => 
                        selectedSkill === skill && (
                            <SkillContent 
                                key={skill}
                                skillType={formatSkillType(skill)}
                                skills={character[`${skill}Skills`] || []}
                            />
                        )
                    )}
                </div>  
            </div>
        </div>
    );
};

export default CharacterDetail;
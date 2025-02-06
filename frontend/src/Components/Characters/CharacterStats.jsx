import React, { useState } from 'react';

const CharacterStats = () => {
  const [currentLevel, setCurrentLevel] = useState(90);
  
  const handleLevelChange = (value) => {
    const newLevel = Math.ceil(value / 10) * 10;
    setCurrentLevel(newLevel === 0 ? 1 : newLevel);
  };

  return (
    <div className="bg-gray-900 text-white p-6 max-w-xl rounded-lg">
      <div className="max-h-[600px] overflow-y-auto space-y-6">
        {/* Level Selector */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Stats Level {currentLevel}</h2>
          </div>
          <div className="relative w-full h-8 bg-gray-800/50 rounded overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-1 bg-gray-700">
                <div 
                  className="h-full bg-blue-500" 
                  style={{ width: `${(currentLevel / 90) * 100}%` }}
                />
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="90"
              step="1"
              value={currentLevel}
              onChange={(e) => handleLevelChange(e.target.value)}
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
            />
            <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none text-sm">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterStats;

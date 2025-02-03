import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../../Components/axios.js';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchData();
      const foundCharacter = data.find((char) => char.id === parseInt(id));
      setCharacter(foundCharacter);
    };
    getCharacter();
  }, [id]);

  if (!character) {
    return <div>Character not found</div>;
  }
  return (
    <div className="container mx-auto mt-14 mb-12">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
        </div>
        <div>
          <img src={character.portrait} alt={character.name} className="w-full h-auto rounded-md mb-4" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Character Details</h2>
          <p>Attribute: {character.attribute}</p>
          <p>Weapon Type: {character.weapon_type}</p>
          <p>Rarity: {character.rarity}</p>
          {/* Add more character details as needed */}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Additional Info</h2>
          {/* Add additional character information here */}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;

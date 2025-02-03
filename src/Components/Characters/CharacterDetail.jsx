import { useParams } from 'react-router-dom';
import CharactersData from '../../Components/Characters/CharactersData.js';

const CharacterDetail = () => {
  const { id } = useParams();
  const character = CharactersData.find((char) => char.id === parseInt(id));

  if (!character) {
    return <div>Character not found</div>;
  }
  return (
    <div className="container mx-auto mt-14 mb-12">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg grid-cols-2 md:grid-cols-2 gap-4 h-full">
        <div className="md:col-span-2 flex flex-col items-start w-150">
          <h1 className="text-3xl font-bold mb-1">{character.name}</h1>
          <img src={character.portrait} alt={character.name} className="w-full h-auto rounded-md mb-4" />
          {/* Add more character details as needed */}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md md:col-span-1 md:w-full">
          <h2 className="text-xl font-semibold mb-2"></h2>
          {/* Add additional character information here */}
          <p>Attribute: {character.attribute}</p>
          <p>Weapon Type: {character.weapon_type}</p>
          <p>Rarity: {character.rarity}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;

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
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
        <img src={character.image} alt={character.name} className="w-full h-auto rounded-md mb-4" />
        <p>Attribute: {character.attribute}</p>
        <p>Weapon Type: {character.weapon_type}</p>
        <p>Rarity: {character.rarity}</p>
        {/* Add more character details as needed */}
      </div>
    </div>
  );
};

export default CharacterDetail;

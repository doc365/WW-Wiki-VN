// Không cần thiết import React.
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import CharactersData from './CharactersData'; // Import CharactersData

function CharactersDetails() {
    const { id } = useParams(); // Get character id from URL
    const character = CharactersData.find(char => char.id === parseInt(id)); // Find character by id

    if (!character) {
        return <div>Character not found</div>; // Handle case where character is not found
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Attribute: {character.attribute}</p>
            <p>Rarity: {character.rarity}</p>
            <p>Weapon: {character.weapon}</p>
        </div>
    )
}

export default CharactersDetails
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const fetchAllCharacters = async () => {
  try {
    const response = await axios.get('/api/characters');
    return response.data;  // This will be the array of characters
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const fetchCharacterById = async (id) => {
  try {
    const response = await axios.get(`/api/characters/${id}`);
    return response.data;  // This will be a single character
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { fetchAllCharacters, fetchCharacterById };
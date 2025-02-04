import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const fetchAllCharacters = async () => {
    try {
        const response = await api.get('/api/characters');
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};
    
export const fetchCharacterById = async (id) => {
    try {
        const response = await api.get(`/api/characters/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching character:', error);
        throw error;
    }
};
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

const postData = async (data) => {
  try {
    const response = await axios.post('http://localhost:5000/api/data', data);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export { fetchData, postData };
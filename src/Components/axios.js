import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const fetchData = async () => {
  try {
    const response = await axios.get('/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

const postData = async (data) => {
  try {
    const response = await axios.post('/data', data);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export { fetchData, postData };
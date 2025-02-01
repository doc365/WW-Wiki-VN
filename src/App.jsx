import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/navbar.jsx';
import Characters from './Components/Characters/CharactersList.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/footer/footer.jsx';
import axios from 'axios';

function App() {
  // Initialize AOS (Animate On Scroll) library for scroll animations
  useEffect(() => {
    AOS.init({ 
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 1000, // Duration of animation (in milliseconds)
      easing: 'ease-in-sine', // Easing function for animation
      delay: 100, // Delay (in milliseconds) before animation starts
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  const [characters, setCharacters] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api');
      setCharacters(response.data.characters); // Adjust based on server data structure
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-700 dark:text-white duration-200'> {/* Set background color */}
      <Navbar /> {/* Render Navbar component */}
      <Characters characters={characters} /> {/* Pass characters data to Characters component */}
      <Footer className='bg-gray-200' /> {/* Set fixed background color for Footer */}
    </div>
  );
}

export default App; // Export App component as default
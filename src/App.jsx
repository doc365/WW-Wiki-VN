import { useEffect } from 'react'; // Không cần thiết import React.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Darkmode from './Components/Navbar/DarkMode.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import axios from 'axios';

//  Import các Components.
import Characters from './Components/Characters/CharactersList.jsx';
import WeaponsList from './Components/Weapon/weaponsList.jsx';
import EchoesList from './Components/Echo/EchoesList.jsx';
import Navbar from './Components/Navbar/navbar.jsx';
import Footer from './Components/footer/footer.jsx';

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

  // const [characters, setCharacters] = useState([]);

  // const fetchAPI = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api');
  //     setCharacters(response.data.characters); // Adjust based on server data structure
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <Router>
      <div className='app bg-white dark:bg-gray-700 text-black dark:text-white duration-200'> {/* Set background color */}
        <Navbar /> {/* Navbar cho phép điều hướng giữa các Components */}
        
        {/* Các Routes cho các component */}
        <Routes>
          <Route path="/" element={<Characters />} /> {/* Trang mặc định */}
          <Route path="/charactersList" element={<Characters />} />
          <Route path="/weaponsList" element={<WeaponsList />} />
          <Route path="/echoesList" element={<EchoesList />} />
        </Routes>

        <Footer className='bg-gray-200' /> {/* Set fixed background color for Footer */}
      </div>
    </Router>
  );
}

export default App; // Export App component as default
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Characters from './Components/Characters/CharactersList.jsx';
import WeaponsList from './Components/Weapon/weaponsList.jsx';
import EchoesList from './Components/Echo/EchoesList.jsx';
import Navbar from './Components/Navbar/navbar.jsx';
import Footer from './Components/footer/footer.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 1000, // Duration of animation (in milliseconds)
      easing: 'ease-in-sine', // Easing function for animation
      delay: 100, // Delay (in milliseconds) before animation starts
    });
    AOS.refresh();
  }, []);

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setBackendData(data));
  }, []); // Add empty dependency array to avoid multiple fetch calls

  return (
    <Router>
      <div className='app bg-white dark:bg-gray-700 text-black dark:text-white duration-200'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/charactersList" element={<Characters />} />
          <Route path="/weaponsList" element={<WeaponsList />} />
          <Route path="/echoesList" element={<EchoesList />} />
        </Routes>
        <Footer className='bg-gray-200' />
      </div>
    </Router>
  );
}

export default App;
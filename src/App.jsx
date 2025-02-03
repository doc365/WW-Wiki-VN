import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Characters from './Components/Characters/Characters.jsx';
import CharacterDetail from './Components/Characters/CharacterDetail.jsx';
import WeaponsList from './Components/Weapon/weaponsList.jsx';
import EchoesList from './Components/Echo/EchoesList.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
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
      <div className='app bg-white dark:bg-gray-700 text-black dark:text-white duration-200'> {/* Set background color */}
        <Navbar /> {/* Navbar cho phép điều hướng giữa các Components */}
        <Characters/>
        {/* Các Routes cho các component */}
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/weapons" element={<WeaponsList />} />
          <Route path="/echoes" element={<EchoesList />} />
        </Routes>

        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default App;
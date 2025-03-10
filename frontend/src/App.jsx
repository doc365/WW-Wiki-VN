import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Characters from './Components/Characters/Characters.jsx';
import CharacterDetail from './Components/Characters/CharacterDetail.jsx';
import WeaponsList from './Components/Weapon/weaponsList.jsx';
import EchoesList from './Components/Echo/EchoesList.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/footer/footer.jsx';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className='app bg-white dark:bg-gray-700 text-black dark:text-white duration-200'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/weapons" element={<WeaponsList />} />
          <Route path="/echoes" element={<EchoesList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
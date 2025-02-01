import React from 'react' // Import React library
import Navbar from './Components/Navbar/navbar.jsx' // Import Navbar component
import Characters from './Components/Characters/CharactersList.jsx' // Import Characters component
import AOS from 'aos' // Import AOS library
import 'aos/dist/aos.css' // Import AOS CSS
import Footer from './Components/footer/footer.jsx' // Import Footer component

function App() {
  // Initialize AOS (Animate On Scroll) library for scroll animations
  React.useEffect(() => {
    AOS.init({ 
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 1000, // Duration of animation (in milliseconds)
      easing: 'ease-in-sine', // Easing function for animation
      delay: 100, // Delay (in milliseconds) before animation starts
     })
     AOS.refresh() // Refresh AOS to detect new elements
  }, [])

  return (
    <><div className='bg-white dark:bg-gray-700 dark:text-white duration-200'> {/* Set background color */}
      <Navbar /> {/* Render Navbar component */}
      <Characters/> {/* Render Characters component */}

    </div><div>
        <Footer className='bg-gray-200' /> {/* Set fixed background color for Footer */}
      </div></>
  )
}

export default App // Export App component as default
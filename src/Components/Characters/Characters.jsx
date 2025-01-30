import React from 'react' // Import React library
import Jiyan from '../../assets/characters/jiyan.png' // Import Jiyan image
import Brant from '../../assets/characters/brant.png' // Import Brant image
import Carlotta from '../../assets/characters/carlotta.png' // Import Carlotta image
import Yinlin from '../../assets/characters/yinlin.png' // Import Yinlin image
import SK from '../../assets/characters/sk.png' // Import Shorekeeper image
import Camellya from '../../assets/characters/camellya.png' // Import Camellya image
import Yohu from '../../assets/characters/Youhu.png' // Import Yohu image
import { FaStar } from "react-icons/fa" // Import star icon from react-icons
import 'aos/dist/aos.css' // Import AOS CSS
import AOS from 'aos' // Import AOS library

// Character data array
const CharactersData = [
    { id: 1, name: "Jiyan", image: Jiyan, atribute: "Aero", rarity: 5, weapon: "Broadblade"}, // Jiyan character data
    { id: 2, name: "Brant", image: Brant, atribute: "Fusion", rarity: 5, weapon: "Sword" }, // Brant character data
    { id: 3, name: "Carlotta", image: Carlotta, atribute: "Glacio", rarity: 5, weapon: "Duo gun"}, // Carlotta character data
    { id: 4, name: "Yinlin", image: Yinlin, atribute: "Electro", rarity: 5, weapon: "Rectifier" }, // Yinlin character data
    { id: 5, name: "Shorekeeper", image: SK, atribute: "Spectro", rarity: 5, weapon: "Sword" }, // Shorekeeper character data
    { id: 6, name: "Camellya", image: Camellya, atribute: "Havoc", rarity: 5, weapon: "Sword" }, // Camellya character data
    { id: 7, name: "Yohu", image: Yohu, atribute: "Glacio", rarity: 4, weapon: "gauntlet" }, // Yohu character data
]

// Characters component
const Characters = () => {
  return (
    <div className="mt-14 mb-12"> {/* Margin top and bottom */}
        <div className="container mx-auto"> {/* Center container */}
            <div className="text-center mb-10 max-w-[600px] mx-auto"> {/* Center text and set max width */}
                <p data-aos='fade-up' className="text-sm justify-center">Newest Characters</p> {/* Subtitle */}
                <h1 data-aos='fade-up' className="text-3xl font-bold">Characters</h1> {/* Title */}
            </div>
            <div className="flex justify-center"> {/* Center content */}
                <div className="    bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"> {/* Rounded box with padding and shadow */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 mg:grid-cols-4 lg:grid-cols-8 place-items-center gap-8"> {/* Grid layout */}
                        {CharactersData.map((data) => (
                            <div
                            data-aos="fade-up" // AOS animation
                            data-aos-delay={data.aosDelay} // AOS animation delay
                            key={data.id} // Unique identifier
                            className='relative group space-y-2 text-center'> {/* Card container */}
                            <div className={`relative h-[85px] w-[120px] object-cover rounded-md overflow-hidden ${data.rarity === 5 ? 'bg-yellow-300' : data.rarity === 4 ? 'bg-purple-500' : ''} ${data.name.toLowerCase()}`}> {/* Image container with conditional background and character name */}
                                <img src={data.image} alt="" className="h-full w-full object-cover rounded-md group-hover:blur-sm transition-all duration-300"/> {/* Character image with blur effect on hover */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"> {/* Information tag */}
                                    {data.atribute} - {data.weapon} {/* Character attribute and weapon */}
                                    <div className='flex justify-center items-center gap-1'> {/* Star rating */}
                                        <FaStar className='text-white'/> {/* Star icon */}
                                        <span>{data.rarity}</span> {/* Rarity value */}
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-semibold mt-2 text-white relative bg-black bg-opacity-50 p-1 rounded-md transform translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 transition-all duration-300">{data.name}</h3> {/* Rounded character name below the card with background, hidden when moved up */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Characters // Export Characters component
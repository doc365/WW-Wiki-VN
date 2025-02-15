import { useEffect, useState } from 'react'; // Import useEffect and useState hooks
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Characters component
const Characters = () => {
    const [charactersData, setCharactersData] = useState([]); // State to hold character data

    useEffect(() => {
        // Fetch character data from API
        fetch('http://localhost:5000/api')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setCharactersData(data))
            .catch(error => console.error('Error fetching character data:', error));
    }, []); // Empty dependency array to run only once

    return (
        <div className="mt-14 pb-20">
            <div className="container mx-auto">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos='fade-up' className="text-sm justify-center">Newest Characters</p>
                    <h1 data-aos='fade-up' className="text-3xl font-bold">Characters</h1>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 place-items-center gap-8">
                            {charactersData.map((data) => (
                                <Link to={`/characters/${data.id}`} key={data.id}>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        className='relative group space-y-2 text-center'>
                                        <div className={`relative h-[120px] w-[120px] object-cover rounded-md overflow-hidden ${data.rarity === 5 ? 'bg-yellow-300' : data.rarity === 4 ? 'bg-purple-500' : ''} ${data.name.toLowerCase()}`}>
                                            <img src={data.image} alt="" className="h-full w-full object-cover rounded-md group-hover:blur-sm transition-all duration-300" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                                                {data.atribute} - {data.weapon}
                                                <div className='flex justify-center items-center gap-1'>
                                                    <FaStar className='text-white' />
                                                    <span>{data.rarity}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold mt-2 text-white relative bg-black bg-opacity-50 p-1 rounded-md transform translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 transition-all duration-300">{data.name}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters;
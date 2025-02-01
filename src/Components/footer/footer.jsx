// Không cần thiết import React.
import Banner from '../../assets/website/banner.jpg' // Corrected import path
import logo from '../../assets/website/logo.png' // Corrected import path
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom', // Corrected typo
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    filter: 'blur(1px)', // Added blur effect
    zIndex: -1
}

const footerlinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Characters',
        link: '/characters'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
]

function footer() {
    return (
        <div className='relative text-white'>
            <div style={BannerImg}></div> {/* Background image with blur */}
            <div className='container '>
                <div data-aos='zoom-in' className='grid md:grid-cols-3 pb-44 pt-5'>
                    {/* discord Name */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <img src={logo} alt=""
                                className='max-w-[50px]' />
                            Blackshore Archive
                        </h1>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis sint eos consequatur laboriosam, ratione magnam ipsum incidunt atque natus facere accusantium sit quibusdam suscipit rem fugit ipsa inventore autem!</p>
                    </div>
                    {/* footer link */}
                    <div className='grid grid-cols-2 sm:drid-cols-3
                col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl
                            font-bold sm:text-left text-justify mb-3'>
                                    contact links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    {footerlinks.map((link) => (
                                        <li className='cursor-pointer
                                        hover:text-gray-400 hover:translate-x-1 duration-300 text-gray-200' key={link.name}
                                        >
                                            <span>{link.name}</span>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* social links */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href="#">
                                    <FaDiscord className='text-3xl' />
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
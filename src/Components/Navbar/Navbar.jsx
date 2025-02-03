// Không cần thiết import React.

import Logo from '../../assets/website/logo.png'; // Import logo image
import { IoSearchOutline } from "react-icons/io5"; // Import search icon from react-icons
import { FaCaretDown } from "react-icons/fa"; // Import caret down icon from react-icons
import Darkmode from './DarkMode.jsx'; // Corrected import path for DarkMode.jsx
// Menu items with optional submenus
const Menu = [
  {
    name: "Home", // Menu item name
    link: "/" // Menu item link
  },
  {
    name: "Characters", // Menu item name
    link: "/characters" // Menu item link
  },
  {
    name: "Weapons", // Menu item name
    link: "/weapons" // Menu item link
  },
  {
    name: "Should?", // Menu item name
    link: "#" // Menu item link
  },
  {
    name: "Story", // Menu item name
    link: "#" // Menu item link
  },
  {
    name: "Team Setup", // Menu item name
    link: "#" // Menu item link
  },
  {
    name: "Echo", // Menu item name
    link: "/echoes" // Menu item link
  }
];

// // Dropdown links for additional options
// const DropdownLinks = [
//   {
//     id: 1, // Unique identifier for the dropdown link
//     name: "About", // Dropdown link name
//     link: "#" // Dropdown link URL
//   },
//   {
//     id: 2, // Unique identifier for the dropdown link
//     name: "Contact", // Dropdown link name
//     link: "#" // Dropdown link URL
//   },
//   {
//     id: 3, // Unique identifier for the dropdown link
//     name: "FAQ", // Dropdown link name
//     link: "#" // Dropdown link URL
//   },
// ];

const Navbar = () => {
  return (
    <div className="navbar shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper navbar */}
      <div className="bg-blue-800 text-white py-2">
        <div className="container flex justify-between items-center">
          {/* Logo and title */}
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10 uppercase highlight-logo" /> {/* Logo image */}
            Blackshore Archive {/* Website title */}
          </a>
          {/* Search bar */}
          <div className="relative group hidden sm:block">
            <input
              type="text" // Input type
              placeholder="Search" // Placeholder text
              className="w-[400px] group-hover:w-[500px] transition-all duration-300 rounded-full border border-blue-300 px-2 py-1 focus:outline-none focus:border-primary pr-10" // Input styling
            />
            <IoSearchOutline className="text-white group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" /> {/* Search icon */}
            
          </div>
          <div><Darkmode/></div>
        </div>
      </div>
      {/* Lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data, index) => (
            <li key={index} className="relative group">
              <a
                href={data.link} // Menu item link
                className="flex items-center gap-2 py-2 px-4 hover:bg-blue-800 duration-200 rounded-md focus:outline-none" // Menu item styling
              >
                {data.name} {/* Menu item name */}
                {data.subMenu && <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />} {/* Caret down icon if submenu exists */}
              </a>
              {data.subMenu && (
                <ul className="absolute left-0 top-full bg-white dark:bg-gray-900 shadow-md rounded-md hidden group-hover:block">
                  {data.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.link} // Submenu item link
                        className="block px-4 py-2 hover:bg-blue-800 duration-200 rounded-md focus:outline-none" // Submenu item styling
                      >
                        {subItem.name} {/* Submenu item name */}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar; // Export Navbar component
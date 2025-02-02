
import Logo from '../../assets/website/logo.png'; // Import logo image
import { IoSearchOutline } from "react-icons/io5"; // Import search icon from react-icons
import { FaCaretDown } from "react-icons/fa"; // Import caret down icon from react-icons
import Darkmode from './Darkmode'; // Corrected import path for Darkmode
// Menu items with optional submenus
const Menu = [
  { name: "Home", link: "/" },
  { name: "Characters", link: "/charactersList" },
  { name: "Weapons", link: "/weaponsList" },
  { name: "Should?", link: "#" },
  { name: "Story", link: "#" },
  { name: "Team Setup", link: "#" },
  { name: "Echo", link: "/echoesList" }
];

// Dropdown links for additional options
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
      <div className="bg-blue-800 text-white py-2">
        <div className="container flex justify-between items-center">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10 uppercase highlight-logo" />
            Blackshore Archive
          </a>
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-blue-300 px-2 py-1 focus:outline-none focus:border-primary pr-10"
            />
            <IoSearchOutline className="text-white group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          <div><Darkmode className="C"/></div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data, index) => (
            <li key={index} className="relative group">
              <a
                href={data.link}
                className="flex items-center gap-2 py-2 px-4 hover:bg-blue-800 duration-200 rounded-md focus:outline-none"
              >
                {data.name}
                {data.subMenu && <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />}
              </a>
              {data.subMenu && (
                <ul className="absolute left-0 top-full bg-white dark:bg-gray-900 shadow-md rounded-md hidden group-hover:block">
                  {data.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.link}
                        className="block px-4 py-2 hover:bg-blue-800 duration-200 rounded-md focus:outline-none"
                      >
                        {subItem.name}
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

export default Navbar;
import React from 'react'
import lightButton from '../../assets/website/lightmode.png'
import darButton from '../../assets/website/darkmode.png'

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") || "light"
    )
    const element = document.documentElement // html tag

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className="flex items-center">
            <div className="relative">
                <img
                    src={lightButton}
                    alt="Light Mode"
                    onClick={toggleTheme}
                    className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
                />
                <img
                    src={darButton}
                    alt="Dark Mode"
                    onClick={toggleTheme}
                    className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
                />
            </div>
            {/* Add the search bar component here */}
            {/* <SearchBar /> */}
        </div>
    )
}

export default DarkMode
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.querySelector('.navbar').classList.add('dark:bg-gray-800');
      document.querySelector('.app').classList.add('dark:bg-gray-700', 'dark:text-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.querySelector('.navbar').classList.remove('dark:bg-gray-800');
      document.querySelector('.app').classList.remove('dark:bg-gray-700', 'dark:text-white');
      document.querySelector('.app').classList.add('text-black');
    }
  }, [isDark]);

  return (
    <label className="flex items-center">
      <div className="relative mx-3">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
          role="switch"
        />
        <div className="relative w-24 h-12 rounded-[25%/50%] bg-[hsl(48,90%,85%)] dark:bg-[hsl(198,90%,15%)] p-1 ring-1 ring-blue-200 transition-colors duration-300 peer-focus:ring-2 peer-focus:ring-blue-400">
          <div className={`absolute w-10 h-10 rounded-full bg-[hsl(48,90%,55%)] dark:bg-[hsl(198,90%,55%)] transition-transform duration-300 ${isDark ? 'translate-x-12' : 'translate-x-0'}`}>
            <div className="absolute top-2 left-2 w-6 h-6">
              <div className={`absolute w-full h-full rounded-full transition-all duration-300 ${isDark ? 'scale-100 shadow-[inset_0.2em_-0.2em_0_0.2em_#fff]' : 'scale-50 shadow-[inset_0.4em_-0.4em_0_0.5em_#fff]'}`} />
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-2 bg-white transition-all duration-300 ${isDark ? 'opacity-0 translate-y-3' : 'opacity-100'} top-1/2 left-1/2 -ml-0.5 origin-[50%_0]`}
                  style={{ transform: `rotate(${i * 45}deg) translateY(0.45em)${isDark ? ' translateY(0.8em)' : ''}` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;
import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode'; // Make sure this path is correct
import Button from './Button';
const Nav = () => {
  // Initialize theme state, defaulting to 'light' if localStorage value is not set
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Effect to update the DOM and localStorage when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#000'; // Dark background
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#fff'; // Light background
    }

    // Update localStorage with the current theme value
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handler function for theme toggle
  const handleThemeCheck = checked => {
    setTheme(checked ? 'dark' : 'light');
  };

  const navItems = ['Home', 'Pages', 'About'];

  return (
    <div style={{ backgroundColor: '#1E1E1E', position: 'fixed', top: 0, width: '100%' }} className="flex justify-between md:px-20 px-4 items-center h-16 z-50">
      <div className="flex">
        <h1 className="font-mono text-2xl">
          <span className="text-yellow-500">M.</span>Fahiz
        </h1>
      </div>
      <div className='hidden md:block'>
        {navItems.map((item, index) => (
          <a key={index} href="#" className="text-sm mx-4">
            {item}
          </a>
        ))}
      </div>
      <div className="flex gap-2">
        <DarkModeSwitch className='bg-white w-7 h-7 p-1 rounded-full dark:bg-black ' checked={theme === 'dark'} onChange={handleThemeCheck} size={20} />
        <Button value={'Message '}/>

      </div>
    </div>
  );
};

export default Nav;

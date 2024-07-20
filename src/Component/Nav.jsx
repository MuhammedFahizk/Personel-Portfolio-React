import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode'; // Ensure this path is correct
import Button from './Button';
import { Link } from 'react-router-dom';

const Nav = () => {
  // Initialize theme state, defaulting to 'dark' if localStorage value is not set
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    setTheme(checked ? 'light' : 'dark');
  };

  const navItems = ['Home', 'Projects', 'About'];

  return (
    <nav
      style={{ backgroundColor: '#1E1E1E', position: 'fixed', top: 0, width: '100%' }}
      className="text-white flex relative justify-between items-center h-16 px-4 md:px-20 z-50"
    >
      <div className="flex items-center">
        <h1 className="font-mono text-2xl">
          <span className="text-yellow-500">M.</span>Fahiz
        </h1>
      </div>

      <div className="md:hidden flex gap-4 items-center">
      <DarkModeSwitch
            className="bg-black w-7 h-7 p-1 rounded-full dark:bg-white"
            checked={theme === 'light'}
            onChange={handleThemeCheck}
            size={20}
          />
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:flex items-center gap-4 ${isMenuOpen ? 'block absolute' : 'hidden'} inset-0 top-16  left-0 bg-gray-800 md:bg-transparent md:static md:top-auto md:left-auto md:space-x-8 md:w-auto md:flex-row md:mt-0`}
        id="navbar-menu"
      >
        <div className="  md:flex  md:flex-row  flex-col p-4 md:p-0 font-medium border border-gray-100  rounded-lg  bg-gray-800 md:bg-transparent md:border-0  dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          {navItems.map((item, index) => (
            <Link
              to={`/${item.toLowerCase()}`}
              key={index}
              className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 text-white  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              aria-current={item === 'Home' ? 'page' : undefined}
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col md/:hidden gap-4 m-3 md:mt-0">
          
          <Button value={'Hire Me'} />
        </div>
        </div>

        <div className="md:flex flex-col md:flex-row items-center hidden  md:gap-4 mt-4 md:mt-0">
        <DarkModeSwitch
            className="bg-black w-7 h-7 p-1 rounded-full dark:bg-white"
            checked={theme === 'light'}
            onChange={handleThemeCheck}
            size={20}
          />
          <Button value={'Hire Me'} to={'/Contact'}/>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full h-20 px-4 py-2 flex justify-between items-center md:h-20">
        {/* <a href="#" className="text-xl font-bold text-gray-800">
          TICKET SYSTEM{' '}
        </a> */}
         <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  TICKET  SYSTEM
                </span>
              </a>  
            </div>

        <button onClick={toggleMenu} className="menu-btn md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
            />
          </svg>
        </button>
        <ul className="hidden md:flex md:space-x-20">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Login
            </a>
          </li>
        </ul>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md fixed top-20 left-0 w-full py-2">
            <div className="border-t border-gray-200 w-full"></div>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
   
    </>
  );
};

export default Navbar;

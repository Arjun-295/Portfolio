import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'Skills', path: '/Skills' },
  { id: 3, text: 'Projects', path: '/Projects' },
  { id: 4, text: 'Contact', path: '/Contact' },
];

function Navbar() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50 && currentScrollY > prevScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-transparent text-white transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="p-6 flex items-center justify-between md:justify-center">
        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Menu (desktop) */}
        <ul className="hidden sm:flex gap-16 text-2xl font-bold">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
                  }`
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 text-xl font-semibold bg-[#1d0e2c] text-white">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
                  }`
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

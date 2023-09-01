import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  // State for active navigation link and mobile menu toggle
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  // Click handler for navigation links
  const handleNavLinkClick = (navTitle) => {
    setActive(navTitle);
  };

  return (
    <nav className="w-full flex py-0 justify-between items-center navbar">
      {/* Logo */}
      <Image src={logo} alt="bank" className="w-[124px] h-[32px]" />

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => handleNavLinkClick(nav.title)}
          >
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        {/* Sidebar */}
        <div
          className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => handleNavLinkClick(nav.title)}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

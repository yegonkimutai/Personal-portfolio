import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import { BiBookBookmark } from 'react-icons/bi';
import { MdOutlineDesignServices, MdConnectWithoutContact } from 'react-icons/md';

import { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [activeNav, setActiveNav] = useState('#');
  /* eslint-disable */

  return (
    <nav id="navbar">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>
        <BiBookBookmark />
      </a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>
        <MdOutlineDesignServices />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdConnectWithoutContact />
      </a>
    </nav>
  );
}

export default Navbar;

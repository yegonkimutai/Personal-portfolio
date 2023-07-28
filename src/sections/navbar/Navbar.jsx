import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { BiBookBookmark } from 'react-icons/bi';
import { MdOutlineDesignServices, MdConnectWithoutContact } from 'react-icons/md';

import { useState } from 'react';
import './navbar.css';

function Navbar() {
  /* eslint-disable */
  const [activeNav, setActiveNav] = useState('');

  return (
    <nav id="navbar">
      <Link to='home' spy={true} smooth={true} offset={-50} duration={500}
      className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </Link>

      <Link to='about' spy={true} smooth={true} offset={-50} duration={500}
      className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </Link>

      <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}
       className={activeNav === '#projects' ? 'active' : ''}>
        <BiBookBookmark />
      </Link>

      <Link to='skills' spy={true} smooth={true} offset={-50} duration={500}
      className={activeNav === '#skills' ? 'active' : ''}>
         <MdOutlineDesignServices />
      </Link>

      <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}
       className={activeNav === '#contact' ? 'active' : ''}>
        <MdConnectWithoutContact />
      </Link>
    </nav>
  );
}

export default Navbar;

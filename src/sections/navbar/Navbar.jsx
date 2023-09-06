import { AiOutlineHome } from 'react-icons/ai';
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
         <div className="nav-cont">
        <AiOutlineHome /><small>Home</small>
        </div>
      </Link>
      
      <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}
       className={activeNav === '#projects' ? 'active' : ''}>
        <div className="nav-cont">
        <BiBookBookmark /><small>Projects</small>
        </div>
      </Link>
      
      <Link to='skills' spy={true} smooth={true} offset={-50} duration={500}
      className={activeNav === '#skills' ? 'active' : ''}>
        <div className="nav-cont">
         <MdOutlineDesignServices /><small>Skills</small>
         </div>
      </Link>

      <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}
       className={activeNav === '#contact' ? 'active' : ''}>
        <div className="nav-cont">
        <span><MdConnectWithoutContact /></span>
        <small>Contacts</small>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;

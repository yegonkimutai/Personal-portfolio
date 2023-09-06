// import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-scroll';
// import { BiBookBookmark } from 'react-icons/bi';
// import { MdOutlineDesignServices, MdConnectWithoutContact } from 'react-icons/md';

// import { useState } from 'react';
import './navbar.css';

function Navbar() {
  /* eslint-disable */
  // const [activeNav, setActiveNav] = useState('');

  return (
    // <nav id="navbar">
    //   <Link to='home' spy={true} smooth={true} offset={-50} duration={500}
    //   classNameName={activeNav === '#' ? 'active' : ''}>
    //      <div classNameName="nav-cont">
    //     <AiOutlineHome /><small>Home</small>
    //     </div>
    //   </Link>
      
    //   <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}
    //    classNameName={activeNav === '#projects' ? 'active' : ''}>
    //     <div classNameName="nav-cont">
    //     <BiBookBookmark /><small>Projects</small>
    //     </div>
    //   </Link>
      
    //   <Link to='skills' spy={true} smooth={true} offset={-50} duration={500}
    //   classNameName={activeNav === '#skills' ? 'active' : ''}>
    //     <div classNameName="nav-cont">
    //      <MdOutlineDesignServices /><small>Skills</small>
    //      </div>
    //   </Link>

    //   <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}
    //    classNameName={activeNav === '#contact' ? 'active' : ''}>
    //     <div classNameName="nav-cont">
    //     <MdConnectWithoutContact /><small>Contacts</small>
    //     </div>
    //   </Link>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Yegon</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;

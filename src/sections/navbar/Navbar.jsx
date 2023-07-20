import Logo from '../../assets/Logo.png'
import data from './data'
import {IoIosColorWand} from 'react-icons/io'
import './navbar.css'

function Navbar() {
  return (
    <nav id='navbar'>
      <div className='container nav-container'>
        <a href='index.html' className='nav-logo'>
          <img src={Logo} alt='Logo'/>
        </a>
        <ul className='nav-menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button className='nav-icon'><IoIosColorWand/></button>
      </div>
    </nav>
  )
}

export default Navbar
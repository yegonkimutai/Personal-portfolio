import HeaderImg from '../../assets/Header.jpg'
import data from './data'
import './header.css'

function Header() {
  return (
    <header>
      <div className='container header-cont'>
        <div className='header-prof'>
          <img src={HeaderImg} alt='Header Image'/>
        </div>
        <h3>Brian Yegon</h3>
        <p>
        Passionate Full-Stack Developer dedicated to crafting seamless digital experiences. 
        Proficient in front-end and back-end technologies, I transform ideas into elegant, functional solutions.
         Collaborative team player with a keen eye for detail and a drive for continuous learning. Let's build the future together 😄 
        </p>
        <div className='header-cte'>
          <a href='#contact' className='btn primary'>Let's Talk 👥</a>
          <a href='#project' className='btn light'>My work 💻</a>
        </div>
        <div className="header-socials">
          {
            data.map(item => <a key={item.id} href={item.link}
            target='-blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
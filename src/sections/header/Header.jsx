import Typewriter from 'typewriter-effect';
import HeaderImg from '../../assets/Header.jpg';
import data from './data';
import './header.css';

function Header() {
  return (
    <header id="home">
      {/* eslint-disable */}
      <div className="header-cte">
          <a href="#contact" className="btn primary">Let's Talk 👥</a> 
          <a href="#projects" className="btn light">My work 💻</a>
        </div>
      <div className="container header-cont">
        <div className="header-prof">
          <img src={HeaderImg} alt="Header Image" />
        </div>
        <h3>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                'Full-Stack Developer',
                'Programmer',
                'Software Developer',
                'Web Developer',
              ],
            }}
          />
        </h3>
        <p>
          Hello, I am Brian Yegon, A passionate Full-Stack Developer dedicated to crafting seamless digital experiences.
          Collaborative team player with a keen eye for detail and a drive for continuous learning. Let's build the future together 😄
        </p>
        <div className="header-socials">
          {
            data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="-blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))
          }
        </div>
      </div>
    </header>
  );
}

export default Header;

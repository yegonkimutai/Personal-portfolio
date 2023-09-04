import './footer.css';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <footer id="footer">
      <a href="#home" className="footer-logo">YEGON</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* eslint-disable */}
      <div className="footer-socials">
        <a href="https://github.com/yegonkimutai" target="_blank"><AiOutlineGithub /></a>
        <a href="https://www.linkedin.com/in/brian-yegon-kim05/" target="_blank"><AiOutlineLinkedin /></a>
        <a href="mailto:yegonkimutai.99@gmail.com" target="_blank"><AiOutlineMail /></a>
      </div>

      <div className="copyright">
        <small>&copy; Brian Yegon 2023</small>
      </div>
    </footer>
  );
}

export default Footer;

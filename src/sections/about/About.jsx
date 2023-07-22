import AboutImg from '../../assets/About.jpg'
import CV from '../../assets/cv.docx'
import { HiOutlineDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'

function About() {
  return (
    <section id='about'>
      <div className="container abt-container">
      <div className="abt-left">
        <div className="abt-photo">
          <img src={AboutImg} alt='About Image'/>
        </div>
      </div>
      <div className="abt-right">
        <h2>About Me</h2>
        <div className="abt-cards">
          {
            data.map(item => (
              <Card key={item.id} className='abt-card'>
                <span className='abt-card-icon'>{item.icon}</span>
                <h4>{item.title}</h4>
                <small>{item.desc}</small>
              </Card>
            ))
          }
        </div>
        <p>
        Hey, I'm Yegon Brian, a passionate and creative full-stack developer based in Kenya. 
        With a solid foundation in both front-end and back-end technologies, I thrive on turning innovative ideas into functional and user-friendly applications. 
        My love for problem-solving and continuous learning fuels my journey to stay ahead in the ever-evolving tech landscape. 
        Let's collaborate and build something amazing together!
        </p>
        <a href={CV} download className='btn primary'>Download CV 
        <HiOutlineDownload/></a>
      </div>
      </div>
    </section>
  )
}

export default About
import { BsPatchCheckFill } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import CV from '../../assets/cv.docx';
import './skill.css';

function Skill() {
  return (
    <section id="skills" className="skills">
      <h2>My skills</h2>

      <div className="container skills-cont">
        <div className="fe-skills">
          <h3>Frontend Development</h3>
          <div className="content">
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>BootStrap</h4>
              </div>
            </article>
          </div>
        </div>
        {/* end of front end */}
        <div className="be-skills">
          <h3>Backend Development</h3>
          <div className="content">
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>Ruby</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>Ruby on Rails</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="ex-details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>API</h4>
              </div>
            </article>
          </div>
        </div>
        
        <div className="cv">
      <a href={CV} download className="btn primary">
            Download CV
            <HiOutlineDownload />
      </a>
      </div>
      </div>
    </section>
  );
}

export default Skill;

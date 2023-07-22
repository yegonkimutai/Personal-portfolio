import {BsPatchCheckFill} from 'react-icons/bs'
import './skill.css'

function Skill() {
  return (
    <section id='skills' className='skills'>
      <h5>Skills I have</h5>
      <h2>My skills</h2>

      <div className='container skills-cont'>
        <div className='fe-skills'>
          <h3>Frontend Development</h3>
          <div className='content'>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>React</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
             <div>
             <h4>JavaScript</h4>
              <small>Experienced</small>
             </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
             <div>
             <h4>HTML</h4>
              <small>Experienced</small>
             </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>CSS</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of front end */}
        <div className='be-skills'>
        <h3>Backend Development</h3>
          <div className="content">
        <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>Ruby</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>Ruby on Rails</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>SQL</h4>
              <small>Basic</small>
              </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>Node JS</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className='ex-details'>
              <BsPatchCheckFill className='ex-icon'/>
              <div>
              <h4>API</h4>
              <small>Experienced</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
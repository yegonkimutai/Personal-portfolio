import './project.css'
import IMG from '../../assets/Image.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Title',
    github : '',
    demo: ''
  },
  {
    id: 2,
    image: IMG,
    title: 'Title',
    github : '',
    demo: ''
  },
  {
    id: 3,
    image: IMG,
    title: 'Title',
    github : '',
    demo: ''
  },
  {
    id: 4,
    image: IMG,
    title: 'Title',
    github : '',
    demo: ''
  },
  {
    id: 5,
    image: IMG,
    title: 'Title',
    github : '',
    demo: ''
  },
  {
    id: 6,
    image: IMG,
    title: 'Title',
    github : '',
    demo: ''
  }
]

function Project() {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project-cont">
        {
          data.map(({image, id, title, github, demo}) => {
           return (
            <article key={id} className='proj-item'>
            <div className="proj-img">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="project-cte">
            <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn primary' target='_blank'>Live Demo</a>
            </div>
          </article>
           )
          })
        }
      </div>
    </section>
  )
}

export default Project
import './project.css';
import { AiOutlineGithub } from 'react-icons/ai';
import IMG1 from '../../assets/Img1.png';
import IMG2 from '../../assets/Img2.png';
import IMG3 from '../../assets/Img3.png';
import IMG4 from '../../assets/Img4.png';
import IMG5 from '../../assets/Img5.png';
import IMG6 from '../../assets/Img6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Currency Tracker',
    desc: 'Currency Tracker with chosen API for users to monitor hourly currency shifts and access detailed info on selected currencies.',
    stack: 'React Redux',
    github: 'https://github.com/yegonkimutai/React-capstone',
    demo: 'https://currency-tracker-five.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Math Magician',
    desc: 'Simple calculator app, with Single Page App design, featuring dynamic educational quotes on reload.',
    stack: 'React',
    github: 'https://github.com/yegonkimutai/Math-magicians',
    demo: 'https://math-magicians-hwosd3f6k-yegonkimutai.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'To-do list',
    desc: 'A simple To-do-list that helps the user in doing day-to-day activity. It also allows the user to edit and delete the to-do items',
    stack: 'JavaScript',
    github: 'https://github.com/yegonkimutai/To-do-list',
    demo: 'https://yegonkimutai.github.io/To-do-list/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Movie application',
    desc: 'A Movie web-app that displays data fetched from Movie API and enable users to like and also access a comment section where they can leave a comment on a specific movie',
    stack: 'JavaScript',
    github: 'https://github.com/yegonkimutai/movie-application',
    demo: 'https://seyioyemade.github.io/movie-application/dist/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Leader-board',
    desc: 'Leader-board that allows users to create, store, and populate scores via API for a dynamic and competitive gaming experience.',
    stack: 'JavaScript',
    github: 'https://github.com/yegonkimutai/leaderboard-project',
    demo: 'https://yegonkimutai.github.io/leaderboard-project/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Brilliant Coders Show',
    desc: 'Responsive website for an International Web Developers Show, built with HTML, CSS, JS and DOM manipulation based on provided design.',
    stack: 'HTML, CSS, JS',
    github: 'https://github.com/yegonkimutai/Capstone-project',
    demo: 'https://capstone-project-m1.vercel.app/',
  },
];

function Project() {
  return (
    <section id="projects" className="proj">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project-cont">
        {
          data.map(({
            image, id, title, desc, stack, github, demo,
          }) => (
            <article key={id} className="proj-item">
              <div className="proj-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <h4>
                Stacks:
                {stack}
              </h4>
              <div className="project-cte">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                  <AiOutlineGithub />
                </a>
                <a href={demo} className="btn primary" target="_blank" rel="noreferrer">Live Demo 🚀 </a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
}

export default Project;

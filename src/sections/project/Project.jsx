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
    image: IMG6,
    title: 'Budget App',
    desc: 'Offers users a user-friendly financial management solution tracking income, expenses, and savings effortlessly.',
    stack: 'Ruby on Rails',
    github: 'https://github.com/yegonkimutai/budget-app',
    demo: 'https://budget-wcyn.onrender.com/',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Currency Tracker',
    desc: 'Currency Tracker with chosen API for users to monitor hourly currency shifts and access detailed info on selected currencies.',
    stack: 'React Redux',
    github: 'https://github.com/yegonkimutai/React-capstone',
    demo: 'https://currency-tracker-five.vercel.app/',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Math Magician',
    desc: 'Simple calculator app, with Single Page App design, featuring dynamic educational quotes on reload.',
    stack: 'React',
    github: 'https://github.com/yegonkimutai/Math-magicians',
    demo: 'https://math-magicians-hwosd3f6k-yegonkimutai.vercel.app/',
  },
  {
    id: 4,
    image: IMG3,
    title: 'To-do list',
    desc: 'A simple To-do-list that helps the user in doing day-to-day activity. It also allows the user to edit and delete the to-do items',
    stack: 'JavaScript',
    github: 'https://github.com/yegonkimutai/To-do-list',
    demo: 'https://yegonkimutai.github.io/To-do-list/',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Movie App',
    desc: 'It involves the use of API to fetch and interact with some movies data on the website. The user can also like and leave a comment on each movie',
    stack: 'JavaScript',
    github: 'https://github.com/seyioyemade/movie-application',
    demo: 'https://seyioyemade.github.io/movie-application/dist/',
  },
  {
    id: 6,
    image: IMG5,
    title: 'Leader Board',
    desc: 'The project involves making a leader-board as well as store and populate the scores using an API',
    stack: 'JavaScript',
    github: 'https://github.com/yegonkimutai/leaderboard-project',
    demo: 'https://yegonkimutai.github.io/leaderboard-project/',
  },
];

function Project() {
  return (
    <section id="projects" className="proj">
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

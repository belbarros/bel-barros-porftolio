import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {
        <div className="project-card-inner">
          <img src={ project.img } />
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {project.tags.map((tag) => (
            <h6 className='tag'>{tag}</h6>
          ))}
          <ul>
            <li>
              <a href={project.link} target="_blank">
                live
              </a>
            </li>
            <li>
              <a href={project.repository} target="_blank">
                github
              </a>
            </li>
          </ul>
        </div>
      }
    </div>
  );
}

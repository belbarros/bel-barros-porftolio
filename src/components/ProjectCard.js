export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {
        <div className="project-card-inner">
          <h2>{project.name}</h2>
          {
            project.tags.map((tag) => (<h6>{tag}</h6>))
          }
        </div>
      }
    </div>
  );
}

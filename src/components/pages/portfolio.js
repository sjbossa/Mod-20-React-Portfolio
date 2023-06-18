
import Project from "../Project";

import { projects } from "../data/projectData";

export default function Portfolio() {
  return (
    <div className="sections">
      <section id="Portfolio">
        <h2>Portfolio</h2>
        <div className="articles">
          {projects.map((project) => (
            <Project
              title={project.title}
              url={project.url}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              GitHubRepo={project.GitHubRepo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
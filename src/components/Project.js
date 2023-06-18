// import github image.
import svgGitHub from "../images/github.svg";

// Display a project on portfolio page.
export default function Project(props) {
  const title = props.title; // variable to hold the project title

  // build a link to the project.
  const link = props.url ? (
    <a href={props.url} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    ""
  );

  // build an image link to the project.
  const imgLink =
    props.url && props.image ? (
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.image} alt={title} />
      </a>
    ) : (
      ""
    );

  // list the project description.
  const description = props.description ? <p>{props.description}</p> : "";

  // list the project technologies.
  const technologies = props.technologies ? (
    <p>Technologies: {props.technologies}</p>
  ) : (
    ""
  );

  // build an image link the individual project GitHub repo.
  const GitHubRepoLink = props.GitHubRepo ? (
    <p>
      {
        <a href={props.GitHubRepo} target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
      }
    </p>
  ) : (
    ""
  );

  // builds a card for project.
  return (
    <article key={title}>
      <header>
        <h3>{link}</h3>
        {GitHubRepoLink}
      </header>
      {imgLink}
      {description}
      {technologies}
    </article>
  );
}
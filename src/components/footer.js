import svgGitHub from "../images/github.svg";
import svgLinkedIn from "../images/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <h4>
        Copyright &copy; 2023&nbsp;
      </h4>
      <div className="socialMedia">
        <a href="https://github.com/sjbossa/" target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/scott-bossard-a5787a42/"
          target="_blank"
          rel="noreferrer"
          >
          <img src={svgLinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
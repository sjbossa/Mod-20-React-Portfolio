// import project images
import imgOneStopCodingJobBoard from "../../images/one-stop-coding-job-board.jpg";
import imgYourHabitTracker from "../../images/your-habit-tracker.png";
import imgTheNightSky from "../../images/the-night-sky2.png";
import imgPersonnelTracker from "../../images/personnel-tracker.jpg";
import imgSVGLogoGenerator from "../../images/svg-logo-generator.png";
import imgCodeQuiz from "../../images/code-quiz.png";
import imgNoteTaker from "../../images/note-taker.jpg";
import imgReadmeGenerator from "../../images/readme-generator.jpg";
import imgWorkDayScheduler from "../../images/work-day-scheduler.jpg";
import imgPasswordGenerator from "../../images/password-generator.jpg";
import imgPortfolio from "../../images/portfolio.png";
import imgSemanticCodeRefactor from "../../images/semantic-code-refactor.png";
import imgReactPortfolio from "../../images/react-portfolio.jpg";

export const projects = [
  {
    title: "One Stop Coding Job Board",
    url: "https://codingjobboard-d93ad0d875e7.herokuapp.com/",
    image: imgOneStopCodingJobBoard,
    description:
      "Project #3 This project was to build an application the allows a user to view existing coding jobs posted by potential employers.",
    technologies:
      "Express.js, MongoDB, Mongoose, React, Apollo-server, Lodash & Graphql",
    GitHubRepo: "https://github.com/Palejrey/OneStopCodingJobBoard",
  },
  {
    title: "Your Habit Tracker",
    url: "https://your-habit-tracker.herokuapp.com/login/",
    image: imgYourHabitTracker,
    description:
      "Project #2 This project was to build an application the allows a user to choose and track good habits to provide better physical and emotional wellbeing.",
    technologies:
      "Node.js, Express.js, MySQL, Sequelize, SASS, Handlebars.js, & express-session",
    GitHubRepo: "https://github.com/ZachITP/Your-Habit-Tracker-",
  },
  {
    title: "The Night Sky",
    url: "https://rolyat512.github.io/the-night-sky/",
    image: imgTheNightSky,
    description:
      "Project #1 This project was to build an application that provides users with NASA's picture of the day, and a weather forecast feature to use for stargazing.",
    technologies:
      "Open Weather, Nasa APOD, and Geolocation",
    GitHubRepo: "https://github.com/Rolyat512/the-night-sky",
  },
  {
    title: "React Portfolio",
    url: "https://sjbossa.github.io/Mod-20-React-Portfolio/#portfolio",
    image: imgReactPortfolio,
    description:
      "Challenge #20 This assignment was to build a personal portfolio using React and Syntactically Awesome Style Sheets.  It is a single-page application that meets the progressive web application (PWA) criteria.",
    technologies: "React & SASS",
    GitHubRepo: "https://github.com/sjbossa/Mod-20-React-Portfolio",
  },
  {
    title: "Personnel Tracker",
    url: "https://github.com/sjbossa/Personnel-Tracker",
    image: imgPersonnelTracker,
    description:
      "Challenge #12 This assignment was to build a command-line application to manage a company's employee database.",
    technologies: "Node.js, Inquirer v8.2.4, dotenv, & MySQL",
    GitHubRepo: "https://github.com/sjbossa/Personnel-Tracker",
  },
  {
    title: "Note Taker",
    url: "https://github.com/sjbossa/MOD11-Challenge-NoteTaker",
    image: imgNoteTaker,
    description:
      "Challenge #11 This assignment was to build a note taker application to save and retreive data from a JSON file.",
    technologies: "Node.js, Express.js",
    GitHubRepo: "https://github.com/sjbossa/MOD11-Challenge-NoteTaker",
  },
  {
    title: "SVG Logo Generator",
    url: "https://github.com/sjbossa/MOD10-OOP-SVG-LogoMaker",
    image: imgSVGLogoGenerator,
    description:
      "Challenge #10 This assignment was to build a SVG logo generator and to use unit testing.",
    technologies: "Node.js, Inquirer v8.2.4, and Jest v28.1.3",
    GitHubRepo: "https://github.com/sjbossa/MOD10-OOP-SVG-LogoMaker",
  },
  {
    title: "Readme Generator",
    url: "https://github.com/sjbossa/Challenge9-readme-gen",
    image: imgReadmeGenerator,
    description:
      "Challenge #9 This assignment was to build a GitHub README generator.",
    technologies: "Node.js & Inquirer v8.2.4",
    GitHubRepo: "https://github.com/sjbossa/Challenge9-readme-gen",
  },
  {
    title: "Work Day Scheduler",
    url: "https://sjbossa.github.io/Work-Scheduler-Challenge-API/",
    image: imgWorkDayScheduler,
    description:
      "Challenge #5 This assignment was to build a work day scheduler.",
    technologies: "HTML, CSS, jQuery, Moment.js & Bootstrap 5.2",
    GitHubRepo: "https://github.com/sjbossa/Work-Scheduler-Challenge-API",
  },
  {
    title: "Code Quiz",
    url: "https://sjbossa.github.io/Mod-4-Challenge-Quiz/",
    image: imgCodeQuiz,
    description:
      "Challenge #4 This assignment was to build a multiple choice coding assessment quiz with a timer.",
    technologies: "HTML, CSS, & Javascript",
    GitHubRepo: "https://github.com/sjbossa/Mod-4-Challenge-Quiz",
  },
  {
    title: "Random Password Generator",
    url: "https://sjbossa.github.io/Random-Password-Generator/",
    image: imgPasswordGenerator,
    description:
      "Challenge #3 This assignment was to modify existing starter code to create an application that allows a user to generate random criteria based passwords.",
    technologies: "Javascript",
    GitHubRepo: "https://github.com/sjbossa/Random-Password-Generator",
  },
  {
    title: "Portfolio",
    url: "https://sjbossa.github.io/Module-2-Challenge-Portfolio/",
    image: imgPortfolio,
    description:
      "Challenge #2 This assignment was to build a basic personal portfolio.",
    technologies: "HTML & CSS",
    GitHubRepo: "https://github.com/sjbossa/Module-2-Challenge-Portfolio",
  },
  {
    title: "Semantic Code Refactor",
    url: "https://sjbossa.github.io/Week1-Challenge_HTML_semantic/",
    image: imgSemanticCodeRefactor,
    description:
      "Challenge #1 This assignment was to refactor an existing website to make it more accessible.",
    technologies: "HTML & CSS",
    GitHubRepo: "https://github.com/sjbossa/Week1-Challenge_HTML_semantic",
  },
];
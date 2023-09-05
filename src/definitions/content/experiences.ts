import { Experience } from "../Experience";
import { skills } from "../content/skills"

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    context: "iJunior - Junior Enterprise",
    date: "06/20 - 09/21",
    description: "Junior enterprise collaborative work as a Web Developer, providing web solutions for small to medium sized companies, as well as an introduction to programming and web development for new students at UFMG. Work done contemplates full-stack software development with JavaScript and Python, using the React, Express and Flask frameworks.",
    skills: [skills.React, skills.JavaScript, skills.Python]
  },
  {
    title: "Undergraduate Research Assistant",
    context: "Covid Data Analytics Project",
    date: "04/20 - 03/21",
    description: "Data Science research in the COVID Data Analytics project, at DCC/UFMG. Work done contemplates data gathering and treatment, building of graphic representations and analysis of obtained statistics, as well as Python and JavaScript development, basic operation of remote machines and the writing of two academic papers.",
    skills: [skills.Python, skills.MachineLearning]
  },
  {
    title: "Undergraduate Research Assistant",
    context: "MPMG/PCA Project",
    date: "04/21 - ongoing",
    description: "Scientific Initiation research program in the Analytical Capacities Program, a partnership between DCC/UFMG and GSI/MPMG. Work done contemplates Natural Language Processing models, Python software development and writing of an academic paper.",
    skills: [skills.Python, skills.NaturalLanguageProcessing]
  },
  {
    title: "Full-stack Developer",
    context: "ReVirtua - Part Time",
    date: "04/21 - 02/22",
    description: "React, PHP and Wordpress web development as a service for medium to large sized companies. Automated chart building and integration with Google Workspace and Google Apps Script (GAS) for control of internal data. Work done contemplates API building and consuming, GAS, TypeScript, JavaScript and PHP software development and the building of two chatbot services with TypeScript, Express and IBM Watson.",
    skills: [skills.React, skills.JavaScript, skills.TypeScript]
  },
  {
    title: "Software Engineering Intern",
    context: "Cobli - Internship",
    date: "02/22 - 10/22",
    description: "Design and building of software solutions in a large microservice ecosystem. Work done contemplates active participation in design proposals and SCRUM ceremonies, conceptual software architecture and engineering, applying of principles of Domain-driven Design and Event-driven Architecture and, finally, development of software using TypeScript, React, Kotlin, Springboot and GraphQL.",
    skills: [skills.TypeScript, skills.React, skills.GraphQL]
  },
  {
    title: "Software Engineering Contractor",
    context: "Indeed - Full Time",
    date: "10/22 - ongoing",
    description: "Development and maintenance of software solutions for Indeed's job seeker platform. Work conducted concerns web accessibility; library and technology migrations; code refactoring; test suite improvement (both unit and integration tests on a CI/CD environment).",
    skills: [skills.TypeScript, skills.React, skills.Java]
  }
];
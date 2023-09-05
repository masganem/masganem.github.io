import { Skill } from "../Skill";

export const skills: Record<string, Skill> = {
  JavaScript: {
    ID: 0,
    title: "JavaScript",
    description: "3.5 YOE. Related knowledge: DOM manipulation, bundlers, CSS preprocessing, etc."
  },
  React: {
    ID: 1,
    title: "React",
    description: "3 YOE. Also familiar with Redux and Sagas."
  },
  TypeScript: {
    ID: 2,
    title: "TypeScript",
    description: "2 YOE. Should've started using this earlier!"
  },
  SQL: {
    ID: 3,
    title: "SQL",
    description: "1 YOE. Experience with MySQL, PostgreSQL."
  },
  Java: {
    ID: 4,
    title: "Java",
    description: "1 YOE. Experience with Gradle, Spring Boot, JUnit and Mockito."
  },
  GraphQL: {
    ID: 5,
    title: "GraphQL",
    description: "1- YOE. A bit of experience with Apollo GraphQL and GraphQL servers as Back-end for Frontend."
  },
  Python: {
    ID: 6,
    title: "Python",
    description: "2.5 YOE. Also familiar with NumPy, Pandas, Matplotlib."
  },
  MachineLearning: {
    ID: 7,
    title: "Machine Learning",
    description: "1 YOE. Theoretical and hands-on knowledge."
  },
  NaturalLanguageProcessing: {
    ID: 8,
    title: "Natural Language Processing",
    description: "1 YOE. Familiar with BERT, Word Embeddings and Entity/Relationship Extraction."
  },
};
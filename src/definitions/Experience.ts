import { Skill } from "./Skill";

export interface Experience {
  title: string;
  context: string;
  date: string;
  description: string;
  skills: Skill[];
};
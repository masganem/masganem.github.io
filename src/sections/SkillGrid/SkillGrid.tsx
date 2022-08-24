import { SkillCard } from "../../components/SkillCard/SkillCard"
import { Skill } from "../../definitions/Skill"
import * as styles from "./styles"
import { getBatchedArray } from "./utils"

interface SkillGridProps {
  skills: Record<string, Skill>
  highlightedSkills: number[]
}

export const SkillGrid: React.FC<SkillGridProps> = ({
  skills,
  highlightedSkills,
}) => {
  const COLUMN_HEIGHT = 3;
  const skillBatches = getBatchedArray(Array.from(Object.values(skills)), COLUMN_HEIGHT);
  return (
    <div className={styles.skillGrid}>
      {
        skillBatches.map((skills) => (
          <div className={styles.skillColumn}>
            {skills.map((skill) => <SkillCard highlighted={highlightedSkills.includes(skill.ID)} skill={skill} />)}
          </div>
        ))
      }
    </div>
  );
};
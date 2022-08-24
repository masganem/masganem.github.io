import { Skill } from "../../definitions";
import { Card } from "../Card/Card";
import { BaseText, Small } from "../Typography/Typography";

import * as styles from "./styles";

interface SkillCardProps {
  highlighted: boolean;
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ highlighted, skill }) => (
  <Card className={highlighted ? styles.highlighted : ''}>
    <BaseText>{skill.title}</BaseText>
    <Small>{skill.description}</Small>
  </Card>
);
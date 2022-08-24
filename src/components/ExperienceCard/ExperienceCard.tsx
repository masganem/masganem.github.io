import { Experience } from '../../definitions';
import { Card } from '../Card/Card';
import { BaseText, Small } from '../Typography/Typography';

interface ExperienceProps {
  experience: Experience;
  setHighlightedSkills: (skills: number[]) => void;
}

export const ExperienceCard: React.FC<ExperienceProps> = ({
  experience,
  setHighlightedSkills,
}) => (
  <>
    <Card onClick={() => {setHighlightedSkills(experience.skills.map(skill => skill.ID))}}>
      <BaseText>{experience.title}</BaseText>
      <Small>{experience.context}</Small>
      <Small>{experience.date}</Small>
      <Small>{experience.description}</Small>
    </Card>
  </>
)
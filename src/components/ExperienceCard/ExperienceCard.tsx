import { Experience } from '../../definitions';
import { Card } from '../Card/Card';
import { BaseText, Small } from '../Typography/Typography';

interface ExperienceProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceProps> = ({
  experience,
}) => (
  <>
    <Card>
      <BaseText>{experience.title}</BaseText>
      <Small>{experience.context}</Small>
      <Small>{experience.date}</Small>
      <Small>{experience.description}</Small>
    </Card>
  </>
)
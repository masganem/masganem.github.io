import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";
import { Timeline } from "../../components/Timeline/Timeline";
import { Experience } from "../../definitions";

interface ExperienceTimelineProps {
  experiences: Experience[];
  setHighlightedSkills: (skills: number[]) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  setHighlightedSkills,
}) => (
  <Timeline>
    {experiences.map((experience, index) => (
      <ExperienceCard
        key={index}
        experience={experience}
        setHighlightedSkills={setHighlightedSkills}
      />
    ))}
  </Timeline>
);
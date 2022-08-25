import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";
import { Timeline } from "../../components/Timeline/Timeline";
import { Experience } from "../../definitions";

interface ExperienceTimelineProps {
  experiences: Experience[];
  selectedExperience: number;
  setSelectedExperience: (i: number) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  selectedExperience,
  setSelectedExperience,
}) => (
  <Timeline
    selected={selectedExperience}
    setSelected={setSelectedExperience}
  >
    {experiences.map((experience, index) => (
      <ExperienceCard
        key={index}
        experience={experience}
      />
    ))}
  </Timeline>
);
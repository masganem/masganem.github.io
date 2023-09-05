import { useState } from 'react';
import { Link } from './components/Link/Link';
import { BaseText, Heading, Small } from './components/Typography/Typography';
import { experiences } from './definitions/content/experiences';
import { skills } from './definitions/content/skills';
import { ExperienceTimeline } from './sections/ExperienceTimeline/ExperienceTimeline';
import { SkillGrid } from './sections/SkillGrid/SkillGrid';

import * as styles from "./styles";

function App() {
  const [selectedExperience, setSelectedExperience] = useState<number>(experiences.length-1);
  const highlightedSkills = experiences[selectedExperience].skills.map((skill) => skill.ID);

  const handleSetSelectedExperience = (i: number) => {
    if (i >= 0 && i < experiences.length) setSelectedExperience(i)
  }

  return (
    <div className={styles.app}>
      <Heading>Hey there!</Heading>
      <BaseText>
        I'm <Link href="https://www.linkedin.com/in/masganem/">Marcelo Ganem</Link>, a Full-stack Developer with a little over 3 years of experience. I'm currently 2/3 through my Computer Information Systems degree
        at <Link href="https://dcc.ufmg.br/en/">Universidade Federal de Minas Gerais (UFMG)</Link> and working as a Software Engineering Contractor at <Link href="https://www.indeed.com/">Indeed</Link>.
        <br />
        <br />
        Feel free to reach out to me on <Link href="https://www.linkedin.com/in/masganem/">LinkedIn</Link>, check out my <Link href="https://www.github.com/masganem/">GitHub</Link> or judge my musical taste on <Link href="https://open.spotify.com/user/masganmz">Spotify</Link>!
        <br />
        <br />
        My curriculum is also available <Link href="/Resume.pdf">here</Link> as a PDF file, if you prefer.
      </BaseText>
      <br />
      <br />
      <Heading>Skills</Heading>
      <SkillGrid skills={skills} highlightedSkills={highlightedSkills}/>
      <br />
      <br />
      <Heading>Experience</Heading>
      <Small>Select any experience to highlight the skills related to it.</Small>
      <ExperienceTimeline experiences={experiences} selectedExperience={selectedExperience} setSelectedExperience={handleSetSelectedExperience} />
    </div>
  );
}

export default App;

import type { Experience } from '@interfaces';
import React from 'react';
import ExperienceItem from './ExperienceItem';

interface ExperiencesProps {
  experiences: Experience[];
}

const Experiences: React.FC<ExperiencesProps> = (props) => {
  return (
    <div className="experiences">
      <div className="experiences-header">Experiences</div>
      <div className="experiences-list">
        {props.experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;

import type { Education } from '@interfaces';
import React from 'react';
import EducationItem from './EducationItem';

interface EducationsProps {
  education: Education[];
}

const Educations: React.FC<EducationsProps> = (props) => {
  return (
    <div className="educations">
      <div className="educations-header">Educations</div>
      <div className="educations-list">
        {props.education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Educations;

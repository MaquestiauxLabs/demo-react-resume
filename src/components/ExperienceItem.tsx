import type { Experience } from '@interfaces';
import React from 'react';

const ExperienceItem: React.FC<Experience> = (props) => {
  return (
    <div className="experience-item">
      <div className="experience-item-header">...</div>

      {JSON.stringify(props)}
    </div>
  );
};

export default ExperienceItem;

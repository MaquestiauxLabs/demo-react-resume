import type { Experience } from '@interfaces';
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const ExperienceItem: React.FC<Experience> = (experience) => {
  return (
    <div className="experience-item">
      <div className="experience-item-header">
        <div className="experience-item-logo">
          {experience.company
            .split(' ')
            .map((n) => n[0])
            .join('')
            .substring(0, 2)}
        </div>
        <div>
          <div className="experience-item-position">{experience.position}</div>
          <div className="experience-item-company">{experience.company}</div>
        </div>
        <div>
          <div className="experience-item-duration">{experience.duration}</div>
          <div className="experience-item-location">
            <HiLocationMarker className="text-blue-500" />
            {experience.location}
          </div>
        </div>
      </div>
      <div className="experience-item-responsibilities-list">
        {experience.responsibilities.map((responsibility, index) => (
          <div className="experience-item-responsibility" key={index}>
            <div className="experience-item-responsibility-bullet"></div>
            {responsibility}
          </div>
        ))}
      </div>
      {experience.technologies && (
        <div className="experience-item-technologies">
          <div className="experience-item-technology-title">Technologies:</div>
          <div className="experience-item-technology-list">
            {experience.technologies.map((technology, index) => (
              <div key={index} className="experience-item-technology">
                {technology}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;

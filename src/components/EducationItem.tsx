import type { Education } from '@interfaces';
import React from 'react';
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi';

const EducationItem: React.FC<Education> = (props) => {
  return (
    <div className="education-item">
      <div className="education-item-header">
        <div className="education-item-logo">
          <HiAcademicCap />
        </div>
        <div>
          <div className="education-item-degree">{props.degree}</div>
          <div className="education-item-institution">{props.institution}</div>
        </div>
        <div>
          <div className="education-item-duration">{props.duration}</div>
          <div className="education-item-location">
            <HiLocationMarker className="text-blue-500" />
            {props.location}
          </div>
        </div>
      </div>
      {props.achievements && (
        <div className="education-item-achievements">
          <div className="education-item-achievements-title">
            Key Achievements:
          </div>
          <div className="education-item-achievements-list">
            {props.achievements.map((achievement, index) => (
              <div className="education-item-achievements" key={index}>
                <div className="education-item-achievements-bullet"></div>
                {achievement}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationItem;

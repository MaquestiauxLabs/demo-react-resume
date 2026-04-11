import type { Experience } from '@interfaces';
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import skillsData from '../data/skills.json';

const skillMap = new Map<string, string>(
  skillsData.flatMap((cat) => cat.skills.map((s) => [s.id, s.name])),
);

const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

const formatDate = (value: string) => {
  const [day, month, year] = value.split('/').map(Number);
  const parsedDate = new Date(year, month - 1, day);

  return Number.isNaN(parsedDate.getTime())
    ? value
    : DATE_FORMATTER.format(parsedDate);
};

const ExperienceItem: React.FC<Experience> = (experience) => {
  const durationLabel = `${formatDate(experience.startDate)} — ${experience.endDate ? formatDate(experience.endDate) : 'Present'}`;

  return (
    <div className="experience-item">
      <div className="experience-item-header">
        <div className="experience-item-summary">
          <div className="experience-item-logo">
            {experience.company
              .split(' ')
              .map((n) => n[0])
              .join('')
              .substring(0, 2)}
          </div>
          <div className="experience-item-identity">
            <div className="experience-item-position">
              {experience.position}
            </div>
            <div className="experience-item-company">{experience.company}</div>
          </div>
        </div>
        <div className="experience-item-meta">
          <div className="experience-item-duration">{durationLabel}</div>
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
      {(experience.skillIds?.length ||
        experience.otherTechnologies?.length) && (
        <div className="experience-item-technologies">
          <div className="experience-item-technology-title">Technologies:</div>
          <div className="experience-item-technology-list">
            {experience.skillIds?.map((id) => (
              <div
                key={id}
                className="experience-item-technology experience-item-technology--skill"
              >
                {skillMap.get(id) ?? id}
              </div>
            ))}
            {experience.otherTechnologies?.map((tech, i) => (
              <div
                key={i}
                className="experience-item-technology experience-item-technology--skill"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;

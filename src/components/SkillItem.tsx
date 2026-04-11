import React from 'react';
import { HiStar } from 'react-icons/hi2';

interface SkillItemProps {
  name: string;
  level: string;
  months?: number;
}

const formatMonths = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years === 0) return `${remainingMonths}m`;
  if (remainingMonths === 0) return `${years}y`;
  return `${years}y ${remainingMonths}m`;
};

const SkillItem: React.FC<SkillItemProps> = ({ name, level, months }) => {
  const getSkillLevel = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 1;
      case 'intermediate':
        return 2;
      case 'advanced':
        return 4;
      case 'expert':
        return 5;
      default:
        return 0;
    }
  };
  return (
    <div key={name} className="skill-item">
      <div className="skill-name">
        {name}
        {months !== undefined && (
          <span
            className="skill-months"
            title={`${months} months of experience`}
          >
            &nbsp;· {formatMonths(months)}
          </span>
        )}
      </div>
      <div className="skill-stars">
        <div title={level} className={`skill-level-${getSkillLevel(level)}`}>
          {[...Array(getSkillLevel(level))].map((_, index) => (
            <HiStar key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;

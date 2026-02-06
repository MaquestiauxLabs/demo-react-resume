import React from 'react';
import { HiStar } from 'react-icons/hi2';

interface SkillItemProps {
  name: string;
  level: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
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
      <div className="skill-name">{name}</div>
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

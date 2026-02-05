import type { SkillCategory } from '@interfaces';
import React from 'react';
import SkillItem from './SkillItem';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = (props) => {
  return (
    <div className="skills">
      <div className="skills-header">Skills</div>
      {props.skills.map((category) => (
        <div key={category.category} className="skill-category">
          <div className="skill-category-name">{category.category}</div>
          <div className="skill-list">
            {category.skills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

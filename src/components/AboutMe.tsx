import type { PersonalInfo } from '@interfaces';
import React from 'react';

interface AboutMeProps extends PersonalInfo {}

const AboutMe: React.FC<AboutMeProps> = ({ about }) => {
  return (
    <div className="about-me">
      <div className="about-me-content">{about}</div>
    </div>
  );
};

export default AboutMe;

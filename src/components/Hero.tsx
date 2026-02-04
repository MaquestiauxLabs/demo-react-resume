import type { PersonalInfo } from '@interfaces';
import React from 'react';

interface HeroProps extends PersonalInfo {}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  location,
  email,
  phone,
  linkedin,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{title}</p>
      <p>{location}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{linkedin}</p>
      <ul>
        <li>1° Introduction</li>
        <li>2° Person short information</li>
        <li>2.1° Title i.e. Senior Application Architect</li>
        <li>2.2° Email i.e. user@example.com</li>
        <li>2.3° Social medias i.e. Linkeding link to profile</li>
      </ul>
    </div>
  );
};

export default Hero;

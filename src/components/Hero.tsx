import type { PersonalInfo } from '@interfaces';
import React from 'react';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

interface HeroProps extends PersonalInfo {}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  location,
  email,
  phone,
  linkedin,
  github,
  tagline,
}) => {
  return (
    <header className="relative overflow-hidden">
      <div className="relative z-10 py-4 px-6">
        <div className="text-center  bg-primary-50/70 p-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {name}
          </h1>
          {title && (
            <h2 className="text-xl md:text-2xl  font-medium mb-2">{title}</h2>
          )}
          {tagline && (
            <p className="text-s md:text-l text-gray-700 mb-6">{tagline}</p>
          )}
          <div className="flex flex-wrap justify-center gap-6">
            {location && (
              <p className="text-lg text-gray-600 flex items-center gap-2">
                <HiOutlineLocationMarker className="text-blue-500" />
                {location}
              </p>
            )}
            {email && (
              <p className="text-lg text-gray-600 flex items-center gap-2">
                <HiOutlineMail className="text-blue-500" />
                {email}
              </p>
            )}
            {phone && <p className="text-lg text-gray-600">{phone}</p>}
            {linkedin && (
              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                <SiLinkedin />
              </a>
            )}
            {github && (
              <a
                href={`https://${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-800 hover:underline"
              >
                <SiGithub className="text-blue-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

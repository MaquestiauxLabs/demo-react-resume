import type { PersonalInfo } from '@interfaces';
import React from 'react';
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiPhoneOutgoing,
} from 'react-icons/hi';
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
    <header className="hero">
      <div className="hero-content">
        <div className="hero-card">
          <h1 className="hero-name">{name}</h1>
          {title && <h2 className="hero-title">{title}</h2>}
          {tagline && <p className="hero-tagline">{tagline}</p>}
          <div className="hero-meta">
            {location && (
              <p className="hero-meta-item">
                <HiOutlineLocationMarker className="hero-icon" />
                {location}
              </p>
            )}
            {email && (
              <p className="hero-meta-item">
                <HiOutlineMail className="hero-icon" />
                {email}
              </p>
            )}
            {phone && (
              <p className="hero-meta-item">
                <HiPhoneOutgoing className="hero-icon" />
                {phone}
              </p>
            )}
            <div className="hero-socials">
              {linkedin && (
                <a
                  href={`https://${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-linkedin"
                >
                  <SiLinkedin />
                </a>
              )}
              {github && (
                <a
                  href={`https://${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-github"
                >
                  <SiGithub className="hero-icon" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

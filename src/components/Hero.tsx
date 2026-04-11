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
              <p className="hero-meta-item hero-meta-item-full">
                <HiOutlineLocationMarker className="hero-icon" />
                <span className="hero-meta-text">{location}</span>
              </p>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="hero-meta-item hero-meta-item-full"
              >
                <HiOutlineMail className="hero-icon" />
                <span className="hero-meta-text hero-meta-email">{email}</span>
              </a>
            )}

            {phone && (
              <a href={`tel:${phone}`} className="hero-meta-item">
                <HiPhoneOutgoing className="hero-icon" />
                <span className="hero-meta-text">{phone}</span>
              </a>
            )}

            <div className="hero-socials">
              {linkedin && (
                <a
                  href={`https://${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-linkedin"
                  aria-label="LinkedIn profile"
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
                  aria-label="GitHub profile"
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

import type { PersonalInfo } from '@interfaces/personal-info';
import React from 'react';

interface FooterProps extends PersonalInfo {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-card">
          <div className="footer-name">{props.name}</div>
          <div className="footer-title">{props.title}</div>
          <div className="footer-contact">
            <div className="footer-email">{props.email}</div>
            <div className="footer-phone">{props.phone}</div>
          </div>
          <div className="footer-copyright">
            Copyright &copy; {new Date().getFullYear()} {props.name}. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

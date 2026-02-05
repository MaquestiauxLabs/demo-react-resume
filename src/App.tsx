import AboutMe from '@components/AboutMe';
import Experiences from '@components/Experiences';
import Skills from '@components/Skills';
import type { Experience, SkillCategory } from '@interfaces';
import type React from 'react';
import './App.css';
import Hero from './components/Hero';
import { experiences, personalInfo, skills } from './data';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero {...personalInfo} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <AboutMe {...personalInfo} />
          <Skills skills={skills as SkillCategory[]} />
        </div>
        <div className="md:col-span-2">
          <Experiences experiences={experiences as Experience[]} />
          <div>Eduction</div>
          <div>Languages</div>
          <div>Trainings</div>
        </div>
      </div>
      <div>FOOTER</div>
    </div>
  );
};

export default App;

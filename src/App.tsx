import AboutMe from '@components/AboutMe';
import Skills from '@components/Skills';
import type React from 'react';
import './App.css';
import Hero from './components/Hero';
import { personalInfo, skills } from './data';
import type { SkillCategory } from '@interfaces';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero {...personalInfo} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <AboutMe {...personalInfo} />
          <Skills skills={skills as SkillCategory[]} />
        </div>
        <div className="md:col-span-2">right</div>
      </div>
    </div>
  );
};

export default App;

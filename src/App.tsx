import AboutMe from '@components/AboutMe';
import Educations from '@components/Educations';
import Experiences from '@components/Experiences';
import Languages from '@components/Languages';
import Skills from '@components/Skills';
import Trainings from '@components/Trainings';
import type {
  Education,
  Experience,
  SkillCategory,
  Training,
} from '@interfaces';
import type { Language } from '@interfaces/languages';
import type React from 'react';
import './App.css';
import Hero from './components/Hero';
import {
  educations,
  experiences,
  languages,
  personalInfo,
  skills,
  trainings,
} from './data';

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
          <Languages languages={languages as Language[]} />
          <Trainings trainings={trainings as Training[]} />
          <Educations education={educations as Education[]} />
        </div>
      </div>
      <div>FOOTER</div>
    </div>
  );
};

export default App;

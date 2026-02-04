import type React from 'react';
import './App.css';
import Hero from './components/Hero';

import { personalInfo } from './data';

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-primary-50 via-secondary-50 to-accent-50">
        <Hero {...personalInfo} />
      </div>
    </>
  );
};

export default App;

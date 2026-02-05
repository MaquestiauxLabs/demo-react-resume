import type React from 'react';
import './App.css';
import Hero from './components/Hero';

import { personalInfo } from './data';

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-primary-00">
        <Hero {...personalInfo} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>Left</div>
          <div className="md:col-span-2">right</div>
        </div>
      </div>
    </>
  );
};

export default App;

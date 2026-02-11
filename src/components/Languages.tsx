import type { Language } from '@interfaces';
import React from 'react';
import LanguageItem from './LanguageItem';

interface LanguageProps {
  languages: Language[];
}

const Languages: React.FC<LanguageProps> = (props) => {
  return (
    <div className="languages">
      <div className="languages-header">Languages</div>
      <div className="languages-list">
        {props.languages.map((lang) => (
          <LanguageItem key={lang.isocode} language={lang} />
        ))}
      </div>
    </div>
  );
};

export default Languages;

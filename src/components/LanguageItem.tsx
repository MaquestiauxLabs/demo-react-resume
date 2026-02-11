import { getLanguageFlag, languageLevels } from '@constants';
import type { Language } from '@interfaces';
import React from 'react';

interface LanguageItemProps {
  language: Language;
}

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
  const activeIndex = languageLevels.indexOf(props.language.level);
  return (
    <div className="language-item">
      <div className="language-item-top-row">
        <div className="language-item-flag">
          {getLanguageFlag(props.language.isocode)}
        </div>
        <div className="language-item-name">{props.language.name}</div>
        <div className="language-item-level">{props.language.level}</div>
      </div>
      <div className="language-item-proficiency">
        {languageLevels.map((l, i) => (
          <div
            key={l}
            title={l} // Basic tooltip
            className={`language-item-proficiency-bar ${
              i <= activeIndex ? 'active' : 'inactive'
            }`}
          />
        ))}
      </div>
      <div className="language-item-mother-tongue">
        {props.language.motherTongue ? 'Mother Tongue' : ''}
      </div>
    </div>
  );
};

export default LanguageItem;

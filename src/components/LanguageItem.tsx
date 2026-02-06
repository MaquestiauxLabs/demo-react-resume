import type { Language } from '@interfaces';
import React from 'react';

interface LanguageItemProps {
  language: Language;
}

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
  return (
    <div className="language-item">
      <div className="language-item-top-row">
        <div className="w-10 h-7 rounded-md overflow-hidden shadow-sm border border-slate-700">
          {props.language.isocode}
        </div>
        <div className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider border border-blue-500/20">
          {props.language.level}
        </div>
      </div>
      <div className="mb-6 text-xl font-bold">{props.language.name}</div>
      <div>PROGRESS</div>
    </div>
  );
};

export default LanguageItem;

import type { Language } from '@interfaces';
import React from 'react';

interface LanguageItemProps {
  language: Language;
}

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const activeIndex = levels.indexOf(props.language.level);
  return (
    <div className="language-item">
      <div className="language-item-top-row">
        <div className="w-10 h-7">{props.language.isocode}</div>
        <div className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider border border-blue-500/20">
          {props.language.level}
        </div>
      </div>
      <div className="mb-6 text-xl font-bold">{props.language.name}</div>
      <div className="flex gap-1.5 h-1.5">
        {levels.map((l, i) => (
          <div
            key={l}
            title={l} // Basic tooltip
            className={`flex-1 rounded-full transition-all duration-500 ${
              i <= activeIndex
                ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                : 'bg-slate-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageItem;

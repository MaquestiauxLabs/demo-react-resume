import type { Training } from '@interfaces';
import { HiAcademicCap, HiCalendar, HiOfficeBuilding } from 'react-icons/hi';

const TrainingItem: React.FC<Training> = (training) => {
  return (
    <div className="training-item">
      <div className="training-item-top">
        <div className="training-name">
          <HiAcademicCap className="training-item-icon" />
          <span>{training.name}</span>
        </div>
        <div className="training-item-meta">
          <div className="training-date">
            <HiCalendar className="training-item-icon" />
            <span>{training.date}</span>
          </div>
        </div>
      </div>

      <div className="training-issuer-row">
        <div className="training-issuer">
          <HiOfficeBuilding className="training-item-icon" />
          <span>{training.issuer}</span>
        </div>
        {training.selfTrained && (
          <div className="training-mode training-mode-self">Self-trained</div>
        )}
      </div>

      {training.description && (
        <div className="training-description">{training.description}</div>
      )}
    </div>
  );
};

export default TrainingItem;

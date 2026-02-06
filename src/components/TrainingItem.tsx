import type { Training } from '@interfaces';
import { HiAcademicCap, HiCalendar, HiOfficeBuilding } from 'react-icons/hi';

const TrainingItem: React.FC<Training> = (training) => {
  return (
    <div key={training.name} className="training-item">
      <div className="training-name">
        <HiAcademicCap className="mr-2 text-blue-500" />
        {training.name}
      </div>
      <div className="training-meta">
        <div className="training-issuer">
          <HiOfficeBuilding className="mr-2 text-blue-500" />
          {training.issuer}
        </div>
        <div className="training-date">
          <HiCalendar className="mr-2 text-blue-500" />
          {training.date}
        </div>
      </div>
      {training.description && (
        <div className="training-description">{training.description}</div>
      )}
    </div>
  );
};

export default TrainingItem;

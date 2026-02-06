import type { Training } from '@interfaces';
import React from 'react';
import TrainingItem from './TrainingItem';

interface TrainingProps {
  trainings: Training[];
}
const Trainings: React.FC<TrainingProps> = (props) => {
  return (
    <div className="trainings">
      <div className="trainings-header">Trainings</div>
      <div className="trainings-list">
        {props.trainings.map((training) => (
          <TrainingItem key={training.name} {...training} />
        ))}
      </div>
    </div>
  );
};

export default Trainings;

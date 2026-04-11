import type { Training } from '@interfaces';
import { PAGINATION_DEFAULTS } from '@constants';
import React from 'react';
import PaginationNav from './PaginationNav';
import TrainingItem from './TrainingItem';

interface TrainingProps {
  trainings: Training[];
  itemsPerPage?: number;
  ellipsisThreshold?: number;
}

const Trainings: React.FC<TrainingProps> = ({
  trainings,
  itemsPerPage = PAGINATION_DEFAULTS.trainingsPerPage,
  ellipsisThreshold = PAGINATION_DEFAULTS.ellipsisThreshold,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(trainings.length / itemsPerPage));

  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const pagedTrainings = trainings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="trainings">
      <div className="trainings-header">Trainings</div>
      <div className="trainings-list">
        {pagedTrainings.map((training) => (
          <TrainingItem key={training.id} {...training} />
        ))}
      </div>

      <PaginationNav
        variant="trainings"
        currentPage={currentPage}
        totalPages={totalPages}
        ellipsisThreshold={ellipsisThreshold}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Trainings;

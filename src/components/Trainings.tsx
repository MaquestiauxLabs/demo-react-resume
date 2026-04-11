import type { Training } from '@interfaces';
import React from 'react';
import TrainingItem from './TrainingItem';

interface TrainingProps {
  trainings: Training[];
}

const TRAININGS_PER_PAGE = 6;

const Trainings: React.FC<TrainingProps> = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.max(
    1,
    Math.ceil(props.trainings.length / TRAININGS_PER_PAGE),
  );

  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const pagedTrainings = props.trainings.slice(
    (currentPage - 1) * TRAININGS_PER_PAGE,
    currentPage * TRAININGS_PER_PAGE,
  );

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="trainings">
      <div className="trainings-header">Trainings</div>
      <div className="trainings-list">
        {pagedTrainings.map((training) => (
          <TrainingItem key={training.id} {...training} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="trainings-pagination">
          <div className="trainings-pagination-summary">
            Page {currentPage} / {totalPages}
          </div>
          <div className="trainings-pagination-nav">
            <button
              type="button"
              className="trainings-pagination-arrow"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              ←
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                className={`trainings-pagination-page ${page === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className="trainings-pagination-arrow"
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              aria-label="Go to next page"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trainings;

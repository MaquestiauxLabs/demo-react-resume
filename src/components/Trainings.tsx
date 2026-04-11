import type { Training } from '@interfaces';
import { PAGINATION_DEFAULTS, getPaginationTokens } from '@constants';
import React from 'react';
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

  const pageTokens = getPaginationTokens(
    currentPage,
    totalPages,
    ellipsisThreshold,
  );

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
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              aria-label="Go to first page"
            >
              «
            </button>
            <button
              type="button"
              className="trainings-pagination-arrow"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              ←
            </button>

            {pageTokens.map((token) =>
              typeof token === 'number' ? (
                <button
                  key={token}
                  type="button"
                  className={`trainings-pagination-page ${token === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(token)}
                  aria-label={`Go to page ${token}`}
                  aria-current={token === currentPage ? 'page' : undefined}
                >
                  {token}
                </button>
              ) : (
                <span
                  key={token}
                  className="trainings-pagination-ellipsis"
                  aria-hidden="true"
                >
                  ...
                </span>
              ),
            )}

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
            <button
              type="button"
              className="trainings-pagination-arrow"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Go to last page"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trainings;

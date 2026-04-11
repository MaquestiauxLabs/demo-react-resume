import type { Training } from '@interfaces';
import React from 'react';
import TrainingItem from './TrainingItem';

interface TrainingProps {
  trainings: Training[];
}

const TRAININGS_PER_PAGE = 6;
type PaginationToken = number | 'ellipsis-left' | 'ellipsis-right';

const getPaginationTokens = (
  currentPage: number,
  totalPages: number,
): PaginationToken[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const tokens: PaginationToken[] = [];
  if (currentPage > 1) tokens.push('ellipsis-left');
  tokens.push(currentPage);
  if (currentPage < totalPages) tokens.push('ellipsis-right');
  return tokens;
};

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

  const pageTokens = getPaginationTokens(currentPage, totalPages);

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
          </div>
        </div>
      )}
    </div>
  );
};

export default Trainings;

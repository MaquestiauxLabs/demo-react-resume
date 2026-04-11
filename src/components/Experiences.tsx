import type { Experience } from '@interfaces';
import { PAGINATION_DEFAULTS, getPaginationTokens } from '@constants';
import React from 'react';
import ExperienceItem from './ExperienceItem';

interface ExperiencesProps {
  experiences: Experience[];
  itemsPerPage?: number;
  ellipsisThreshold?: number;
}

const Experiences: React.FC<ExperiencesProps> = ({
  experiences,
  itemsPerPage = PAGINATION_DEFAULTS.experiencesPerPage,
  ellipsisThreshold = PAGINATION_DEFAULTS.ellipsisThreshold,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(experiences.length / itemsPerPage));

  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const pagedExperiences = experiences.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const pageTokens = getPaginationTokens(
    currentPage,
    totalPages,
    ellipsisThreshold,
  );

  return (
    <div className="experiences">
      <div className="experiences-header">Experiences</div>
      <div className="experiences-list">
        {pagedExperiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="experiences-pagination">
          <div className="experiences-pagination-summary">
            Page {currentPage} / {totalPages}
          </div>
          <div className="experiences-pagination-nav">
            <button
              type="button"
              className="experiences-pagination-arrow"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              aria-label="Go to first page"
            >
              «
            </button>
            <button
              type="button"
              className="experiences-pagination-arrow"
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
                  className={`experiences-pagination-page ${token === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(token)}
                  aria-label={`Go to page ${token}`}
                  aria-current={token === currentPage ? 'page' : undefined}
                >
                  {token}
                </button>
              ) : (
                <span
                  key={token}
                  className="experiences-pagination-ellipsis"
                  aria-hidden="true"
                >
                  ...
                </span>
              ),
            )}

            <button
              type="button"
              className="experiences-pagination-arrow"
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
              className="experiences-pagination-arrow"
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

export default Experiences;

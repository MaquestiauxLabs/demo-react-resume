import type { Experience } from '@interfaces';
import React from 'react';
import ExperienceItem from './ExperienceItem';

interface ExperiencesProps {
  experiences: Experience[];
}

const EXPERIENCES_PER_PAGE = 3;
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

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.max(
    1,
    Math.ceil(experiences.length / EXPERIENCES_PER_PAGE),
  );

  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const pagedExperiences = experiences.slice(
    (currentPage - 1) * EXPERIENCES_PER_PAGE,
    currentPage * EXPERIENCES_PER_PAGE,
  );

  const pageTokens = getPaginationTokens(currentPage, totalPages);

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
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiences;

import type { Experience } from '@interfaces';
import React from 'react';
import ExperienceItem from './ExperienceItem';

interface ExperiencesProps {
  experiences: Experience[];
}

const EXPERIENCES_PER_PAGE = 3;

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

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
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
                className={`experiences-pagination-page ${page === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            ))}

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

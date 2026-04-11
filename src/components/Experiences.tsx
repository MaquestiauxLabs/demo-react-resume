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

  return (
    <div className="experiences">
      <div className="experiences-header">Experiences</div>
      <div className="experiences-list">
        {pagedExperiences.map((exp, index) => (
          <ExperienceItem
            key={`${exp.company}-${exp.position}-${index}`}
            {...exp}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="experiences-pagination">
          <button
            type="button"
            className="experiences-pagination-button"
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="experiences-pagination-status">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="experiences-pagination-button"
            onClick={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Experiences;

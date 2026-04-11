import type { Experience } from '@interfaces';
import { PAGINATION_DEFAULTS } from '@constants';
import React from 'react';
import ExperienceItem from './ExperienceItem';
import PaginationNav from './PaginationNav';

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
  const headerRef = React.useRef<HTMLDivElement>(null);
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

  const handlePageChange = React.useCallback(
    (page: number) => {
      if (page === currentPage) return;
      setCurrentPage(page);
      headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [currentPage],
  );

  return (
    <div className="experiences">
      <div ref={headerRef} className="experiences-header">
        Experiences
      </div>
      <div className="experiences-list">
        {pagedExperiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>

      <PaginationNav
        variant="experiences"
        currentPage={currentPage}
        totalPages={totalPages}
        ellipsisThreshold={ellipsisThreshold}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Experiences;

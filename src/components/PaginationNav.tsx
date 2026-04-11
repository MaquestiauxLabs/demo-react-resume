import { getPaginationTokens } from '@constants';
import React from 'react';

interface PaginationNavProps {
  variant: 'experiences' | 'trainings';
  currentPage: number;
  totalPages: number;
  ellipsisThreshold: number;
  onPageChange: (page: number) => void;
}

const PaginationNav: React.FC<PaginationNavProps> = ({
  variant,
  currentPage,
  totalPages,
  ellipsisThreshold,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pageTokens = getPaginationTokens(
    currentPage,
    totalPages,
    ellipsisThreshold,
  );

  const classBase = `${variant}-pagination`;

  return (
    <div className={classBase}>
      <div className={`${classBase}-summary`}>
        Page {currentPage} / {totalPages}
      </div>
      <div className={`${classBase}-nav`}>
        <button
          type="button"
          className={`${classBase}-arrow`}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="Go to first page"
        >
          «
        </button>
        <button
          type="button"
          className={`${classBase}-arrow`}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
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
              className={`${classBase}-page ${token === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(token)}
              aria-label={`Go to page ${token}`}
              aria-current={token === currentPage ? 'page' : undefined}
            >
              {token}
            </button>
          ) : (
            <span
              key={token}
              className={`${classBase}-ellipsis`}
              aria-hidden="true"
            >
              ...
            </span>
          ),
        )}

        <button
          type="button"
          className={`${classBase}-arrow`}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          →
        </button>
        <button
          type="button"
          className={`${classBase}-arrow`}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Go to last page"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default PaginationNav;

export type PaginationToken = number | 'ellipsis-left' | 'ellipsis-right';

export const PAGINATION_DEFAULTS = {
  experiencesPerPage: 3,
  trainingsPerPage: 6,
  ellipsisThreshold: 7,
} as const;

export const getPaginationTokens = (
  currentPage: number,
  totalPages: number,
  ellipsisThreshold: number = PAGINATION_DEFAULTS.ellipsisThreshold,
): PaginationToken[] => {
  if (totalPages <= ellipsisThreshold) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const tokens: PaginationToken[] = [];
  if (currentPage > 1) tokens.push('ellipsis-left');
  tokens.push(currentPage);
  if (currentPage < totalPages) tokens.push('ellipsis-right');

  return tokens;
};

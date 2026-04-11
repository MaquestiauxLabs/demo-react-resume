import type { Experience } from '@interfaces';

const parseDate = (value: string): Date => {
  const [day, month, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
};

export const computeSkillMonths = (
  skillId: string,
  experiences: Experience[],
): number => {
  const today = new Date();
  return experiences
    .filter((exp) => exp.skillIds?.includes(skillId))
    .reduce((total, exp) => {
      const start = parseDate(exp.startDate);
      const end = exp.endDate ? parseDate(exp.endDate) : today;
      const months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
      return total + Math.max(0, months);
    }, 0);
};

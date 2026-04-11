export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  location: string;
  responsibilities: string[];
  skillIds?: string[];
  otherTechnologies?: string[];
}

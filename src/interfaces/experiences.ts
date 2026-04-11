export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  location: string;
  responsibilities: string[];
  skillIds?: string[];
  otherTechnologies?: string[];
}

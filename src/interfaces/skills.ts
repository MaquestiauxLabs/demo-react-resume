export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'basic';
  months?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

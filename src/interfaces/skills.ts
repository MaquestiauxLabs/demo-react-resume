export interface Skill {
  id: string;
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'basic';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

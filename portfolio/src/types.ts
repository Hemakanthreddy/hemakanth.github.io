export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Project {
  title: string;
  role: string;
  description: string[];
  technologies: string[];
  imageType: 'irrigation' | 'pcb' | 'nayepankh' | 'coalition';
}

export interface Certification {
  title: string;
  issuer: string;
  id?: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string[];
  currentlyOngoing?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

// ------- Tipo para campos biligües ------
export interface Bilingual {
  es: string;
  en: string;
}

export interface PersonalInfo {
  fullName: string;
  shortName: string;
  title: Bilingual;
  photo: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
  summary: Bilingual;
}

export interface Experience {
  id: number;
  company: string;
  position: Bilingual;
  startDate: string;
  endDate: string | 'Actual';
  description: Bilingual;
  achievements: Bilingual[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: Bilingual;
  field: Bilingual;
  startDate: string;
  endDate: string;
  description?: Bilingual;
  logo?: string;
}

export type TechCategory =
  | 'languages'
  | 'frameworks'
  | 'databases'
  | 'tools'
  | 'cloud'
  | 'testing';

export interface Technology {
  name: string;
  iconKey: string;
  category: TechCategory;
}

export interface TechCategoryInfo {
  key: TechCategory;
  label: Bilingual;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: Bilingual;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CvDataInfo {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  technologies: Technology[];
  projects: Project[];
  certifications: Certification[];
}
export type ProfileType = {
  fullName: string;
  position: string;
  email: string;
  profilePicture: string;
  resume: string;
  linkedin: string;
  github: string;
};

export type AboutType = {
  aboutPic?: string;
  bio: string;
  experienceSummaryLines: string[];
  educationSummaryLines: string[];
};

export type SkillType = {
  name: string;
  level: string;
};

export type ExperienceType = {
  categoryName: string;
  skills: SkillType[];
};

export type FeatureType = {
  name: string;
  description: string;
};
export type Assets = {
  path: string;
  alt: string;
};
export type ProjectType = {
  title: string;
  description: string;

  repository: string | null;
  demo: string | null;
  technologies: string[] | null;
  image: string | null;
  disclaimer?: string | null;
  shortDescription?: string;
  features?: FeatureType[];
  benefits?: string[];
  assets?: Assets[];
};

export type PortfolioType = {
  profile: ProfileType;
  about: AboutType;
  experiences: ExperienceType[];
  projects: ProjectType[];
};

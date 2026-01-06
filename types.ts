
export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechItem {
  title: string;
  description: string;
  image: string;
}

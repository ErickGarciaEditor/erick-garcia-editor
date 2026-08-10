export type CaseMedia = {
  id: string;
  type: 'video' | 'image';
  label: string;
  src: string;
  alt?: string;
};

export type CaseMetric = {
  label: string;
  image: string;
  alt: string;
};

export type PortfolioCase = {
  slug: string;
  clientName: string;
  summary: string;
  responsibilities: string[];
  transparencyNote: string;
  resultNote?: string;
  platforms: string[];
  video?: CaseMedia;
  metrics: CaseMetric[];
};

export type WebsiteProject = {
  slug: string;
  clientName: string;
  segment: string;
  projectType: string;
  problem: string;
  strategy: string;
  pagesCount: string;
  features: string[];
  liveUrl?: string;
  desktopImage?: string;
  mobileImage?: string;
  isPublished: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  items: string[];
};

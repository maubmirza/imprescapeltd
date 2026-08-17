export type ServiceCategory =
  | 'extensions'
  | 'renovations'
  | 'resin-bound'
  | 'block-paving'
  | 'indian-stone'
  | 'rubber-surfacing';

export interface ServiceItem {
  id: ServiceCategory;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  materials?: string[];
  swatches?: { name: string; color: string; description?: string }[];
  typicalDuration?: string;
  guaranteeYears: number;
  image: string;
  colorTheme: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  location: string;
  county: 'Cheshire' | 'Staffordshire' | 'Shropshire' | 'Macclesfield';
  year: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  materials: string;
  duration?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  county: string;
  projectType: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'planning' | 'driveways' | 'costs';
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  projectType: string;
  propertyType?: string;
  estimatedSize?: string;
  timeframe?: string;
  message: string;
  preferredSurveyDate?: string;
}

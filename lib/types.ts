export interface Service {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  gradient: string;
  image?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Technology {
  name: string;
  icon: string;
  tier: "basic" | "intermediate" | "enterprise";
}

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ClientLogo {
  name: string;
  initial: string;
}

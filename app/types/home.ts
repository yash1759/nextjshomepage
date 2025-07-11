export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface FeaturesData {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface GrowthMetric {
  number: string;
  label: string;
}

export interface GrowthData {
  title: string;
  metrics: GrowthMetric[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface TestimonialsData {
  title: string;
  items: TestimonialItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  title: string;
  items: FaqItem[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
}

export interface HomePageData {
  hero: HeroData;
  features: FeaturesData;
  growth: GrowthData;
  team: TeamData;
  managers: TeamData;
  testimonials: TestimonialsData;
  faq: FaqData;
  contact: ContactData;
} 
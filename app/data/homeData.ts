import { HomePageData } from '../types/home';

export const homeData: HomePageData = {
  hero: {
    title: "Crafting Future-Ready Digital Experiences",
    subtitle: "At Sybotstack, we're a full-spectrum digital product studio on a mission to turn bold ideas into market-ready solutions that drive real business impact.",
    ctaText: "Get Started Today",
    backgroundImage: "/images/abovefold.jpg"
  },
  features: {
    title: "Why Choose Us",
    subtitle: "Discover what makes us the preferred choice for businesses seeking reliable IT solutions.",
    items: [
      {
        icon: "⚡",
        title: "24/7 Support",
        description: "Round-the-clock technical support ensures your business never faces downtime. Our expert team is always ready to help.",
        color: "blue"
      },
      {
        icon: "🛡️",
        title: "Advanced Security",
        description: "State-of-the-art security measures protect your data and systems from evolving cyber threats and vulnerabilities.",
        color: "green"
      },
      {
        icon: "📈",
        title: "Scalable Solutions",
        description: "Our solutions grow with your business. From startups to enterprises, we provide scalable IT infrastructure.",
        color: "purple"
      },
      {
        icon: "🎯",
        title: "Custom Solutions",
        description: "Every business is unique. We create tailored IT solutions that perfectly align with your specific needs and goals.",
        color: "orange"
      },
      {
        icon: "💡",
        title: "Expert Team",
        description: "Certified professionals with years of experience in the latest technologies and industry best practices.",
        color: "red"
      },
      {
        icon: "💰",
        title: "Cost Effective",
        description: "Maximize your IT budget with our cost-effective solutions that deliver exceptional value and ROI.",
        color: "teal"
      }
    ]
  },
  growth: {
    title: "Our Growth",
    metrics: [
      { number: "500+", label: "Happy Clients" },
      { number: "1000+", label: "Projects Completed" },
      { number: "50+", label: "Team Members" },
      { number: "24/7", label: "Support Available" }
    ]
  },
  team: {
    title: "Our Team",
    subtitle: "Meet the talented professionals behind our success",
    members: []
  },
  managers: {
    title: "Leadership Team",
    subtitle: "Meet our experienced leadership team",
    members: []
  },
  testimonials: {
    title: "What Our Clients Say",
    items: []
  },
  faq: {
    title: "Frequently Asked Questions",
    items: []
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Ready to start your project? Let's talk!",
    email: "contact@sybotstack.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Digital City, DC 12345"
  }
}; 
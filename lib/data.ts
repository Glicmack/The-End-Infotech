import { Service, Project, Testimonial, FAQItem, Technology, NavLink, ClientLogo } from "./types";

export const navLinks: NavLink[] = [
  { label: "Portfolio", href: "#portfolio", hasDropdown: true },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Technologies", href: "#technologies", hasDropdown: true },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Client Rating", value: 5.0, suffix: "/5" },
  { label: "Years Experience", value: 5, suffix: "+" },
];

export const heroWords = ["Digital", "Tech", "Creative", "Site", "App", "Web solution"];

export const services: Service[] = [
  {
    id: 1,
    title: "Website Development",
    description: "Custom websites built with cutting-edge frameworks. From corporate portals to complex web apps.",
    tags: ["React", "Next.js", "Vue.js", "WordPress", "Laravel", "Node.js"],
    icon: "↘",
  },
  {
    id: 2,
    title: "Branding and Design",
    description: "Complete brand identity, UI/UX design, and visual systems that elevate your business.",
    tags: ["Logo Design", "UI/UX", "Brand Identity", "Figma", "Adobe Suite"],
    icon: "↘",
  },
  {
    id: 3,
    title: "CRM System",
    description: "Custom CRM solutions tailored to your workflow. Automate, manage, and scale.",
    tags: ["Custom CRM", "Salesforce", "HubSpot", "Automation", "API Integration"],
    icon: "↘",
  },
  {
    id: 4,
    title: "E-commerce",
    description: "End-to-end online store development with payments, inventory, and optimized checkout.",
    tags: ["Shopify", "WooCommerce", "Custom Stores", "Payment Gateways"],
    icon: "↘",
  },
  {
    id: 5,
    title: "Landing Page",
    description: "High-converting landing pages designed to capture leads and drive action.",
    tags: ["Conversion Optimization", "A/B Testing", "Analytics", "Lead Gen"],
    icon: "↘",
  },
  {
    id: 6,
    title: "Website Support",
    description: "Ongoing maintenance, security updates, performance monitoring, and content management.",
    tags: ["Maintenance", "Security", "Performance", "Updates"],
    icon: "↘",
  },
  {
    id: 7,
    title: "Redesign",
    description: "Transform your outdated website into a modern, fast, and engaging digital experience.",
    tags: ["UI Overhaul", "Performance", "UX Audit", "Migration"],
    icon: "↘",
  },
  {
    id: 8,
    title: "Application Development",
    description: "Native and cross-platform mobile apps for iOS and Android with seamless UX.",
    tags: ["iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin"],
    icon: "↘",
  },
  {
    id: 9,
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies that boost visibility, traffic, and conversions.",
    tags: ["On-page SEO", "Technical SEO", "Content Strategy", "Analytics"],
    icon: "↘",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "FinTrack",
    category: "Web Development",
    tags: ["UX/UI Design", "Front end", "React.js / Node.js"],
    gradient: "from-blue-600 to-cyan-400",
    image: "/img/projects/project-1.webp",
  },
  {
    id: 2,
    title: "ShopEase",
    category: "E-commerce",
    tags: ["UX/UI Design", "Front end", "Shopify"],
    gradient: "from-purple-600 to-pink-400",
    image: "/img/projects/project-2.webp",
  },
  {
    id: 3,
    title: "GreenLeaf",
    category: "Branding",
    tags: ["Logo", "Brand Identity", "UX/UI Design"],
    gradient: "from-emerald-600 to-teal-400",
    image: "/img/projects/project-3.webp",
  },
  {
    id: 4,
    title: "CloudSync",
    category: "Web Development",
    tags: ["UX/UI Design", "Front end", "Back end", "Python / Django"],
    gradient: "from-indigo-600 to-blue-400",
    image: "/img/projects/project-4.webp",
  },
  {
    id: 5,
    title: "FitLife",
    category: "Mobile Apps",
    tags: ["UX/UI Design", "Mobile Dev", "React Native"],
    gradient: "from-orange-500 to-amber-400",
    image: "/img/projects/project-5.webp",
  },
  {
    id: 6,
    title: "TechNova",
    category: "Web Development",
    tags: ["UX/UI Design", "Front end", "Back end"],
    gradient: "from-rose-600 to-red-400",
    image: "/img/projects/project-6.webp",
  },
  {
    id: 7,
    title: "AutoCRM",
    category: "CRM System",
    tags: ["CRM", "Automation", "Back end", "Node.js"],
    gradient: "from-violet-600 to-purple-400",
    image: "/img/projects/project-7.webp",
  },
  {
    id: 8,
    title: "StyleHouse",
    category: "E-commerce",
    tags: ["E-commerce", "UX/UI Design", "Front end", "WooCommerce"],
    gradient: "from-sky-500 to-cyan-400",
    image: "/img/projects/project-8.webp",
  },
];

export const portfolioCategories = [
  "All Projects",
  "Creative",
  "E-commerce",
  "Web Development",
  "Mobile Apps",
  "CRM System",
  "Branding",
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "THE END INFOTECH delivered an exceptional website representing our business and services. The site was user-friendly, visually appealing, and well-planned. The team's responsibility and cooperation in meeting all requirements with precision were remarkable.",
    name: "Priya Sharma",
    role: "Marketing Specialist",
    company: "TechVentures India",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with THE END INFOTECH was seamless from start to finish. They understood our vision perfectly and delivered a mobile app that exceeded expectations. The attention to detail and technical expertise is outstanding.",
    name: "Rajesh Kumar",
    role: "CTO",
    company: "InnoApps",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Their digital strategy doubled our online presence within months. The team is responsive, data-driven, and genuinely invested in delivering results. Highly recommend for any business looking to scale.",
    name: "Ananya Patel",
    role: "Director",
    company: "GrowthFirst",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "From branding to development, they handled everything with professionalism and creativity. Our new CRM system has streamlined operations and the team continues to provide excellent support.",
    name: "Vikram Singh",
    role: "Operations Head",
    company: "ScaleUp Solutions",
    rating: 5,
  },
];

export const clientLogos: ClientLogo[] = [
  { name: "TechVentures", initial: "TV" },
  { name: "InnoApps", initial: "IA" },
  { name: "GrowthFirst", initial: "GF" },
  { name: "ScaleUp", initial: "SU" },
  { name: "CloudNine", initial: "CN" },
  { name: "DataPrime", initial: "DP" },
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is the price for development?",
    answer:
      "Project costs vary based on scope, complexity, and timeline. We provide detailed estimates after an initial consultation. We offer flexible pricing models including fixed-price and time & materials approaches to suit your budget.",
  },
  {
    id: 2,
    question: "What terms do we offer?",
    answer:
      "A standard website takes 4-8 weeks, mobile apps 8-16 weeks, and complex enterprise solutions 3-6 months. We provide detailed timelines during project planning and keep you updated with regular progress reports.",
  },
  {
    id: 3,
    question: "What we are offering for website promotion?",
    answer:
      "We offer comprehensive digital marketing including SEO, content marketing, social media management, PPC advertising, and analytics. Our data-driven approach ensures measurable results and continuous optimization.",
  },
  {
    id: 4,
    question: "How you estimate the cost?",
    answer:
      "We estimate costs based on project scope, technical complexity, design requirements, timeline, and team composition. After an initial discovery call, we provide a detailed breakdown with transparent pricing.",
  },
  {
    id: 5,
    question: "What services does your support service provide?",
    answer:
      "Our support includes bug fixes, performance monitoring, security updates, content management, feature enhancements, server maintenance, and 24/7 emergency response for critical issues.",
  },
  {
    id: 6,
    question: "What is the difference between a custom solution and a ready-made solution?",
    answer:
      "Custom solutions are built from scratch to match your exact needs, offering full flexibility and scalability. Ready-made solutions use existing platforms with customization, offering faster deployment at lower initial cost but with limitations on unique functionality.",
  },
  {
    id: 7,
    question: "How is the website development process conducted?",
    answer:
      "Our process: Brief & Discovery → Planning & Architecture → UI/UX Design → Development & Integration → Testing & QA → Deployment → Post-launch Support. We use agile methodology with regular check-ins and demos.",
  },
];

export const technologies: Technology[] = [
  { name: "HTML5", icon: "/img/tech/html.svg", tier: "basic" },
  { name: "CSS3", icon: "/img/tech/css.svg", tier: "basic" },
  { name: "WordPress", icon: "📝", tier: "basic" },
  { name: "Shopify", icon: "🛍️", tier: "basic" },
  { name: "Laravel", icon: "🔴", tier: "intermediate" },
  { name: "MySQL", icon: "🗄️", tier: "intermediate" },
  { name: "Vue.js", icon: "💚", tier: "intermediate" },
  { name: "PHP", icon: "🐘", tier: "intermediate" },
  { name: "React", icon: "⚛️", tier: "enterprise" },
  { name: "Angular", icon: "/img/tech/angular.svg", tier: "enterprise" },
  { name: "Python", icon: "🐍", tier: "enterprise" },
  { name: "Node.js", icon: "🟢", tier: "enterprise" },
  { name: "AWS", icon: "☁️", tier: "enterprise" },
  { name: "Azure", icon: "/img/tech/azure.svg", tier: "enterprise" },
];

export const footerLinks = {
  portfolio: [
    { label: "Creative", href: "#portfolio" },
    { label: "Real estate", href: "#portfolio" },
    { label: "Marketing / Corporate", href: "#portfolio" },
    { label: "Landing page", href: "#portfolio" },
    { label: "Online store", href: "#portfolio" },
    { label: "Branding", href: "#portfolio" },
    { label: "Web solution", href: "#portfolio" },
  ],
  services: [
    { label: "Website development", href: "#services" },
    { label: "Branding and design", href: "#services" },
    { label: "CRM system", href: "#services" },
    { label: "E-commerce", href: "#services" },
    { label: "Landing page", href: "#services" },
    { label: "Website support", href: "#services" },
    { label: "Redesign", href: "#services" },
    { label: "Application development", href: "#services" },
    { label: "Search engine optimisation", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ],
};

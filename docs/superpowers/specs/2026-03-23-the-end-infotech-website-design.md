# THE END INFOTECH - Company Website Design Spec

## Context

THE END INFOTECH needs a professional company website that showcases their full-spectrum services across all fields. The website should closely follow the layout structure of redstone.software but adapted for a broader, multi-industry service company. It will be built locally first and later deployed to GitHub Pages with a custom domain.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Static export (`next export`) for GitHub Pages

## Design System

### Colors
- **Background**: Dark (#0A0A0A primary, #111111 secondary, #1A1A1A cards)
- **Accent**: Electric Blue (#3B82F6)
- **Accent Hover**: Lighter Blue (#60A5FA)
- **Text Primary**: White (#FFFFFF)
- **Text Secondary**: Gray (#9CA3AF)
- **Text Muted**: Dark Gray (#6B7280)
- **Border**: (#1F2937)

### Typography
- **Headings**: Inter (bold/extrabold)
- **Body**: Inter (regular/medium)
- Scale: Hero h1 (4xl-6xl), Section h2 (3xl-4xl), Card h3 (xl-2xl), Body (base-lg)

### Spacing & Layout
- Max content width: 1280px centered
- Section padding: py-20 (80px top/bottom)
- Card border-radius: rounded-2xl
- Consistent 16/24/32/48px spacing scale

## Sections (Top to Bottom)

### 1. Header (Sticky)
- Fixed top, dark bg with backdrop blur
- Left: "THE END INFOTECH" text logo
- Center/Right: Nav links - Portfolio, Services, Technologies, About, Testimonials, FAQ, Contact
- Far right: "Let's Talk" CTA button (electric blue, rounded)
- Mobile: Hamburger icon opens slide-in drawer with nav links
- Smooth scroll to sections on nav click

### 2. Hero Section
- Full viewport height (min-h-screen)
- Large bold headline: "Your Trusted Partner for Everything Digital & Beyond"
- Subtext: "From stylish design to robust software, digital marketing to IT infrastructure - we deliver end-to-end solutions across every industry."
- Stats row: "150+ Projects" | "50+ Clients" | "5.0 Rating" (animated counters on scroll)
- Two CTA buttons: "Discuss Your Project" (filled blue) + "View Portfolio" (outlined)
- Subtle animated gradient mesh or floating particles background

### 3. Portfolio Section
- Section heading: "Our Portfolio"
- Filter tabs: All, Web Development, Mobile Apps, Branding, Marketing, IT Solutions
- 3-column grid (2 on tablet, 1 on mobile) of project cards
- Each card: placeholder image, project name, category tags, hover overlay with "View Project" link
- 6-9 placeholder cards with sample content
- "View All Projects" button at bottom

### 4. Services Section
- Section heading: "Our Services"
- 3x3 grid of numbered service cards (like Redstone):
  1. **Website Development** - React, Angular, Vue.js, WordPress, Laravel, Node.js
  2. **Mobile App Development** - iOS, Android, React Native, Flutter
  3. **Branding & Design** - Logo, UI/UX, Landing Pages, Brand Identity
  4. **Digital Marketing & SEO** - Social Media, PPC, Content Marketing, Analytics
  5. **CRM & Business Systems** - Custom CRM, ERP, Automation, Industry-specific
  6. **Cloud & IT Infrastructure** - AWS, Azure, DevOps, Server Management
  7. **E-commerce Solutions** - Shopify, OpenCart, Custom Stores, Payment Integration
  8. **IT Consulting & Training** - Strategy, Audits, Team Training, Tech Assessment
  9. **Custom Software Solutions** - SaaS, APIs, Enterprise Software, Integrations
- Each card: number badge, icon, title, description, tech tags
- Hover: subtle scale + shadow + accent border

### 5. Technologies Section
- Section heading: "Technologies We Work With"
- Three tier groups displayed as rows:
  - **Basic**: HTML, CSS, WordPress, Shopify, Figma
  - **Intermediate**: Laravel, MySQL, Vue.js, PHP, React Native
  - **Enterprise**: React, Angular, Node.js, Python, AWS, Azure, Docker
- Each tech: logo/icon + name
- Grid layout with hover highlight effect

### 6. Testimonials Section
- Section heading: "What Our Clients Say"
- Horizontal scroll carousel or 2x2 grid
- 4 testimonial cards with:
  - Quote text (placeholder)
  - Client name, role, company (placeholder)
  - Star rating
- Navigation dots or arrows for carousel

### 7. FAQ Section
- Section heading: "Frequently Asked Questions"
- Accordion-style expandable items (click to toggle)
- 7-8 questions covering:
  - Pricing and estimates
  - Development timelines
  - Support and maintenance
  - Technologies used
  - Process and methodology
  - Custom vs. template solutions
  - Communication and updates

### 8. Contact / CTA Section
- "Ready to Start Your Project?" headline
- Brief text encouraging contact
- "Book a Call" + "Send a Message" buttons
- Could include a simple contact form (name, email, message)

### 9. Footer
- 4-column layout:
  - **Company**: About, Careers, Blog, Contact
  - **Services**: links to all 9 services
  - **Portfolio**: links by category
  - **Connect**: Social media icons (Instagram, Facebook, LinkedIn, Twitter)
- Contact info: placeholder email, phone, address
- Bottom bar: Copyright "2026 THE END INFOTECH. All rights reserved."

## Animations & Interactions

- **Scroll reveal**: Each section fades in + slides up on scroll (Framer Motion `whileInView`)
- **Counter animation**: Stats numbers count up when hero enters viewport
- **Card hovers**: Scale(1.02), elevated shadow, accent border glow
- **Nav**: Active section highlighted in nav as user scrolls
- **Smooth scroll**: Clicking nav links smoothly scrolls to section
- **Hero background**: Animated gradient mesh or subtle particle effect
- **FAQ accordion**: Smooth height animation on expand/collapse

## File Structure

```
the-end-infotech/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Tailwind imports + custom styles
├── components/
│   ├── Header.tsx          # Sticky nav + mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── Portfolio.tsx       # Portfolio grid + filters
│   ├── Services.tsx        # Services cards grid
│   ├── Technologies.tsx    # Tech tier display
│   ├── Testimonials.tsx    # Client testimonials
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── Contact.tsx         # CTA + contact section
│   ├── Footer.tsx          # Multi-column footer
│   └── ui/                 # Shared UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       └── AnimatedCounter.tsx
├── lib/
│   └── data.ts             # All content data (services, FAQ, etc.)
├── public/
│   └── images/             # Placeholder images
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Content Data Strategy

All text content (services list, FAQ items, testimonials, tech list) will live in `lib/data.ts` as typed arrays/objects. This makes it easy to update content without touching components.

## Responsive Breakpoints

- **Mobile**: < 640px (1 column, hamburger nav, stacked layout)
- **Tablet**: 640-1024px (2 columns, condensed spacing)
- **Desktop**: > 1024px (3 columns, full layout)

## Performance Considerations

- Static export for fast loading
- Lazy load images below the fold
- Minimal JS bundle (only Framer Motion for animations)
- Font optimization via `next/font`

## Future Deployment

- `next export` generates static files
- Deploy to GitHub Pages with custom domain
- Configure CNAME file for custom domain

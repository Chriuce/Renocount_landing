# Renocount Landing Page

A modern, mobile-friendly landing page for Renocount – a WhatsApp-based construction site management tool.

## Features

- 🎨 Modern, clean design inspired by apptoken.co
- 📱 Fully responsive and mobile-friendly
- ✨ Smooth animations with Framer Motion
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 Optimized for conversion with clear CTAs
- 📧 Contact form for lead generation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd renocount-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with main CTA
│   ├── HowItWorks.tsx       # 3-step process explanation
│   ├── Features.tsx         # Feature showcase
│   ├── Testimonial.tsx      # Customer testimonial
│   ├── FAQ.tsx              # Expandable FAQ section
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer with links
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `primary` color palette.

### Content
All content is easily editable in the respective component files. The main sections include:

- Hero headline and subheadline
- How it works steps
- Feature descriptions
- FAQ questions and answers
- Contact form fields

### Animations
Animations are powered by Framer Motion and can be adjusted in each component's motion properties.

## Deployment

This project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## License

This project is proprietary to Renocount.

## Support

For questions or support, contact hello@renocount.com 
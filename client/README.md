# Priyanshu Patel - Portfolio

A modern, elegant developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, subtle gradients, and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: System-aware theme switching with next-themes
- **Performance Optimized**: Built for Lighthouse scores ≥95
- **Accessibility**: Proper landmarks, semantic HTML, and keyboard navigation
- **SEO Ready**: OpenGraph, structured data, and meta tags

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Customization

### 1. Update Personal Information

Edit `src/lib/data.ts` to customize your portfolio:

```typescript
export const PROFILE = {
  name: "Your Name",
  tagline: "Your Title",
  location: "Your Location",
  yearsOfExperience: 0,
  availability: "Your Availability",
  email: "your.email@domain.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
    { label: "X (Twitter)", href: "https://x.com/yourhandle" },
    { label: "Instagram", href: "https://instagram.com/yourhandle" }
  ],
};
```

### 2. Update Projects

Modify the `PROJECTS` array in `src/lib/data.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    title: "Your Project Title",
    description: "Project description...",
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", href: "https://yourproject.com" },
      { label: "GitHub", href: "https://github.com/yourhandle/project" }
    ],
  },
  // Add more projects...
];
```

### 3. Update Experience

Modify the `EXPERIENCE` array in `src/lib/data.ts`:

```typescript
export const EXPERIENCE: Experience[] = [
  {
    role: "Your Role",
    company: "Company Name",
    start: "Start Date",
    end: "End Date or Present",
    bullets: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3"
    ],
    tech: ["Technology 1", "Technology 2"],
  },
  // Add more experience...
];
```

### 4. Update Skills

Modify the `SKILLS` array in `src/lib/data.ts`:

```typescript
export const SKILLS: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { title: "Frontend", items: ["Next.js", "React", "Tailwind"] },
  // Add more skill groups...
];
```

### 5. Customize Colors and Fonts

Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  brand: {
    50: '#your-color-50',
    100: '#your-color-100',
    // ... more shades
  },
}
```

### 6. Update Resume

Replace `/public/Priyanshu-Patel-Resume.pdf` with your actual resume PDF file.

## 🎨 Design Customization

### Glassmorphism Effects

The portfolio uses custom CSS utilities for glassmorphism effects. Modify `src/app/globals.css`:

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
}
```

### Gradient Text

Customize gradient text colors in `src/app/globals.css`:

```css
.gradient-text {
  background: linear-gradient(135deg, #06b6d4, #10b981, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update `metadata.alternates.canonical` in `layout.tsx`

### Deploy to Other Platforms

The portfolio is compatible with:
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS Amplify**: Connect your GitHub repo
- **Railway**: Deploy directly from GitHub

## 📱 Responsive Design

The portfolio is built mobile-first with breakpoints:
- **Mobile**: 360px+ (default)
- **Tablet**: 768px+ (md:)
- **Desktop**: 1024px+ (lg:)
- **Large Desktop**: 1280px+ (xl:)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- High contrast ratios
- Screen reader friendly

## 🔍 SEO Optimization

- Meta tags and descriptions
- OpenGraph images
- Structured data (Person schema)
- Sitemap generation
- Performance optimization

## 🧪 Testing

### Run Tests
```bash
npm run lint        # ESLint
npm run build       # Build check
```

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, and SEO
4. Target scores: ≥95 for all categories

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   ├── Hero.tsx             # Hero section
│   ├── TechMarquee.tsx      # Technology marquee
│   ├── Projects.tsx         # Projects showcase
│   ├── ExperienceTimeline.tsx # Work experience timeline
│   ├── Skills.tsx           # Skills grid
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links
└── lib/
    └── data.ts              # Portfolio content data
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the [Issues](https://github.com/yourusername/portfolio/issues) page
2. Create a new issue with detailed information
3. Include your environment details and error messages

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Made with ❤️ by Priyanshu Patel**

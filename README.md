# Charan Katkam - Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my skills as a Full Stack Developer with AI expertise.

## 🚀 Live Demo

[View Live Portfolio](https://charan-katkam-portfolio.vercel.app/)

## ✨ Features

### Mandatory Requirements (All Implemented)
- ✅ **Sticky Header with Navigation** - Smooth scrolling navigation with active section highlighting
- ✅ **Animated Hero Section** - Text reveal animations with floating background elements
- ✅ **Personal Information Section** - Profile details with quick facts
- ✅ **Interactive Image Gallery** - Hover effects, lightbox modal, and filtering
- ✅ **Projects Section** - All 4 projects from resume with detailed information
- ✅ **Responsive Design** - Mobile-first approach with perfect mobile experience

### Additional Features
- 🌙 **Dark/Light Mode Toggle** - Persistent theme switching
- 🎨 **Smooth Animations** - Framer Motion powered interactions
- 📱 **Mobile Optimized** - Touch-friendly interactions and responsive design
- 📄 **Resume Download** - Direct PDF download functionality
- 📧 **Contact Form** - Functional contact form with validation
- ⚡ **Performance Optimized** - Next.js Image optimization and lazy loading

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Deployment:** Vercel

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── Charan_Resume_Dev.pdf
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/charankatkam/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

## 🎯 Key Sections

### 1. Hero Section
- Animated text reveals
- Floating background elements
- Call-to-action buttons

### 2. About Section
- Personal introduction
- Profile avatar with animations
- Quick facts (Location, Background, Languages)

### 3. Skills Section
- Categorized skill display
- Frontend, AI/ML, and Backend technologies
- Interactive hover effects

### 4. Interactive Gallery
- Project previews with hover effects
- Lightbox modal for detailed view
- Category filtering (All, UI Design, Web Dev, AI/ML)
- Smooth animations and transitions

### 5. Projects Section
- **SmartSDLC** - AI-powered project management
- **AJ Abhi Jewels** - E-commerce platform
- **Air Cursor Using Hand Gestures** - Computer vision app
- **Music Streaming Website** - Audio streaming platform

### 6. Contact Section
- Contact information with social links
- Functional contact form
- Resume download button

## 🎨 Design Features

- **Responsive Design:** Mobile-first approach
- **Dark/Light Mode:** Persistent theme switching
- **Smooth Animations:** Framer Motion powered
- **Modern UI:** Clean, professional design
- **Interactive Elements:** Hover effects and micro-interactions

## Design Rationale

This portfolio follows an Industrial Studio design approach, chosen to reflect clarity, structure, and engineering intent. The interface uses a restrained dark graphite palette with a single cobalt accent to emphasize hierarchy without distraction. Typography is built around the IBM Plex family, combining condensed headlines for authority, a neutral body font for readability, and mono accents for technical context. Spacing and layout prioritize calm vertical rhythm and clear separation between sections, allowing content to breathe and remain scannable. Motion and interaction are used sparingly and purposefully to support navigation and focus rather than visual noise. The overall goal was to create a portfolio that feels deliberate, systems-oriented, and authored, aligning with frontend and UI engineering principles rather than decorative trends.

## 📱 Mobile Experience

- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Swipe gestures for gallery
- Mobile-specific interactions

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Content
Update personal information in respective component files:
- `HeroSection.tsx` - Name and tagline
- `AboutSection.tsx` - Personal description
- `ProjectsSection.tsx` - Project details
- `ContactSection.tsx` - Contact information

## 📊 Performance

- Lighthouse Score: 90+
- Optimized images with next/image
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Charan Katkam**
- Email: charankatkam@gmail.com
- LinkedIn: [linkedin.com/in/charan-katkam](https://linkedin.com/in/charan-katkam)
- GitHub: [github.com/charankatkam](https://github.com/charankatkam)

---

Built with ❤️ by Charan Katkam

_Built with Next.js, Tailwind CSS, and Framer Motion. Deployed on Vercel._
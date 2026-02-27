import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import MediaShowcaseSection from './components/MediaShowcaseSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import InsightsSection from './components/InsightsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <MediaShowcaseSection />
      <ExperienceSection />
      <ProjectsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

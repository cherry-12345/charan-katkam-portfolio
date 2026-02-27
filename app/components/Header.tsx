'use client'

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

type NavItem = {
  id: string
  label: string
  href?: string
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const navItems = useMemo<NavItem[]>(
    () => [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'insights', label: 'Insights' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['hero', ...navItems.filter((item) => !item.href).map((item) => item.id)]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 140 && rect.bottom >= 140
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (item: NavItem) => {
    if (item.href) {
      setIsMobileMenuOpen(false)
      router.push(item.href)
      return
    }
    scrollToSection(item.id)
  }

  const darkMode = mounted && theme === 'dark'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden ${
        isScrolled
          ? 'bg-[color:var(--color-header)] shadow-xl border-b-2 border-[color:var(--color-border)] backdrop-blur-md'
          : 'bg-[color:var(--color-header)] border-b-2 border-[color:var(--color-border)]'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold text-[color:var(--color-text)] font-heading tracking-[-0.01em]"
          >
            Charan Katkam
          </motion.button>

          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-[0.76rem] font-medium uppercase tracking-[0.26em] transition-all duration-300 relative ${
                  !item.href && activeSection === item.id
                    ? 'text-[color:var(--color-accent)]'
                    : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)]'
                }`}
              >
                {item.label}
                {!item.href && activeSection === item.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[color:var(--color-accent)]"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(darkMode ? 'light' : 'dark')}
              className="relative h-10 w-16 rounded-full border border-[color:var(--color-border)] studio-surface"
              aria-label="Toggle theme"
              suppressHydrationWarning
            >
              <motion.span
                animate={{ x: darkMode ? 30 : 4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className={`absolute top-1 h-8 w-8 rounded-full flex items-center justify-center ${
                  darkMode
                    ? 'bg-orange-500 text-gray-900'
                    : 'bg-gray-800 text-white'
                }`}
              >
                {darkMode ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9.37 5.51A7 7 0 0 0 18.49 14.63 7 7 0 1 1 9.37 5.51Z" />
                  </svg>
                )}
              </motion.span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-2xl studio-surface"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 bg-[color:var(--color-text)] transition-transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[color:var(--color-text)] transition-opacity ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[color:var(--color-text)] transition-transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden studio-surface border-t border-[color:var(--color-border)]"
          >
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-2 text-[0.76rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                    !item.href && activeSection === item.id
                      ? 'text-[color:var(--color-accent)] bg-[color:var(--color-bg)]'
                      : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

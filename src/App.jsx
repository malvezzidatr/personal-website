import { useState, useRef, useEffect } from 'react'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import ContactForm from './components/ContactForm/ContactForm'
import './projects.css'

const skills = [
  'TypeScript', 'JavaScript', 'Java',
  'React', 'React Native', 'Next.js',
  'NestJS', 'Spring Boot', 'Node.js',
  'Micro Frontends', 'Micro Serviços', 'Redux',
  'Zustand', 'React Query', 'Jest',
  'Cypress', 'JUnit', 'AWS',
  'Docker', 'Git'
]

function AppContent() {
  const { lang, t, toggleLang } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)
  const [showContactForm, setShowContactForm] = useState(false)

  const navbarRef = useRef(null)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectCardsRef = useRef([])
  const projectDetailRef = useRef(null)
  const ctaRef = useRef(null)
  const footerRef = useRef(null)

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const timeline = t.about.experience.map((exp) => ({
    year: exp.period,
    title: exp.role,
    description: `${exp.company} · ${exp.type}`,
  }))

  const footerLinks = [
    { label: 'GitHub', href: 'https://github.com/malvezzidatr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/caiomalvezzi/' },
  ]

  const footerInfo = [
    { label: t.footer.location, value: t.footer.locationValue.replace('\n', ' ') },
    { label: t.footer.education, value: t.footer.educationValue.replace('\n', ' ') },
  ]

  const projectData = selectedProject
    ? {
        number: String(selectedProject.id).padStart(2, '0'),
        role: selectedProject.role,
        title: selectedProject.title,
        description: selectedProject.details,
        techTags: selectedProject.tech,
        highlights: selectedProject.highlights,
      }
    : null

  // Navbar setup
  useEffect(() => {
    const el = navbarRef.current
    if (!el) return

    el.links = navLinks
    el.logo = 'CM'
    el.lang = lang
    el.langLabel = lang === 'pt' ? 'EN' : 'PT'

    const handleLangToggle = () => toggleLang()
    const handleNavClick = (e) => {
      const href = e.detail.link.href
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    el.addEventListener('lang-toggle', handleLangToggle)
    el.addEventListener('nav-click', handleNavClick)

    return () => {
      el.removeEventListener('lang-toggle', handleLangToggle)
      el.removeEventListener('nav-click', handleNavClick)
    }
  }, [lang, t, toggleLang])

  // Hero setup
  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    el.tag = '[01]'
    el.label = t.hero.tag
    el.year = '2025'
    el.name = 'CAIO MALVEZZI'
    el.ctaText = t.hero.cta
    el.ctaHref = '#projects'

    const handleCtaClick = (e) => {
      const target = document.querySelector(e.detail.href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    el.addEventListener('cta-click', handleCtaClick)
    return () => el.removeEventListener('cta-click', handleCtaClick)
  }, [t])

  // About setup
  useEffect(() => {
    const el = aboutRef.current
    if (!el) return

    el.tag = '[02]'
    el.title = t.about.tag
    el.bio = `${t.about.bio1}\n\n${t.about.bio2}`
    el.skills = skills
    el.timeline = timeline
  }, [t, timeline])

  // Project cards setup
  useEffect(() => {
    projectCardsRef.current.forEach((el, index) => {
      if (!el) return
      const project = t.projects.items[index]
      if (!project) return

      el.number = String(project.id).padStart(2, '0')
      el.role = project.role
      el.title = project.title
      el.description = project.description
      el.techTags = project.tech

      const handleCardClick = (e) => {
        const { number } = e.detail
        const proj = t.projects.items.find(
          (p) => String(p.id).padStart(2, '0') === number
        )
        if (proj) setSelectedProject(proj)
      }

      el.addEventListener('card-click', handleCardClick)
    })
  }, [t])

  // Project detail setup
  useEffect(() => {
    const el = projectDetailRef.current
    if (!el) return

    el.open = !!selectedProject
    el.project = projectData

    const handleClose = () => setSelectedProject(null)
    el.addEventListener('close', handleClose)
    return () => el.removeEventListener('close', handleClose)
  }, [selectedProject, projectData])

  // CTA setup
  useEffect(() => {
    const el = ctaRef.current
    if (!el) return

    el.tag = '[04]'
    el.label = t.cta.tag
    el.heading = t.cta.heading
    el.description = t.cta.text
    el.buttonText = t.cta.button

    const handleCtaClick = () => setShowContactForm(true)
    el.addEventListener('cta-click', handleCtaClick)
    return () => el.removeEventListener('cta-click', handleCtaClick)
  }, [t])

  // Footer setup
  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    el.heading = t.footer.heading
    el.links = footerLinks
    el.info = footerInfo
    el.decorativeName = 'CAIO MALVEZZI'
    el.copyright = `© ${new Date().getFullYear()} Caio Malvezzi. ${t.footer.copyright}`
  }, [t, footerLinks, footerInfo])

  const titleParts = t.projects.title.split('\n')

  return (
    <>
      <zev-navbar ref={navbarRef}></zev-navbar>
      <main>
        <zev-hero ref={heroRef}></zev-hero>
        <zev-about ref={aboutRef} id="about"></zev-about>
        <section className="projects" id="projects">
          <div className="projects__container">
            <div className="projects__header">
              <span className="projects__tag">[03]</span>
              <span className="projects__label">{t.projects.tag}</span>
            </div>
            <h2 className="projects__title">
              {titleParts[0]}<br />{titleParts[1]}
            </h2>
            <div className="projects__grid">
              {t.projects.items.map((project, index) => (
                <zev-project-card
                  key={project.id}
                  ref={(el) => (projectCardsRef.current[index] = el)}
                ></zev-project-card>
              ))}
            </div>
          </div>
        </section>
        <zev-project-detail ref={projectDetailRef}></zev-project-detail>
        <zev-call-to-action ref={ctaRef}></zev-call-to-action>
      </main>
      <zev-footer ref={footerRef} id="contact"></zev-footer>
      <zev-theme-toggle class="theme-toggle-fixed"></zev-theme-toggle>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App

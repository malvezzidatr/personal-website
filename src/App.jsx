import { useState } from 'react'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import {
  ZevNavbar,
  ZevHero,
  ZevAbout,
  ZevProjectCard,
  ZevProjectDetail,
  ZevCallToAction,
  ZevFooter,
  ZevThemeToggle,
} from '@zev/react'
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

  const handleProjectClick = (e) => {
    const { number } = e.detail
    const project = t.projects.items.find(
      (p) => String(p.id).padStart(2, '0') === number
    )
    if (project) setSelectedProject(project)
  }

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

  const titleParts = t.projects.title.split('\n')

  return (
    <>
      <ZevNavbar
        logo="CM"
        links={navLinks}
        lang={lang}
        langLabel={lang === 'pt' ? 'EN' : 'PT'}
        onLangToggle={toggleLang}
        onNavClick={(e) => {
          const href = e.detail.link.href
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />
      <main>
        <ZevHero
          tag="[01]"
          label={t.hero.tag}
          year="2025"
          name="CAIO MALVEZZI"
          ctaText={t.hero.cta}
          ctaHref="#projects"
          onCtaClick={(e) => {
            const el = document.querySelector(e.detail.href)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
        <ZevAbout
          id="about"
          tag="[02]"
          title={t.about.tag}
          bio={`${t.about.bio1}\n\n${t.about.bio2}`}
          skills={skills}
          timeline={timeline}
        />
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
              {t.projects.items.map((project) => (
                <ZevProjectCard
                  key={project.id}
                  number={String(project.id).padStart(2, '0')}
                  role={project.role}
                  title={project.title}
                  description={project.description}
                  techTags={project.tech}
                  onCardClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </section>
        <ZevProjectDetail
          open={!!selectedProject}
          project={projectData}
          onClose={() => setSelectedProject(null)}
        />
        <ZevCallToAction
          tag="[04]"
          label={t.cta.tag}
          heading={t.cta.heading}
          description={t.cta.text}
          buttonText={t.cta.button}
          onCtaClick={() => setShowContactForm(true)}
        />
      </main>
      <ZevFooter
        id="contact"
        heading={t.footer.heading}
        links={footerLinks}
        info={footerInfo}
        decorativeName="CAIO MALVEZZI"
        copyright={`© ${new Date().getFullYear()} Caio Malvezzi. ${t.footer.copyright}`}
      />
      <ZevThemeToggle className="theme-toggle-fixed" />
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

import { useEffect, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import './ContactForm.css'

function ContactForm({ onClose }) {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://portfolio-backend-gwfl.onrender.com/mail/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__overlay" onClick={handleOverlayClick}>
        <div className="contact-form contact-form--feedback">
          <button className="contact-form__close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="contact-form__feedback">
            <span className="contact-form__feedback-icon">&#10003;</span>
            <h3>{t.contactForm.successTitle}</h3>
            <p>{t.contactForm.successText}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form__overlay" onClick={handleOverlayClick}>
      <div className="contact-form">
        <button className="contact-form__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="contact-form__header">
          <span className="contact-form__tag">{t.contactForm.tag}</span>
          <h2 className="contact-form__title">{t.contactForm.title}</h2>
          <p className="contact-form__subtitle">{t.contactForm.subtitle}</p>
        </div>

        {status === 'error' && (
          <p className="contact-form__error">{t.contactForm.errorText}</p>
        )}

        <form className="contact-form__body" onSubmit={handleSubmit}>
          <div className="contact-form__field">
            <label htmlFor="contact-name">{t.contactForm.nameLabel}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t.contactForm.namePlaceholder}
              required
              disabled={status === 'loading'}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-email">{t.contactForm.emailLabel}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.contactForm.emailPlaceholder}
              required
              disabled={status === 'loading'}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-message">{t.contactForm.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.contactForm.messagePlaceholder}
              rows="5"
              required
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            className="contact-form__submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? t.contactForm.sending : t.contactForm.send} <span>&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

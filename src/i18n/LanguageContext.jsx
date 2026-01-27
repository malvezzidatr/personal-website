import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt')

  const t = translations[lang]

  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

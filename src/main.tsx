import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import i18n (loads translations and language detector)
import './i18n/i18n'
import i18n from 'i18next'

// Keep <html lang> and <html dir> synchronized
i18n.on('languageChanged', (lng) => {
  // Update the <html lang="..."> attribute
  document.documentElement.lang = lng

  // Automatically handle text direction
  const rtlLanguages = ['ar', 'ps', 'ur', 'fa'] // Right-to-left languages
  document.documentElement.dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr'
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

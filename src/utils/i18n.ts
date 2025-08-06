import { translations, type Language } from '@data/translations';

// Get the current language from localStorage or default to 'en'
export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language') as Language;
    return stored && (stored === 'en' || stored === 'es') ? stored : 'en';
  }
  return 'en';
}

// Set the current language and save to localStorage
export function setCurrentLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    // Trigger a custom event to notify components of language change
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  }
}

// Get translation for a key
export function t(key: string, lang?: Language): any {
  const currentLang = lang || getCurrentLanguage();
  const keys = key.split('.');
  let value: any = translations[currentLang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

// Toggle between languages
export function toggleLanguage(): Language {
  const current = getCurrentLanguage();
  const newLang = current === 'en' ? 'es' : 'en';
  setCurrentLanguage(newLang);
  return newLang;
}
// Language persistence script
// This script ensures the language preference is maintained across page loads

(function() {
  // Check if we're in the browser
  if (typeof window === 'undefined') return;
  
  // Get the stored language or default to 'en'
  const getStoredLanguage = () => {
    try {
      return localStorage.getItem('language') || 'en';
    } catch (e) {
      return 'en';
    }
  };
  
  // Set the language attribute on the html element
  const setHtmlLang = (lang) => {
    document.documentElement.lang = lang;
  };
  
  // Initialize language on page load
  const initLanguage = () => {
    const lang = getStoredLanguage();
    setHtmlLang(lang);
  };
  
  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
  
  // Listen for language changes
  window.addEventListener('languageChange', (event) => {
    setHtmlLang(event.detail);
  });
})();
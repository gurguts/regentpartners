class I18n {
  constructor() {
    this.currentLang = 'pl';
    this.translations = {};
    this.loaded = false;
  }

  detectLanguage() {
    if (window.router) {
      return window.router.getCurrentLang();
    }

    const path = window.location.pathname;
    if (path.includes('/en/') || path === '/en' || path.startsWith('/en')) {
      return 'en';
    }
    if (path.includes('/pl/') || path === '/pl' || path.startsWith('/pl')) {
      return 'pl';
    }

    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en' || savedLang === 'pl') {
      return savedLang;
    }

    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
      return 'en';
    }

    return 'pl';
  }

  async loadTranslations(lang) {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${lang}: ${response.status} ${response.statusText}`);
      }
      
      this.translations = await response.json();
      this.currentLang = lang;
      this.loaded = true;
      
      localStorage.setItem('preferredLanguage', lang);
      
      console.log(`Translations loaded successfully for language: ${lang}`);
      
      return this.translations;
    } catch (error) {
      console.error('Error loading translations:', error);
      if (lang !== 'en') {
        console.log('Trying to load English translations as fallback...');
        return this.loadTranslations('en');
      }
      throw error;
    }
  }

  async init() {
    const lang = this.detectLanguage();
    await this.loadTranslations(lang);
    return this;
  }

  t(key, params = {}) {
    if (!this.loaded) {
      console.warn('Translations not loaded yet');
      return key;
    }

    const keys = key.split('.');
    let value = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }

    if (typeof value === 'string') {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] !== undefined ? params[paramKey] : match;
      });
    }

    return key;
  }

  async changeLanguage(lang) {
    if (lang !== 'en' && lang !== 'pl') {
      console.error('Invalid language. Use "en" or "pl"');
      return;
    }

    await this.loadTranslations(lang);
    
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  getCurrentLang() {
    return this.currentLang;
  }
}

const i18n = new I18n();

export default i18n;

if (typeof window !== 'undefined') {
  window.i18n = i18n;
}

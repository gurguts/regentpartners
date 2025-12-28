import './router.js';
import i18nModule from './i18n.js';
import './components/Layout.js';
import './components/Header.js';
import './components/Navigation.js';
import './components/Footer.js';
import './sections/HomePage.js';
import './sections/AboutPage.js';
import './sections/ServicesPage.js';
import './sections/CallCenterPage.js';
import './sections/AdvertisingPage.js';
import './sections/RecruitmentPage.js';
import './sections/PricingPage.js';
import './sections/ContactPage.js';
import './sections/PrivacyPage.js';
import './smoothScroll.js';
import './metaTags.js';

let i18n = i18nModule;

if (typeof window !== 'undefined' && window.i18n) {
  i18n = window.i18n;
}

function detectLanguageFromUrl() {
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

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const lang = detectLanguageFromUrl();
    
    const i18nInstance = i18n || window.i18n;
    
    if (!i18nInstance) {
      throw new Error('i18n is not initialized. Check if i18n.js is loaded correctly.');
    }
    
    await i18nInstance.loadTranslations(lang);
    
    if (window.Layout) {
      const layout = new window.Layout();
      layout.init();
    }
    
    setTimeout(() => {
      initPageContent();
      updatePageContent();
      
      if (window.metaTagsManager) {
        window.metaTagsManager.updateMetaTags();
      }
    }, 100);
    
    setupLanguageSwitcher();
    setupLinkNavigation();
    
  } catch (error) {
  }
});

function initPageContent() {
  if (!window.router) return;
  
  const currentPage = window.router.getCurrentPage();
  
  if (currentPage === 'home' && window.HomePage) {
    const homePage = new window.HomePage();
    homePage.init();
  } else if (currentPage === 'about' && window.AboutPage) {
    const aboutPage = new window.AboutPage();
    aboutPage.init();
  } else if (currentPage === 'services' && window.ServicesPage) {
    const servicesPage = new window.ServicesPage();
    servicesPage.init();
  } else if (currentPage === 'call-center' && window.CallCenterPage) {
    const callCenterPage = new window.CallCenterPage();
    callCenterPage.init();
  } else if (currentPage === 'advertising' && window.AdvertisingPage) {
    const advertisingPage = new window.AdvertisingPage();
    advertisingPage.init();
  } else if (currentPage === 'recruitment' && window.RecruitmentPage) {
    const recruitmentPage = new window.RecruitmentPage();
    recruitmentPage.init();
  } else if (currentPage === 'pricing' && window.PricingPage) {
    const pricingPage = new window.PricingPage();
    pricingPage.init();
  } else if (currentPage === 'contact' && window.ContactPage) {
    const contactPage = new window.ContactPage();
    contactPage.init();
  } else if (currentPage === 'privacy' && window.PrivacyPage) {
    const privacyPage = new window.PrivacyPage();
    privacyPage.init();
  }
}

function updatePageContent() {
  const i18nInstance = i18n || window.i18n;
  if (!i18nInstance) return;
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = i18nInstance.t(key);
    }
  });
  
  const header = document.querySelector('.site-header');
  if (header && header._headerInstance) {
    header._headerInstance.updateTranslations();
  }
  
  const footer = document.querySelector('.site-footer');
  if (footer && footer._footerInstance) {
    footer._footerInstance.updateTranslations();
  }
  
  const navs = document.querySelectorAll('.main-navigation');
  navs.forEach(nav => {
    if (nav._navigationInstance) {
      nav._navigationInstance.updateTranslations();
    }
  });
  
  if (window.HomePage && window.router && window.router.getCurrentPage() === 'home') {
    const container = document.getElementById('main-content');
    if (container) {
      const homePage = new window.HomePage();
      homePage.container = container;
      if (homePage.updateTranslations) {
        homePage.updateTranslations();
      }
    }
  }
  
  if (window.AboutPage && window.router && window.router.getCurrentPage() === 'about') {
    const container = document.getElementById('main-content');
    if (container) {
      const aboutPage = new window.AboutPage();
      aboutPage.container = container;
      if (aboutPage.updateTranslations) {
        aboutPage.updateTranslations();
      }
    }
  }
  
  if (window.ServicesPage && window.router && window.router.getCurrentPage() === 'services') {
    const container = document.getElementById('main-content');
    if (container) {
      const servicesPage = new window.ServicesPage();
      servicesPage.container = container;
      if (servicesPage.updateTranslations) {
        servicesPage.updateTranslations();
      }
    }
  }
  
  if (window.CallCenterPage && window.router && window.router.getCurrentPage() === 'call-center') {
    const container = document.getElementById('main-content');
    if (container) {
      const callCenterPage = new window.CallCenterPage();
      callCenterPage.container = container;
      if (callCenterPage.updateTranslations) {
        callCenterPage.updateTranslations();
      }
    }
  }
  
  if (window.AdvertisingPage && window.router && window.router.getCurrentPage() === 'advertising') {
    const container = document.getElementById('main-content');
    if (container) {
      const advertisingPage = new window.AdvertisingPage();
      advertisingPage.container = container;
      if (advertisingPage.updateTranslations) {
        advertisingPage.updateTranslations();
      }
      if (advertisingPage.setupAccordion) {
        advertisingPage.setupAccordion();
      }
    }
  }
  
  if (window.RecruitmentPage && window.router && window.router.getCurrentPage() === 'recruitment') {
    const container = document.getElementById('main-content');
    if (container) {
      const recruitmentPage = new window.RecruitmentPage();
      recruitmentPage.container = container;
      if (recruitmentPage.updateTranslations) {
        recruitmentPage.updateTranslations();
      }
    }
  }
  
  if (window.PricingPage && window.router && window.router.getCurrentPage() === 'pricing') {
    const container = document.getElementById('main-content');
    if (container) {
      const pricingPage = new window.PricingPage();
      pricingPage.container = container;
      if (pricingPage.updateTranslations) {
        pricingPage.updateTranslations();
      }
    }
  }
  
  if (window.ContactPage && window.router && window.router.getCurrentPage() === 'contact') {
    const container = document.getElementById('main-content');
    if (container) {
      const contactPage = new window.ContactPage();
      contactPage.container = container;
      if (contactPage.updateTranslations) {
        contactPage.updateTranslations();
      }
    }
  }
  
  if (window.PrivacyPage && window.router && window.router.getCurrentPage() === 'privacy') {
    const container = document.getElementById('main-content');
    if (container) {
      const privacyPage = new window.PrivacyPage();
      privacyPage.container = container;
      if (privacyPage.updateTranslations) {
        privacyPage.updateTranslations();
      }
    }
  }
}

function setupLinkNavigation() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || !link.href) return;
    
    const href = link.getAttribute('href');
    
    if (
      link.target === '_blank' ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      href === '' ||
      href === '#'
    ) {
      return;
    }
    
    try {
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) {
        return;
      }
      
      const path = url.pathname;
      const cleanPath = path.split('#')[0];
      
      e.preventDefault();
      window.history.pushState({ path: cleanPath }, '', cleanPath);
      
      if (window.router && window.router.parseUrl) {
        window.router.parseUrl();
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const i18nInstance = i18n || window.i18n;
      if (i18nInstance && window.router) {
        const lang = window.router.getCurrentLang();
        if (lang && lang !== i18nInstance.getCurrentLang()) {
          i18nInstance.changeLanguage(lang).then(() => {
            updatePageContent();
            initPageContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            if (window.metaTagsManager) {
              window.metaTagsManager.updateMetaTags();
            }
          });
        } else {
          updatePageContent();
          initPageContent();
          
          if (window.metaTagsManager) {
            window.metaTagsManager.updateMetaTags();
          }
        }
      } else {
        updatePageContent();
        initPageContent();
        
        if (window.metaTagsManager) {
          window.metaTagsManager.updateMetaTags();
        }
      }
    } catch (error) {
    }
  });
}

function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll('[data-lang-switch]');
  
  langButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const targetLang = button.getAttribute('data-lang-switch');
      
      if (targetLang === 'en' || targetLang === 'pl') {
        const i18nInstance = i18n || window.i18n;
        await i18nInstance.changeLanguage(targetLang);
        
        updateUrlForLanguage(targetLang);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => {
          updatePageContent();
          initPageContent();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          
          if (window.metaTagsManager) {
            window.metaTagsManager.updateMetaTags();
          }
        }, 50);
      }
    });
  });
}

function updateUrlForLanguage(lang) {
  if (!window.history || !window.history.pushState) {
    return;
  }
  
  let newUrl;
  
  if (window.router && typeof window.router.getCurrentPage === 'function') {
    const currentPage = window.router.getCurrentPage();
    newUrl = window.router.getUrlForPage(currentPage, lang);
  } else {
    const currentPath = window.location.pathname.replace(/^\/(en|pl)(\/|$)/, '') || '';
    const cleanPath = currentPath ? (currentPath.startsWith('/') ? currentPath : '/' + currentPath) : '/';
    newUrl = `/${lang}${cleanPath}`;
  }
  
  const currentSearch = window.location.search;
  const currentHash = window.location.hash;
  const fullUrl = newUrl + currentSearch + currentHash;
  
  window.history.pushState({ lang: lang }, '', fullUrl);
  
  if (window.router && window.router.parseUrl) {
    window.router.parseUrl();
  }
}

window.addEventListener('languageChanged', (event) => {
  updatePageContent();
});

window.addEventListener('popstate', (event) => {
  if (window.router && window.router.parseUrl) {
    window.router.parseUrl();
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const i18nInstance = i18n || window.i18n;
  if (i18nInstance && window.router) {
    const lang = window.router.getCurrentLang();
    if (lang && lang !== i18nInstance.getCurrentLang()) {
      i18nInstance.changeLanguage(lang).then(() => {
        updatePageContent();
        initPageContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        if (window.metaTagsManager) {
          window.metaTagsManager.updateMetaTags();
        }
      });
    } else {
      updatePageContent();
      initPageContent();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (window.metaTagsManager) {
        window.metaTagsManager.updateMetaTags();
      }
    }
  }
});

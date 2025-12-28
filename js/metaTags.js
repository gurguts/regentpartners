class MetaTagsManager {
  constructor() {
    this.baseUrl = 'https://www.regentpartners.pl';
  }

  init() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    if (!window.router || !window.i18n) return;

    const currentPage = window.router.getCurrentPage();
    const currentLang = window.router.getCurrentLang();
    
    const pageKey = this.getPageKey(currentPage);
    const metaData = this.getMetaData(pageKey, currentLang);
    
    this.updateTitle(metaData.title);
    this.updateMetaDescription(metaData.description);
    this.updateOGTags(metaData, currentLang);
    this.updateCanonical(currentLang);
    this.updateHreflang(currentPage);
    this.updateHtmlLang(currentLang);
  }

  getPageKey(page) {
    const pageMap = {
      'home': 'home',
      'about': 'about',
      'services': 'services',
      'call-center': 'callCenter',
      'advertising': 'advertising',
      'recruitment': 'recruitment',
      'pricing': 'pricing',
      'contact': 'contact',
      'privacy': 'privacy'
    };
    return pageMap[page] || 'home';
  }

  getMetaData(pageKey, lang) {
    const translations = window.i18n.translations;
    const defaultMeta = translations.meta || {};
    
    let title = defaultMeta.defaultTitle || 'Regent Partners';
    let description = defaultMeta.defaultDescription || '';
    let ogImage = defaultMeta.defaultImage || '/img/logo.webp';
    
    if (translations.pages && translations.pages[pageKey]) {
      const pageData = translations.pages[pageKey];
      title = pageData.metaTitle || pageData.title || title;
      description = pageData.metaDescription || description;
      ogImage = pageData.ogImage || ogImage;
    }
    
    return {
      title,
      description,
      ogImage,
      pageKey
    };
  }

  updateTitle(title) {
    document.title = title;
    
    let titleTag = document.querySelector('title');
    if (!titleTag) {
      titleTag = document.createElement('title');
      document.head.appendChild(titleTag);
    }
    titleTag.textContent = title;
  }

  updateMetaDescription(description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }

  updateOGTags(metaData, lang) {
    const currentUrl = this.getCurrentUrl(lang);
    const ogImage = this.baseUrl + metaData.ogImage;
    
    this.setOrCreateMeta('property', 'og:title', metaData.title);
    this.setOrCreateMeta('property', 'og:description', metaData.description);
    this.setOrCreateMeta('property', 'og:image', ogImage);
    this.setOrCreateMeta('property', 'og:url', currentUrl);
    this.setOrCreateMeta('property', 'og:type', 'website');
    this.setOrCreateMeta('property', 'og:site_name', 'Regent Partners');
    
    const locale = lang === 'pl' ? 'pl_PL' : 'en_US';
    this.setOrCreateMeta('property', 'og:locale', locale);
    this.setOrCreateMeta('property', 'og:image:alt', metaData.title);
  }

  updateCanonical(lang) {
    const canonicalUrl = this.getCurrentUrl(lang);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }

  updateHreflang(currentPage) {
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(tag => tag.remove());
    
    const enUrl = this.getPageUrl(currentPage, 'en');
    const plUrl = this.getPageUrl(currentPage, 'pl');
    
    const enHreflang = document.createElement('link');
    enHreflang.setAttribute('rel', 'alternate');
    enHreflang.setAttribute('hreflang', 'en');
    enHreflang.setAttribute('href', this.baseUrl + enUrl);
    document.head.appendChild(enHreflang);
    
    const plHreflang = document.createElement('link');
    plHreflang.setAttribute('rel', 'alternate');
    plHreflang.setAttribute('hreflang', 'pl');
    plHreflang.setAttribute('href', this.baseUrl + plUrl);
    document.head.appendChild(plHreflang);
    
    const defaultHreflang = document.createElement('link');
    defaultHreflang.setAttribute('rel', 'alternate');
    defaultHreflang.setAttribute('hreflang', 'x-default');
    defaultHreflang.setAttribute('href', this.baseUrl + plUrl);
    document.head.appendChild(defaultHreflang);
  }

  updateHtmlLang(lang) {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
  }

  getCurrentUrl(lang) {
    if (!window.router) return '/';
    
    const currentPage = window.router.getCurrentPage();
    return this.getPageUrl(currentPage, lang);
  }

  getPageUrl(page, lang) {
    if (!window.router) return `/${lang}/`;
    
    const pageUrls = {
      en: {
        'home': '/en/',
        'about': '/en/about-us',
        'services': '/en/services',
        'call-center': '/en/services/call-center',
        'advertising': '/en/services/advertising-campaigns',
        'recruitment': '/en/services/international-recruitment',
        'pricing': '/en/pricing',
        'contact': '/en/contact',
        'privacy': '/en/privacy'
      },
      pl: {
        'home': '/pl/',
        'about': '/pl/o-nas',
        'services': '/pl/uslugi',
        'call-center': '/pl/uslugi/call-center',
        'advertising': '/pl/uslugi/reklama-i-kampanie',
        'recruitment': '/pl/uslugi/rekrutacja-miedzynarodowa',
        'pricing': '/pl/cennik',
        'contact': '/pl/kontakt',
        'privacy': '/pl/polityka-prywatnosci'
      }
    };
    
    return pageUrls[lang] && pageUrls[lang][page] ? pageUrls[lang][page] : `/${lang}/`;
  }

  setOrCreateMeta(attribute, name, content) {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }
}

if (typeof window !== 'undefined') {
  const metaTagsManager = new MetaTagsManager();
  window.metaTagsManager = metaTagsManager;
  
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      metaTagsManager.init();
    }, 100);
  });
  
  window.addEventListener('popstate', () => {
    setTimeout(() => {
      metaTagsManager.updateMetaTags();
    }, 100);
  });
}

export default MetaTagsManager;


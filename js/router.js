class Router {
  constructor() {
    this.currentPage = '';
    this.currentLang = 'pl';
    this.parseUrl();
  }

  parseUrl() {
    const path = window.location.pathname;
    
    const cleanPath = path.replace(/^\/|\/$/g, '');
    
    const parts = cleanPath.split('/').filter(part => part);
    
    if (parts.length === 0 || parts[0] === '') {
      this.currentPage = 'home';
      this.currentLang = this.detectLanguage();
    } else if (parts[0] === 'en' || parts[0] === 'pl') {
      this.currentLang = parts[0];
      if (parts.length > 2) {
        this.currentPage = parts.slice(1).join('/');
      } else {
        this.currentPage = parts[1] || 'home';
      }
    } else {
      this.currentLang = this.detectLanguage();
      if (parts.length > 1) {
        this.currentPage = parts.join('/');
      } else {
        this.currentPage = parts[0] || 'home';
      }
    }
    
    this.normalizePageName();
  }

  detectLanguage() {
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

  normalizePageName() {
    const pageMap = {
      '': 'home',
      'index': 'home',
      'start': 'home',
      'about': 'about',
      'o-nas': 'about',
      'about-us': 'about',
      'services': 'services',
      'uslugi': 'services',
      'call-center': 'call-center',
      'services/call-center': 'call-center',
      'uslugi/call-center': 'call-center',
      'advertising-campaigns': 'advertising',
      'reklama-i-kampanie': 'advertising',
      'services/advertising-campaigns': 'advertising',
      'uslugi/reklama-i-kampanie': 'advertising',
      'international-recruitment': 'recruitment',
      'rekrutacja-miedzynarodowa': 'recruitment',
      'services/international-recruitment': 'recruitment',
      'uslugi/rekrutacja-miedzynarodowa': 'recruitment',
      'pricing': 'pricing',
      'cennik': 'pricing',
      'contact': 'contact',
      'kontakt': 'contact',
      'privacy': 'privacy',
      'polityka-prywatnosci': 'privacy'
    };

    if (pageMap[this.currentPage]) {
      this.currentPage = pageMap[this.currentPage];
    }
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getCurrentLang() {
    return this.currentLang;
  }

  getUrlForPage(page, lang) {
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
        'privacy': '/en/privacy',
        'terms': '/en/terms'
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
        'privacy': '/pl/polityka-prywatnosci',
        'terms': '/pl/regulamin'
      }
    };

    if (lang && page && pageUrls[lang] && pageUrls[lang][page]) {
      return pageUrls[lang][page];
    }
    return `/${lang || 'pl'}/`;
  }
}

const router = new Router();

export default router;

if (typeof window !== 'undefined') {
  window.router = router;
}

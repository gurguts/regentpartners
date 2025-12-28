class Header {
  constructor() {
    this.container = null;
    this.navigation = null;
  }

  init() {
    const container = document.getElementById('main-header');
    if (!container) return;
    
    this.container = container;
    this.createHeader();
  }

  createHeader() {
    if (this.container.querySelector('.header-inner')) {
      return;
    }
    
    this.container.className = 'site-header';
    
    const headerInner = document.createElement('div');
    headerInner.className = 'header-inner';
    
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';
    
    const logoLink = document.createElement('a');
    logoLink.href = this.getHomeUrl();
    logoLink.className = 'logo-link';
    logoLink.setAttribute('aria-label', 'Regent Partners Home');
    
    const logoImg = document.createElement('img');
    logoImg.src = '/img/logo.svg';
    logoImg.alt = 'Regent Partners';
    logoImg.className = 'logo-img';
    logoImg.onerror = function() {
      if (this.src.indexOf('logo.webp') === -1) {
        this.src = '/img/logo.webp';
      } else {
        logoLink.innerHTML = '';
        const textLogo = document.createElement('span');
        textLogo.className = 'logo-text';
        textLogo.textContent = 'Regent Partners';
        logoLink.appendChild(textLogo);
      }
    };
    
    logoLink.appendChild(logoImg);
    logoContainer.appendChild(logoLink);
    
    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';
    if (window.Navigation) {
      this.navigation = new window.Navigation(navContainer);
      this.navigation.init();
    }
    
    const headerActions = document.createElement('div');
    headerActions.className = 'header-actions';
    
    const languageSwitcher = this.createLanguageSwitcher();
    const ctaButton = this.createCTAButton();
    
    headerActions.appendChild(languageSwitcher);
    headerActions.appendChild(ctaButton);
    
    headerInner.appendChild(logoContainer);
    headerInner.appendChild(navContainer);
    headerInner.appendChild(headerActions);
    
    this.container.appendChild(headerInner);
    this.container._headerInstance = this;
  }

  getHomeUrl() {
    if (!window.router) {
      return '/';
    }
    const lang = window.router.getCurrentLang();
    return window.router.getUrlForPage('home', lang);
  }

  createLanguageSwitcher() {
    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'language-switcher';
    
    const currentLang = window.router ? window.router.getCurrentLang() : 'pl';
    const otherLang = currentLang === 'en' ? 'pl' : 'en';
    
    const currentLink = document.createElement('span');
    currentLink.className = 'lang-current';
    currentLink.textContent = currentLang.toUpperCase();
    
    const separator = document.createElement('span');
    separator.className = 'lang-separator';
    separator.textContent = '|';
    
    const otherLink = document.createElement('a');
    otherLink.href = '#';
    otherLink.className = 'lang-link';
    otherLink.textContent = otherLang.toUpperCase();
    otherLink.setAttribute('data-lang-switch', otherLang);
    
    langSwitcher.appendChild(currentLink);
    langSwitcher.appendChild(separator);
    langSwitcher.appendChild(otherLink);
    
    return langSwitcher;
  }

  createCTAButton() {
    const ctaButton = document.createElement('a');
    ctaButton.href = this.getQuickOrderUrl();
    ctaButton.className = 'cta-button btn-primary';
    ctaButton.setAttribute('data-i18n', 'common.quickOrder');
    
    if (window.i18n) {
      ctaButton.textContent = window.i18n.t('common.quickOrder');
    } else {
      ctaButton.textContent = 'Quick Order';
    }
    
    return ctaButton;
  }

  getQuickOrderUrl() {
    if (!window.router) {
      return '/services/international-recruitment#quick-order';
    }
    const lang = window.router.getCurrentLang();
    return window.router.getUrlForPage('recruitment', lang) + '#quick-order';
  }

  updateTranslations() {
    const ctaButton = this.container.querySelector('.cta-button');
    if (ctaButton && window.i18n) {
      const key = ctaButton.getAttribute('data-i18n');
      if (key) {
        ctaButton.textContent = window.i18n.t(key);
      }
    }
    
    const currentLang = window.router ? window.router.getCurrentLang() : 'pl';
    const otherLang = currentLang === 'en' ? 'pl' : 'en';
    const langCurrent = this.container.querySelector('.lang-current');
    const langLink = this.container.querySelector('.lang-link');
    if (langCurrent) {
      langCurrent.textContent = currentLang.toUpperCase();
    }
    if (langLink) {
      langLink.textContent = otherLang.toUpperCase();
      langLink.setAttribute('data-lang-switch', otherLang);
    }
    
    const logoLink = this.container.querySelector('.logo-link');
    if (logoLink) {
      logoLink.href = this.getHomeUrl();
    }
    
    if (ctaButton) {
      ctaButton.href = this.getQuickOrderUrl();
    }
    
    if (this.navigation) {
      this.navigation.updateTranslations();
    }
  }
}

if (typeof window !== 'undefined') {
  window.Header = Header;
}


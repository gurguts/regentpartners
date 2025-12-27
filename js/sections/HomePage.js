class HomePage {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'home') {
      return;
    }
    
    this.container = container;
    this.render();
  }

  render() {
    if (!window.i18n) return;
    
    const hero = this.createHero();
    const whyChoose = this.createWhyChoose();
    const coreServices = this.createCoreServices();
    const closingCta = this.createClosingCta();
    
    this.container.innerHTML = '';
    this.container.appendChild(hero);
    this.container.appendChild(whyChoose);
    this.container.appendChild(coreServices);
    this.container.appendChild(closingCta);
  }

  createHero() {
    const section = document.createElement('section');
    section.className = 'hero-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.home.hero.h1');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.home.hero.h1');
    }
    
    const text = document.createElement('p');
    text.className = 'hero-text';
    text.setAttribute('data-i18n', 'pages.home.hero.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.home.hero.text');
    }
    
    const ctaGroup = document.createElement('div');
    ctaGroup.className = 'hero-cta-group';
    
    const primaryCta = document.createElement('a');
    primaryCta.href = this.getContactUrl();
    primaryCta.className = 'btn btn-primary';
    primaryCta.setAttribute('data-i18n', 'pages.home.hero.ctaPrimary');
    if (window.i18n) {
      primaryCta.textContent = window.i18n.t('pages.home.hero.ctaPrimary');
    }
    
    const secondaryCta = document.createElement('a');
    secondaryCta.href = this.getQuickOrderUrl();
    secondaryCta.className = 'btn btn-secondary';
    secondaryCta.setAttribute('data-i18n', 'pages.home.hero.ctaSecondary');
    if (window.i18n) {
      secondaryCta.textContent = window.i18n.t('pages.home.hero.ctaSecondary');
    }
    
    ctaGroup.appendChild(primaryCta);
    ctaGroup.appendChild(secondaryCta);
    
    container.appendChild(h1);
    container.appendChild(text);
    container.appendChild(ctaGroup);
    section.appendChild(container);
    
    return section;
  }

  createWhyChoose() {
    const section = document.createElement('section');
    section.className = 'why-choose-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.home.whyChoose.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.home.whyChoose.title');
    }
    
    const cards = document.createElement('div');
    cards.className = 'why-choose-cards';
    
    const card1 = this.createWhyChooseCard('internationalExpertise');
    const card2 = this.createWhyChooseCard('qualityReliability');
    const card3 = this.createWhyChooseCard('comprehensiveServices');
    
    cards.appendChild(card1);
    cards.appendChild(card2);
    cards.appendChild(card3);
    
    container.appendChild(h2);
    container.appendChild(cards);
    section.appendChild(container);
    
    return section;
  }

  createWhyChooseCard(key) {
    const card = document.createElement('div');
    card.className = 'why-choose-card';
    
    const icon = document.createElement('div');
    icon.className = `icon icon-${key}`;
    
    const title = document.createElement('h3');
    title.setAttribute('data-i18n', `pages.home.whyChoose.${key}.title`);
    if (window.i18n) {
      title.textContent = window.i18n.t(`pages.home.whyChoose.${key}.title`);
    }
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', `pages.home.whyChoose.${key}.text`);
    if (window.i18n) {
      text.textContent = window.i18n.t(`pages.home.whyChoose.${key}.text`);
    }
    
    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(text);
    
    return card;
  }

  createCoreServices() {
    const section = document.createElement('section');
    section.className = 'core-services-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.home.coreServices.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.home.coreServices.title');
    }
    
    const cards = document.createElement('div');
    cards.className = 'core-services-cards';
    
    const card1 = this.createServiceCard('callCenter', '/services/call-center');
    const card2 = this.createServiceCard('advertising', '/services/advertising-campaigns');
    const card3 = this.createServiceCard('recruitment', '/services/international-recruitment');
    
    cards.appendChild(card1);
    cards.appendChild(card2);
    cards.appendChild(card3);
    
    container.appendChild(h2);
    container.appendChild(cards);
    section.appendChild(container);
    
    return section;
  }

  createServiceCard(key, url) {
    const card = document.createElement('a');
    card.href = this.getUrl(url);
    card.className = 'service-card';
    
    const title = document.createElement('h3');
    title.setAttribute('data-i18n', `pages.home.coreServices.${key}.title`);
    if (window.i18n) {
      title.textContent = window.i18n.t(`pages.home.coreServices.${key}.title`);
    }
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', `pages.home.coreServices.${key}.text`);
    if (window.i18n) {
      text.textContent = window.i18n.t(`pages.home.coreServices.${key}.text`);
    }
    
    card.appendChild(title);
    card.appendChild(text);
    
    return card;
  }

  createClosingCta() {
    const section = document.createElement('section');
    section.className = 'closing-cta-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const text = document.createElement('p');
    text.className = 'closing-cta-text';
    text.setAttribute('data-i18n', 'pages.home.closingCta.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.home.closingCta.text');
    }
    
    const button = document.createElement('a');
    button.href = this.getContactUrl();
    button.className = 'btn btn-primary';
    button.setAttribute('data-i18n', 'pages.home.closingCta.button');
    if (window.i18n) {
      button.textContent = window.i18n.t('pages.home.closingCta.button');
    }
    
    container.appendChild(text);
    container.appendChild(button);
    section.appendChild(container);
    
    return section;
  }

  getUrl(path) {
    if (!window.router) {
      return path;
    }
    const lang = window.router.getCurrentLang();
    const pageMap = {
      '/services/call-center': 'call-center',
      '/services/advertising-campaigns': 'advertising',
      '/services/international-recruitment': 'recruitment',
      '/contact': 'contact'
    };
    
    const page = pageMap[path] || path.replace(/^\//, '');
    if (window.router.getUrlForPage) {
      return window.router.getUrlForPage(page, lang) || path;
    }
    return `/${lang}${path}`;
  }

  getContactUrl() {
    return this.getUrl('/contact');
  }

  getQuickOrderUrl() {
    if (!window.router) {
      return '/services/international-recruitment#quick-order';
    }
    const lang = window.router.getCurrentLang();
    return window.router.getUrlForPage('recruitment', lang) + '#quick-order';
  }

  updateTranslations() {
    if (!window.i18n) return;
    
    const elements = this.container.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.textContent = window.i18n.t(key);
      }
    });
  }
}

if (typeof window !== 'undefined') {
  window.HomePage = HomePage;
}


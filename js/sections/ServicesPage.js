class ServicesPage {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'services') {
      return;
    }
    
    this.container = container;
    this.render();
  }

  render() {
    if (!window.i18n) return;
    
    const hero = this.createHero();
    const servicesCards = this.createServicesCards();
    
    this.container.innerHTML = '';
    this.container.appendChild(hero);
    this.container.appendChild(servicesCards);
  }

  createHero() {
    const section = document.createElement('section');
    section.className = 'services-hero-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.services.hero.h1');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.services.hero.h1');
    }
    
    const text = document.createElement('p');
    text.className = 'services-hero-text';
    text.setAttribute('data-i18n', 'pages.services.hero.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.services.hero.text');
    }
    
    container.appendChild(h1);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createServicesCards() {
    const section = document.createElement('section');
    section.className = 'services-cards-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'services-cards-grid';
    
    const services = [
      {
        key: 'callCenter',
        urlPath: '/services/call-center',
        pageKey: 'call-center'
      },
      {
        key: 'advertising',
        urlPath: '/services/advertising-campaigns',
        pageKey: 'advertising'
      },
      {
        key: 'recruitment',
        urlPath: '/services/international-recruitment',
        pageKey: 'recruitment'
      }
    ];
    
    services.forEach(service => {
      const card = this.createServiceCard(service);
      cardsContainer.appendChild(card);
    });
    
    container.appendChild(cardsContainer);
    section.appendChild(container);
    
    return section;
  }

  createServiceCard(service) {
    const card = document.createElement('a');
    card.href = this.getUrl(service.pageKey);
    card.className = 'service-card-link';
    
    const cardKeyMap = {
      'callCenter': 'CallCenter',
      'advertising': 'Advertising',
      'recruitment': 'Recruitment'
    };
    
    const cardKey = cardKeyMap[service.key] || service.key;
    
    const title = document.createElement('h3');
    title.setAttribute('data-i18n', `pages.services.card${cardKey}.title`);
    if (window.i18n) {
      title.textContent = window.i18n.t(`pages.services.card${cardKey}.title`);
    }
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', `pages.services.card${cardKey}.text`);
    if (window.i18n) {
      text.textContent = window.i18n.t(`pages.services.card${cardKey}.text`);
    }
    
    card.appendChild(title);
    card.appendChild(text);
    
    return card;
  }

  getUrl(pageKey) {
    if (!window.router) {
      return '#';
    }
    const lang = window.router.getCurrentLang();
    return window.router.getUrlForPage(pageKey, lang) || '#';
  }

  updateTranslations() {
    if (!window.i18n) return;
    if (!this.container) return;
    
    const elements = this.container.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.textContent = window.i18n.t(key);
      }
    });
    
    const cards = this.container.querySelectorAll('.service-card-link');
    if (cards.length === 3 && window.router) {
      const lang = window.router.getCurrentLang();
      const services = ['call-center', 'advertising', 'recruitment'];
      cards.forEach((card, index) => {
        card.href = window.router.getUrlForPage(services[index], lang) || '#';
      });
    }
  }
}

if (typeof window !== 'undefined') {
  window.ServicesPage = ServicesPage;
}


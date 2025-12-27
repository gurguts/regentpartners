class CallCenterPage {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'call-center') {
      return;
    }
    
    this.container = container;
    this.render();
  }

  render() {
    if (!window.i18n) return;
    
    const hero = this.createHero();
    const overview = this.createOverview();
    const benefits = this.createBenefits();
    const servicesInclude = this.createServicesInclude();
    const conclusion = this.createConclusion();
    const caseStudy = this.createCaseStudy();
    const cta = this.createCta();
    
    this.container.innerHTML = '';
    this.container.appendChild(hero);
    this.container.appendChild(overview);
    this.container.appendChild(benefits);
    this.container.appendChild(servicesInclude);
    this.container.appendChild(conclusion);
    this.container.appendChild(caseStudy);
    this.container.appendChild(cta);
  }

  createHero() {
    const section = document.createElement('section');
    section.className = 'call-center-hero-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.callCenter.hero.h1');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.callCenter.hero.h1');
    }
    
    const intro = document.createElement('p');
    intro.className = 'call-center-hero-intro';
    intro.setAttribute('data-i18n', 'pages.callCenter.hero.intro');
    if (window.i18n) {
      intro.textContent = window.i18n.t('pages.callCenter.hero.intro');
    }
    
    container.appendChild(h1);
    container.appendChild(intro);
    section.appendChild(container);
    
    return section;
  }

  createOverview() {
    const section = document.createElement('section');
    section.className = 'call-center-overview-section';
    section.id = 'overview';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.callCenter.overview.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.callCenter.overview.title');
    }
    
    const text = document.createElement('p');
    text.className = 'call-center-text';
    text.setAttribute('data-i18n', 'pages.callCenter.overview.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.callCenter.overview.text');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createBenefits() {
    const section = document.createElement('section');
    section.className = 'call-center-benefits-section';
    section.id = 'benefits';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.callCenter.benefits.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.callCenter.benefits.title');
    }
    
    const benefitsList = document.createElement('ul');
    benefitsList.className = 'benefits-list';
    
    const benefits = [
      { key: 'multilingual' },
      { key: 'trainedTeam' },
      { key: 'technology' },
      { key: 'scalable' },
      { key: 'focus' }
    ];
    
    benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.className = 'benefit-item';
      
      const title = document.createElement('h3');
      title.setAttribute('data-i18n', `pages.callCenter.benefits.${benefit.key}.title`);
      if (window.i18n) {
        title.textContent = window.i18n.t(`pages.callCenter.benefits.${benefit.key}.title`);
      }
      
      const text = document.createElement('p');
      text.setAttribute('data-i18n', `pages.callCenter.benefits.${benefit.key}.text`);
      if (window.i18n) {
        text.textContent = window.i18n.t(`pages.callCenter.benefits.${benefit.key}.text`);
      }
      
      li.appendChild(title);
      li.appendChild(text);
      benefitsList.appendChild(li);
    });
    
    container.appendChild(h2);
    container.appendChild(benefitsList);
    section.appendChild(container);
    
    return section;
  }

  createServicesInclude() {
    const section = document.createElement('section');
    section.className = 'call-center-services-include-section';
    section.id = 'services';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.callCenter.servicesInclude.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.callCenter.servicesInclude.title');
    }
    
    const servicesList = document.createElement('ul');
    servicesList.className = 'services-include-list';
    
    const services = [
      { key: 'customerSupport' },
      { key: 'technicalSupport' },
      { key: 'telemarketing' },
      { key: 'orderProcessing' },
      { key: 'afterSales' }
    ];
    
    services.forEach(service => {
      const li = document.createElement('li');
      li.className = 'service-include-item';
      
      const title = document.createElement('h3');
      title.setAttribute('data-i18n', `pages.callCenter.servicesInclude.${service.key}.title`);
      if (window.i18n) {
        title.textContent = window.i18n.t(`pages.callCenter.servicesInclude.${service.key}.title`);
      }
      
      const text = document.createElement('p');
      text.setAttribute('data-i18n', `pages.callCenter.servicesInclude.${service.key}.text`);
      if (window.i18n) {
        text.textContent = window.i18n.t(`pages.callCenter.servicesInclude.${service.key}.text`);
      }
      
      li.appendChild(title);
      li.appendChild(text);
      servicesList.appendChild(li);
    });
    
    container.appendChild(h2);
    container.appendChild(servicesList);
    section.appendChild(container);
    
    return section;
  }

  createConclusion() {
    const section = document.createElement('section');
    section.className = 'call-center-conclusion-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const text = document.createElement('p');
    text.className = 'call-center-text';
    text.setAttribute('data-i18n', 'pages.callCenter.conclusion.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.callCenter.conclusion.text');
    }
    
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createCaseStudy() {
    const section = document.createElement('section');
    section.className = 'call-center-case-study-section';
    section.id = 'case-study';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.callCenter.caseStudy.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.callCenter.caseStudy.title');
    }
    
    const text = document.createElement('p');
    text.className = 'call-center-text';
    text.setAttribute('data-i18n', 'pages.callCenter.caseStudy.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.callCenter.caseStudy.text');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createCta() {
    const section = document.createElement('section');
    section.className = 'call-center-cta-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const text = document.createElement('p');
    text.className = 'call-center-cta-text';
    text.setAttribute('data-i18n', 'pages.callCenter.cta.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.callCenter.cta.text');
    }
    
    const button = document.createElement('a');
    button.href = this.getContactUrl();
    button.className = 'btn btn-primary';
    button.setAttribute('data-i18n', 'pages.callCenter.cta.button');
    if (window.i18n) {
      button.textContent = window.i18n.t('pages.callCenter.cta.button');
    }
    
    container.appendChild(text);
    container.appendChild(button);
    section.appendChild(container);
    
    return section;
  }

  getContactUrl() {
    if (!window.router) {
      return '/contact';
    }
    const lang = window.router.getCurrentLang();
    return window.router.getUrlForPage('contact', lang) || '/contact';
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
    
    const ctaButton = this.container.querySelector('.call-center-cta-section .btn');
    if (ctaButton && window.router) {
      ctaButton.href = this.getContactUrl();
    }
  }
}

if (typeof window !== 'undefined') {
  window.CallCenterPage = CallCenterPage;
}


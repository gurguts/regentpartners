class AdvertisingPage {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'advertising') {
      return;
    }
    
    this.container = container;
    this.render();
    this.setupAccordion();
  }

  render() {
    if (!window.i18n) return;
    
    const hero = this.createHero();
    const whatWeOffer = this.createWhatWeOffer();
    const serviceComponents = this.createServiceComponents();
    const competitiveBenefits = this.createCompetitiveBenefits();
    const pricingApproach = this.createPricingApproach();
    const exampleCampaign = this.createExampleCampaign();
    const conclusion = this.createConclusion();
    
    this.container.innerHTML = '';
    this.container.appendChild(hero);
    this.container.appendChild(whatWeOffer);
    this.container.appendChild(serviceComponents);
    this.container.appendChild(competitiveBenefits);
    this.container.appendChild(pricingApproach);
    this.container.appendChild(exampleCampaign);
    this.container.appendChild(conclusion);
  }

  createHero() {
    const section = document.createElement('section');
    section.className = 'advertising-hero-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.advertising.hero.h1');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.advertising.hero.h1');
    }
    
    container.appendChild(h1);
    section.appendChild(container);
    
    return section;
  }

  createWhatWeOffer() {
    const section = document.createElement('section');
    section.className = 'advertising-what-we-offer-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.advertising.whatWeOffer.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.advertising.whatWeOffer.title');
    }
    
    const text = document.createElement('p');
    text.className = 'advertising-text';
    text.setAttribute('data-i18n', 'pages.advertising.whatWeOffer.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.advertising.whatWeOffer.text');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createServiceComponents() {
    const section = document.createElement('section');
    section.className = 'advertising-service-components-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.advertising.serviceComponents.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.advertising.serviceComponents.title');
    }
    
    const componentsList = document.createElement('div');
    componentsList.className = 'service-components-list';
    
    const components = [
      { key: 'strategy' },
      { key: 'creative' },
      { key: 'digital' },
      { key: 'socialMedia' },
      { key: 'traditional' },
      { key: 'eventMarketing' },
      { key: 'promotional' },
      { key: 'research' }
    ];
    
    components.forEach(component => {
      const item = this.createServiceComponentItem(component.key);
      componentsList.appendChild(item);
    });
    
    container.appendChild(h2);
    container.appendChild(componentsList);
    section.appendChild(container);
    
    return section;
  }

  createServiceComponentItem(key) {
    const item = document.createElement('div');
    item.className = 'service-component-item';
    
    const header = document.createElement('div');
    header.className = 'service-component-header';
    
    const title = document.createElement('h3');
    title.setAttribute('data-i18n', `pages.advertising.serviceComponents.${key}.title`);
    if (window.i18n) {
      title.textContent = window.i18n.t(`pages.advertising.serviceComponents.${key}.title`);
    }
    
    const toggle = document.createElement('button');
    toggle.className = 'service-component-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '+';
    
    header.appendChild(title);
    header.appendChild(toggle);
    
    const content = document.createElement('div');
    content.className = 'service-component-content';
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', `pages.advertising.serviceComponents.${key}.text`);
    if (window.i18n) {
      text.textContent = window.i18n.t(`pages.advertising.serviceComponents.${key}.text`);
    }
    
    content.appendChild(text);
    
    item.appendChild(header);
    item.appendChild(content);
    
    header.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      item.classList.toggle('expanded', !isExpanded);
      toggle.innerHTML = !isExpanded ? '−' : '+';
    });
    
    return item;
  }

  createCompetitiveBenefits() {
    const section = document.createElement('section');
    section.className = 'advertising-competitive-benefits-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.advertising.competitiveBenefits.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.advertising.competitiveBenefits.title');
    }
    
    const intro = document.createElement('p');
    intro.className = 'advertising-text';
    intro.setAttribute('data-i18n', 'pages.advertising.competitiveBenefits.intro');
    if (window.i18n) {
      intro.textContent = window.i18n.t('pages.advertising.competitiveBenefits.intro');
    }
    
    const benefitsList = document.createElement('ul');
    benefitsList.className = 'competitive-benefits-list';
    
    const benefits = [
      { key: 'branding' },
      { key: 'international' },
      { key: 'agile' },
      { key: 'reporting' },
      { key: 'integrated' }
    ];
    
    benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.className = 'benefit-item';
      
      const text = document.createElement('p');
      text.setAttribute('data-i18n', `pages.advertising.competitiveBenefits.${benefit.key}`);
      if (window.i18n) {
        text.textContent = window.i18n.t(`pages.advertising.competitiveBenefits.${benefit.key}`);
      }
      
      li.appendChild(text);
      benefitsList.appendChild(li);
    });
    
    container.appendChild(h2);
    container.appendChild(intro);
    container.appendChild(benefitsList);
    section.appendChild(container);
    
    return section;
  }

  createPricingApproach() {
    const section = document.createElement('section');
    section.className = 'advertising-pricing-approach-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.advertising.pricingApproach.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.advertising.pricingApproach.title');
    }
    
    const text = document.createElement('p');
    text.className = 'advertising-text';
    text.setAttribute('data-i18n', 'pages.advertising.pricingApproach.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.advertising.pricingApproach.text');
    }
    
    const link = document.createElement('a');
    link.href = this.getPricingUrl();
    link.className = 'btn btn-primary';
    link.setAttribute('data-i18n', 'pages.advertising.pricingApproach.linkText');
    if (window.i18n) {
      link.textContent = window.i18n.t('pages.advertising.pricingApproach.linkText');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    container.appendChild(link);
    section.appendChild(container);
    
    return section;
  }

  createExampleCampaign() {
    const section = document.createElement('section');
    section.className = 'advertising-example-campaign-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.advertising.exampleCampaign.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.advertising.exampleCampaign.title');
    }
    
    const text = document.createElement('p');
    text.className = 'advertising-text';
    text.setAttribute('data-i18n', 'pages.advertising.exampleCampaign.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.advertising.exampleCampaign.text');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createConclusion() {
    const section = document.createElement('section');
    section.className = 'advertising-conclusion-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const text = document.createElement('p');
    text.className = 'advertising-text';
    text.setAttribute('data-i18n', 'pages.advertising.conclusion.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.advertising.conclusion.text');
    }
    
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  setupAccordion() {
    const items = this.container.querySelectorAll('.service-component-item');
    items.forEach((item, index) => {
      if (window.matchMedia('(min-width: 769px)').matches) {
        item.classList.add('expanded');
        const toggle = item.querySelector('.service-component-toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'true');
          toggle.innerHTML = '−';
        }
      }
    });
    
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    mediaQuery.addEventListener('change', (e) => {
      items.forEach(item => {
        if (e.matches) {
          item.classList.add('expanded');
          const toggle = item.querySelector('.service-component-toggle');
          if (toggle) {
            toggle.setAttribute('aria-expanded', 'true');
            toggle.innerHTML = '−';
          }
        } else {
          item.classList.remove('expanded');
          const toggle = item.querySelector('.service-component-toggle');
          if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.innerHTML = '+';
          }
        }
      });
    });
  }

  getPricingUrl() {
    if (!window.router) {
      return '/pricing';
    }
    const lang = window.router.getCurrentLang();
    return window.router.getUrlForPage('pricing', lang) || '/pricing';
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
    
    const pricingLink = this.container.querySelector('.advertising-pricing-approach-section .btn');
    if (pricingLink && window.router) {
      pricingLink.href = this.getPricingUrl();
    }
  }
}

if (typeof window !== 'undefined') {
  window.AdvertisingPage = AdvertisingPage;
}


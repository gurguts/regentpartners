class AboutPage {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'about') {
      return;
    }
    
    this.container = container;
    this.render();
  }

  render() {
    if (!window.i18n) return;
    
    const companyProfile = this.createCompanyProfile();
    const whoWeAre = this.createWhoWeAre();
    const values = this.createValues();
    const whatWeDo = this.createWhatWeDo();
    const globalNetwork = this.createGlobalNetwork();
    const addressCard = this.createAddressCard();
    
    this.container.innerHTML = '';
    this.container.appendChild(companyProfile);
    this.container.appendChild(whoWeAre);
    this.container.appendChild(values);
    this.container.appendChild(whatWeDo);
    this.container.appendChild(globalNetwork);
    this.container.appendChild(addressCard);
  }

  createCompanyProfile() {
    const section = document.createElement('section');
    section.className = 'about-section company-profile';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.about.companyProfile.h1');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.about.companyProfile.h1');
    }
    
    const text = document.createElement('p');
    text.className = 'about-text';
    text.setAttribute('data-i18n', 'pages.about.companyProfile.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.about.companyProfile.text');
    }
    
    container.appendChild(h1);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createWhoWeAre() {
    const section = document.createElement('section');
    section.className = 'about-section who-we-are';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.about.whoWeAre.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.about.whoWeAre.title');
    }
    
    const text = document.createElement('p');
    text.className = 'about-text';
    text.setAttribute('data-i18n', 'pages.about.whoWeAre.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.about.whoWeAre.text');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createValues() {
    const section = document.createElement('section');
    section.className = 'about-section values';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.about.values.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.about.values.title');
    }
    
    const valuesList = document.createElement('ul');
    valuesList.className = 'values-list';
    
    const values = [
      { key: 'professionalism', icon: 'professionalism' },
      { key: 'quality', icon: 'quality' },
      { key: 'knowHow', icon: 'know-how' },
      { key: 'clientCentric', icon: 'client-centric' }
    ];
    
    values.forEach(value => {
      const li = document.createElement('li');
      li.className = 'value-item';
      
      const icon = document.createElement('div');
      icon.className = `icon icon-${value.icon}`;
      
      const content = document.createElement('div');
      content.className = 'value-content';
      
      const title = document.createElement('h3');
      title.setAttribute('data-i18n', `pages.about.values.${value.key}.title`);
      if (window.i18n) {
        title.textContent = window.i18n.t(`pages.about.values.${value.key}.title`);
      }
      
      const text = document.createElement('p');
      text.setAttribute('data-i18n', `pages.about.values.${value.key}.text`);
      if (window.i18n) {
        text.textContent = window.i18n.t(`pages.about.values.${value.key}.text`);
      }
      
      content.appendChild(title);
      content.appendChild(text);
      
      li.appendChild(icon);
      li.appendChild(content);
      valuesList.appendChild(li);
    });
    
    container.appendChild(h2);
    container.appendChild(valuesList);
    section.appendChild(container);
    
    return section;
  }

  createWhatWeDo() {
    const section = document.createElement('section');
    section.className = 'about-section what-we-do';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.about.whatWeDo.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.about.whatWeDo.title');
    }
    
    const intro = document.createElement('p');
    intro.className = 'about-intro';
    intro.setAttribute('data-i18n', 'pages.about.whatWeDo.intro');
    if (window.i18n) {
      intro.textContent = window.i18n.t('pages.about.whatWeDo.intro');
    }
    
    const servicesList = document.createElement('ul');
    servicesList.className = 'services-list';
    
    const services = [
      { key: 'callCenter' },
      { key: 'advertising' },
      { key: 'recruitment' }
    ];
    
    services.forEach(service => {
      const li = document.createElement('li');
      li.className = 'service-item';
      
      const title = document.createElement('h3');
      title.setAttribute('data-i18n', `pages.about.whatWeDo.${service.key}.title`);
      if (window.i18n) {
        title.textContent = window.i18n.t(`pages.about.whatWeDo.${service.key}.title`);
      }
      
      const text = document.createElement('p');
      text.setAttribute('data-i18n', `pages.about.whatWeDo.${service.key}.text`);
      if (window.i18n) {
        text.textContent = window.i18n.t(`pages.about.whatWeDo.${service.key}.text`);
      }
      
      li.appendChild(title);
      li.appendChild(text);
      servicesList.appendChild(li);
    });
    
    const conclusion = document.createElement('p');
    conclusion.className = 'about-conclusion';
    conclusion.setAttribute('data-i18n', 'pages.about.whatWeDo.conclusion');
    if (window.i18n) {
      conclusion.textContent = window.i18n.t('pages.about.whatWeDo.conclusion');
    }
    
    container.appendChild(h2);
    container.appendChild(intro);
    container.appendChild(servicesList);
    container.appendChild(conclusion);
    section.appendChild(container);
    
    return section;
  }

  createGlobalNetwork() {
    const section = document.createElement('section');
    section.className = 'about-section global-network';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.about.globalNetwork.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.about.globalNetwork.title');
    }
    
    const text = document.createElement('p');
    text.className = 'about-text';
    text.setAttribute('data-i18n', 'pages.about.globalNetwork.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.about.globalNetwork.text');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createAddressCard() {
    const section = document.createElement('section');
    section.className = 'about-section address-card-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const card = document.createElement('div');
    card.className = 'address-card';
    
    const title = document.createElement('h3');
    title.setAttribute('data-i18n', 'pages.about.addressCard.title');
    if (window.i18n) {
      title.textContent = window.i18n.t('pages.about.addressCard.title');
    }
    
    const address = document.createElement('address');
    address.className = 'address-card-address';
    
    const addressLine1 = document.createElement('p');
    addressLine1.setAttribute('data-i18n', 'pages.about.addressCard.address');
    if (window.i18n) {
      addressLine1.textContent = window.i18n.t('pages.about.addressCard.address');
    }
    
    const addressLine2 = document.createElement('p');
    addressLine2.setAttribute('data-i18n', 'pages.about.addressCard.city');
    if (window.i18n) {
      addressLine2.textContent = window.i18n.t('pages.about.addressCard.city');
    }
    
    address.appendChild(addressLine1);
    address.appendChild(addressLine2);
    
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    mapContainer.id = 'map-placeholder';
    
    card.appendChild(title);
    card.appendChild(address);
    card.appendChild(mapContainer);
    
    container.appendChild(card);
    section.appendChild(container);
    
    return section;
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
  }
}

if (typeof window !== 'undefined') {
  window.AboutPage = AboutPage;
}


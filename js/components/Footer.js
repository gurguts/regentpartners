class Footer {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-footer');
    if (!container) return;
    
    this.container = container;
    this.createFooter();
  }

  createFooter() {
    this.container.className = 'site-footer';
    
    const footerInner = document.createElement('div');
    footerInner.className = 'footer-inner';
    
    const companyInfo = this.createCompanyInfo();
    const quickLinks = this.createQuickLinks();
    const servicesLinks = this.createServicesLinks();
    const socialLinks = this.createSocialLinks();
    const legalLinks = this.createLegalLinks();
    
    footerInner.appendChild(companyInfo);
    footerInner.appendChild(quickLinks);
    footerInner.appendChild(servicesLinks);
    footerInner.appendChild(socialLinks);
    footerInner.appendChild(legalLinks);
    
    this.container.appendChild(footerInner);
    
    const copyright = document.createElement('div');
    copyright.className = 'footer-copyright';
    const copyrightText = document.createElement('p');
    copyrightText.setAttribute('data-i18n', 'footer.copyright');
    if (window.i18n) {
      copyrightText.textContent = window.i18n.t('footer.copyright');
    }
    copyright.appendChild(copyrightText);
    
    this.container.appendChild(copyright);
    this.container._footerInstance = this;
  }

  createCompanyInfo() {
    const block = document.createElement('div');
    block.className = 'footer-block company-info';
    
    const title = document.createElement('h3');
    title.className = 'footer-title';
    title.setAttribute('data-i18n', 'footer.companyName');
    if (window.i18n) {
      title.textContent = window.i18n.t('footer.companyName');
    }
    
    const address = document.createElement('address');
    address.className = 'footer-address';
    
    const addressLine1 = document.createElement('p');
    addressLine1.setAttribute('data-i18n', 'footer.address');
    if (window.i18n) {
      addressLine1.textContent = window.i18n.t('footer.address');
    }
    
    const addressLine2 = document.createElement('p');
    addressLine2.setAttribute('data-i18n', 'footer.city');
    if (window.i18n) {
      addressLine2.textContent = window.i18n.t('footer.city');
    }
    
    const phone = document.createElement('p');
    const phoneLabel = document.createElement('strong');
    phoneLabel.setAttribute('data-i18n', 'footer.phone');
    if (window.i18n) {
      phoneLabel.textContent = window.i18n.t('footer.phone') + ': ';
    }
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+48791186568';
    phoneLink.setAttribute('data-i18n', 'footer.phoneValue');
    if (window.i18n) {
      phoneLink.textContent = window.i18n.t('footer.phoneValue');
    }
    phone.appendChild(phoneLabel);
    phone.appendChild(phoneLink);
    
    const email = document.createElement('p');
    const emailLabel = document.createElement('strong');
    emailLabel.setAttribute('data-i18n', 'footer.email');
    if (window.i18n) {
      emailLabel.textContent = window.i18n.t('footer.email') + ': ';
    }
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:regantpartners@gmail.com';
    emailLink.setAttribute('data-i18n', 'footer.emailValue');
    if (window.i18n) {
      emailLink.textContent = window.i18n.t('footer.emailValue');
    }
    email.appendChild(emailLabel);
    email.appendChild(emailLink);
    
    const website = document.createElement('p');
    const websiteLabel = document.createElement('strong');
    websiteLabel.setAttribute('data-i18n', 'footer.website');
    if (window.i18n) {
      websiteLabel.textContent = window.i18n.t('footer.website') + ': ';
    }
    const websiteLink = document.createElement('a');
    websiteLink.href = 'https://www.regentpartners.pl';
    websiteLink.target = '_blank';
    websiteLink.rel = 'noopener noreferrer';
    websiteLink.setAttribute('data-i18n', 'footer.websiteValue');
    if (window.i18n) {
      websiteLink.textContent = window.i18n.t('footer.websiteValue');
    }
    website.appendChild(websiteLabel);
    website.appendChild(websiteLink);
    
    const registration = document.createElement('p');
    registration.className = 'footer-registration';
    const krs = document.createElement('span');
    if (window.i18n) {
      krs.textContent = window.i18n.t('footer.krs') + ': ' + window.i18n.t('footer.krsValue');
    } else {
      krs.textContent = 'KRS: 0001145892';
    }
    const nip = document.createElement('span');
    if (window.i18n) {
      nip.textContent = window.i18n.t('footer.nip') + ': ' + window.i18n.t('footer.nipValue');
    } else {
      nip.textContent = 'NIP: 5214099286';
    }
    registration.appendChild(krs);
    registration.appendChild(document.createTextNode(' | '));
    registration.appendChild(nip);
    
    const hours = document.createElement('p');
    hours.className = 'footer-hours';
    const hoursLabel = document.createElement('strong');
    hoursLabel.setAttribute('data-i18n', 'footer.officeHours');
    if (window.i18n) {
      hoursLabel.textContent = window.i18n.t('footer.officeHours') + ': ';
    }
    const hoursValue = document.createElement('span');
    hoursValue.setAttribute('data-i18n', 'footer.officeHoursValue');
    if (window.i18n) {
      hoursValue.textContent = window.i18n.t('footer.officeHoursValue');
    }
    hours.appendChild(hoursLabel);
    hours.appendChild(hoursValue);
    
    block.appendChild(title);
    address.appendChild(addressLine1);
    address.appendChild(addressLine2);
    block.appendChild(address);
    block.appendChild(phone);
    block.appendChild(email);
    block.appendChild(website);
    block.appendChild(registration);
    block.appendChild(hours);
    
    return block;
  }

  createQuickLinks() {
    const block = document.createElement('div');
    block.className = 'footer-block quick-links';
    
    const title = document.createElement('h3');
    title.className = 'footer-title';
    title.setAttribute('data-i18n', 'footer.quickLinks');
    if (window.i18n) {
      title.textContent = window.i18n.t('footer.quickLinks');
    }
    
    const linksList = document.createElement('ul');
    linksList.className = 'footer-links';
    
    const links = [
      { key: 'home', url: '/' },
      { key: 'about', url: '/about-us' },
      { key: 'services', url: '/services' },
      { key: 'pricing', url: '/pricing' },
      { key: 'contact', url: '/contact' }
    ];
    
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = this.getUrl(link.url);
      a.setAttribute('data-i18n', `navigation.${link.key}`);
      if (window.i18n) {
        a.textContent = window.i18n.t(`navigation.${link.key}`);
      }
      li.appendChild(a);
      linksList.appendChild(li);
    });
    
    block.appendChild(title);
    block.appendChild(linksList);
    
    return block;
  }

  createServicesLinks() {
    const block = document.createElement('div');
    block.className = 'footer-block services-links';
    
    const title = document.createElement('h3');
    title.className = 'footer-title';
    title.setAttribute('data-i18n', 'footer.servicesTitle');
    if (window.i18n) {
      title.textContent = window.i18n.t('footer.servicesTitle');
    }
    
    const linksList = document.createElement('ul');
    linksList.className = 'footer-links';
    
    const services = [
      { key: 'callCenter', url: '/services/call-center' },
      { key: 'advertising', url: '/services/advertising-campaigns' },
      { key: 'recruitment', url: '/services/international-recruitment' }
    ];
    
    services.forEach(service => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = this.getUrl(service.url);
      a.setAttribute('data-i18n', `navigation.${service.key}`);
      if (window.i18n) {
        a.textContent = window.i18n.t(`navigation.${service.key}`);
      }
      li.appendChild(a);
      linksList.appendChild(li);
    });
    
    block.appendChild(title);
    block.appendChild(linksList);
    
    return block;
  }

  createSocialLinks() {
    const block = document.createElement('div');
    block.className = 'footer-block social-links';
    
    const title = document.createElement('h3');
    title.className = 'footer-title';
    title.setAttribute('data-i18n', 'footer.socialMedia');
    if (window.i18n) {
      title.textContent = window.i18n.t('footer.socialMedia');
    } else {
      title.textContent = 'Social Media';
    }
    
    const linksList = document.createElement('ul');
    linksList.className = 'footer-links social-links-list';
    
    block.appendChild(title);
    block.appendChild(linksList);
    
    return block;
  }

  createLegalLinks() {
    const block = document.createElement('div');
    block.className = 'footer-block legal-links';
    
    const title = document.createElement('h3');
    title.className = 'footer-title';
    title.setAttribute('data-i18n', 'footer.legal');
    if (window.i18n) {
      title.textContent = window.i18n.t('footer.legal');
    }
    
    const linksList = document.createElement('ul');
    linksList.className = 'footer-links';
    
    const legalItems = [
      { key: 'privacyPolicy', url: '/privacy' },
      { key: 'cookies', url: '/cookies' }
    ];
    
    legalItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = this.getUrl(item.url);
      a.setAttribute('data-i18n', `footer.${item.key}`);
      if (window.i18n) {
        a.textContent = window.i18n.t(`footer.${item.key}`);
      }
      li.appendChild(a);
      linksList.appendChild(li);
    });
    
    block.appendChild(title);
    block.appendChild(linksList);
    
    return block;
  }

  getUrl(path) {
    if (!window.router) {
      return path;
    }
    const lang = window.router.getCurrentLang();
    const pageMap = {
      '/': 'home',
      '/about-us': 'about',
      '/services': 'services',
      '/services/call-center': 'call-center',
      '/services/advertising-campaigns': 'advertising',
      '/services/international-recruitment': 'recruitment',
      '/pricing': 'pricing',
      '/contact': 'contact',
      '/privacy': 'privacy',
      '/cookies': 'cookies',
      '/terms': 'terms'
    };
    
    const page = pageMap[path] || path.replace(/^\//, '');
    if (window.router.getUrlForPage) {
      return window.router.getUrlForPage(page, lang) || path;
    }
    return `/${lang}${path}`;
  }

  updateTranslations() {
    if (!window.i18n) return;
    
    const elements = this.container.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        const text = window.i18n.t(key);
        if ((key === 'footer.phone' || key === 'footer.email' || key === 'footer.website' || key === 'footer.officeHours') && el.tagName === 'STRONG') {
          el.textContent = text + ': ';
        } else {
          el.textContent = text;
        }
      }
    });
    
    const registration = this.container.querySelector('.footer-registration');
    if (registration) {
      const spans = registration.querySelectorAll('span');
      if (spans.length >= 2) {
        spans[0].textContent = window.i18n.t('footer.krs') + ': ' + window.i18n.t('footer.krsValue');
        spans[1].textContent = window.i18n.t('footer.nip') + ': ' + window.i18n.t('footer.nipValue');
      }
    }
  }
}

if (typeof window !== 'undefined') {
  window.Footer = Footer;
}


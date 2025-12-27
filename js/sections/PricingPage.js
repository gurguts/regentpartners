class PricingPage {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'pricing') {
      return;
    }
    
    this.container = container;
    this.render();
    this.setupAccordions();
  }

  render() {
    if (!window.i18n) return;
    
    const intro = this.createIntro();
    const callCenter = this.createCallCenterSection();
    const advertising = this.createAdvertisingSection();
    const recruitment = this.createRecruitmentSection();
    const other = this.createOtherSection();
    const terms = this.createTermsSection();
    const contact = this.createContactSection();
    
    this.container.innerHTML = '';
    this.container.appendChild(intro);
    this.container.appendChild(callCenter);
    this.container.appendChild(advertising);
    this.container.appendChild(recruitment);
    this.container.appendChild(other);
    this.container.appendChild(terms);
    this.container.appendChild(contact);
  }

  createIntro() {
    const section = document.createElement('section');
    section.className = 'pricing-intro-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.pricing.title');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.pricing.title');
    }
    
    const text = document.createElement('p');
    text.className = 'pricing-intro-text';
    text.setAttribute('data-i18n', 'pages.pricing.intro');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.pricing.intro');
    }
    
    container.appendChild(h1);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createCallCenterSection() {
    const section = document.createElement('section');
    section.className = 'pricing-section pricing-call-center-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const card = this.createPriceCard('callCenter');
    
    container.appendChild(card);
    section.appendChild(container);
    
    return section;
  }

  createAdvertisingSection() {
    const section = document.createElement('section');
    section.className = 'pricing-section pricing-advertising-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const card = this.createPriceCardWithItems('advertising');
    
    container.appendChild(card);
    section.appendChild(container);
    
    return section;
  }

  createRecruitmentSection() {
    const section = document.createElement('section');
    section.className = 'pricing-section pricing-recruitment-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const card = this.createPriceCardWithItems('recruitment');
    
    container.appendChild(card);
    section.appendChild(container);
    
    return section;
  }

  createOtherSection() {
    const section = document.createElement('section');
    section.className = 'pricing-section pricing-other-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const card = this.createPriceCardWithItems('other');
    
    container.appendChild(card);
    section.appendChild(container);
    
    return section;
  }

  createPriceCard(sectionKey) {
    const card = document.createElement('div');
    card.className = 'price-card';
    
    const header = document.createElement('div');
    header.className = 'price-card-header';
    
    const title = document.createElement('h2');
    title.setAttribute('data-i18n', `pages.pricing.${sectionKey}.title`);
    if (window.i18n) {
      title.textContent = window.i18n.t(`pages.pricing.${sectionKey}.title`);
    }
    
    header.appendChild(title);
    
    const content = document.createElement('div');
    content.className = 'price-card-content';
    
    const itemCard = document.createElement('div');
    itemCard.className = 'price-item';
    
    const itemName = document.createElement('h3');
    itemName.setAttribute('data-i18n', `pages.pricing.${sectionKey}.item1.name`);
    if (window.i18n) {
      itemName.textContent = window.i18n.t(`pages.pricing.${sectionKey}.item1.name`);
    }
    
    const itemPrice = document.createElement('div');
    itemPrice.className = 'price-value';
    itemPrice.setAttribute('data-i18n', `pages.pricing.${sectionKey}.item1.price`);
    if (window.i18n) {
      itemPrice.textContent = window.i18n.t(`pages.pricing.${sectionKey}.item1.price`);
    }
    
    const itemUnit = document.createElement('div');
    itemUnit.className = 'price-unit';
    itemUnit.setAttribute('data-i18n', `pages.pricing.${sectionKey}.item1.unit`);
    if (window.i18n) {
      itemUnit.textContent = window.i18n.t(`pages.pricing.${sectionKey}.item1.unit`);
    }
    
    const itemDescription = document.createElement('p');
    itemDescription.className = 'price-description';
    itemDescription.setAttribute('data-i18n', `pages.pricing.${sectionKey}.item1.description`);
    if (window.i18n) {
      itemDescription.textContent = window.i18n.t(`pages.pricing.${sectionKey}.item1.description`);
    }
    
    const exampleKey = `pages.pricing.${sectionKey}.item1.example`;
    const example = this.getNestedValue(window.i18n && window.i18n.translations, exampleKey.split('.'));
    if (example && typeof example === 'string') {
      const itemExample = document.createElement('p');
      itemExample.className = 'price-example';
      itemExample.setAttribute('data-i18n', exampleKey);
      itemExample.textContent = example;
      itemCard.appendChild(itemExample);
    }
    
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(itemUnit);
    itemCard.appendChild(itemDescription);
    
    content.appendChild(itemCard);
    
    card.appendChild(header);
    card.appendChild(content);
    
    return card;
  }

  createPriceCardWithItems(sectionKey) {
    const card = document.createElement('div');
    card.className = 'price-card';
    
    const header = document.createElement('div');
    header.className = 'price-card-header';
    
    const title = document.createElement('h2');
    title.setAttribute('data-i18n', `pages.pricing.${sectionKey}.title`);
    if (window.i18n) {
      title.textContent = window.i18n.t(`pages.pricing.${sectionKey}.title`);
    }
    
    header.appendChild(title);
    
    const introKey = `pages.pricing.${sectionKey}.intro`;
    const introValue = this.getNestedValue(window.i18n && window.i18n.translations, introKey.split('.'));
    if (introValue && typeof introValue === 'string') {
      const introText = document.createElement('p');
      introText.className = 'price-card-intro';
      introText.setAttribute('data-i18n', introKey);
      introText.textContent = introValue;
      header.appendChild(introText);
    }
    
    const content = document.createElement('div');
    content.className = 'price-card-content price-items-list';
    
    const itemsKey = `pages.pricing.${sectionKey}.items`;
    const items = this.getNestedValue(window.i18n && window.i18n.translations, itemsKey.split('.'));
    
    if (items && Array.isArray(items)) {
      items.forEach((item, index) => {
        const itemCard = this.createPriceItem(item, index);
        content.appendChild(itemCard);
      });
    }
    
    const noteKey = `pages.pricing.${sectionKey}.note`;
    const note = this.getNestedValue(window.i18n && window.i18n.translations, noteKey.split('.'));
    if (note && typeof note === 'string') {
      const noteText = document.createElement('p');
      noteText.className = 'price-card-note';
      noteText.setAttribute('data-i18n', noteKey);
      noteText.textContent = note;
      content.appendChild(noteText);
    }
    
    card.appendChild(header);
    card.appendChild(content);
    
    return card;
  }

  createPriceItem(item, index) {
    const itemCard = document.createElement('div');
    itemCard.className = 'price-item';
    
    const itemHeader = document.createElement('div');
    itemHeader.className = 'price-item-header';
    
    const itemName = document.createElement('h3');
    itemName.textContent = item.name || '';
    
    const itemPrice = document.createElement('div');
    itemPrice.className = 'price-value';
    itemPrice.textContent = item.price || '';
    
    itemHeader.appendChild(itemName);
    itemHeader.appendChild(itemPrice);
    
    const itemDetails = document.createElement('div');
    itemDetails.className = 'price-item-details';
    
    const itemUnit = document.createElement('div');
    itemUnit.className = 'price-unit';
    itemUnit.textContent = item.unit || '';
    
    const itemDescription = document.createElement('p');
    itemDescription.className = 'price-description';
    itemDescription.textContent = item.description || '';
    
    itemDetails.appendChild(itemUnit);
    itemDetails.appendChild(itemDescription);
    
    itemCard.appendChild(itemHeader);
    itemCard.appendChild(itemDetails);
    
    return itemCard;
  }

  createTermsSection() {
    const section = document.createElement('section');
    section.className = 'pricing-terms-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.pricing.terms.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.pricing.terms.title');
    }
    
    const vatNote = document.createElement('p');
    vatNote.className = 'pricing-terms-note';
    vatNote.setAttribute('data-i18n', 'pages.pricing.terms.vatNote');
    if (window.i18n) {
      vatNote.textContent = window.i18n.t('pages.pricing.terms.vatNote');
    }
    
    const invoiceNote = document.createElement('p');
    invoiceNote.className = 'pricing-terms-note';
    invoiceNote.setAttribute('data-i18n', 'pages.pricing.terms.invoiceNote');
    if (window.i18n) {
      invoiceNote.textContent = window.i18n.t('pages.pricing.terms.invoiceNote');
    }
    
    const discounts = document.createElement('p');
    discounts.className = 'pricing-terms-note';
    discounts.setAttribute('data-i18n', 'pages.pricing.terms.discounts');
    if (window.i18n) {
      discounts.textContent = window.i18n.t('pages.pricing.terms.discounts');
    }
    
    const transparency = document.createElement('p');
    transparency.className = 'pricing-terms-note';
    transparency.setAttribute('data-i18n', 'pages.pricing.terms.transparency');
    if (window.i18n) {
      transparency.textContent = window.i18n.t('pages.pricing.terms.transparency');
    }
    
    const disclaimer = document.createElement('p');
    disclaimer.className = 'pricing-disclaimer';
    disclaimer.setAttribute('data-i18n', 'pages.pricing.terms.disclaimer');
    if (window.i18n) {
      disclaimer.textContent = window.i18n.t('pages.pricing.terms.disclaimer');
    }
    
    container.appendChild(h2);
    container.appendChild(vatNote);
    container.appendChild(invoiceNote);
    container.appendChild(discounts);
    container.appendChild(transparency);
    container.appendChild(disclaimer);
    section.appendChild(container);
    
    return section;
  }

  createContactSection() {
    const section = document.createElement('section');
    section.className = 'pricing-contact-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const text = document.createElement('p');
    text.className = 'pricing-contact-text';
    text.setAttribute('data-i18n', 'pages.pricing.contact');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.pricing.contact');
    }
    
    const link = document.createElement('a');
    link.href = this.getContactUrl();
    link.className = 'btn btn-primary';
    link.setAttribute('data-i18n', 'navigation.contact');
    if (window.i18n) {
      link.textContent = window.i18n.t('navigation.contact');
    }
    
    container.appendChild(text);
    container.appendChild(link);
    section.appendChild(container);
    
    return section;
  }

  setupAccordions() {
    const items = this.container.querySelectorAll('.price-item');
    items.forEach((item, index) => {
      if (window.matchMedia('(max-width: 768px)').matches && index > 0) {
        const header = item.querySelector('.price-item-header');
        const details = item.querySelector('.price-item-details');
        if (header && details) {
          item.classList.add('collapsed');
          header.addEventListener('click', () => {
            item.classList.toggle('collapsed');
          });
        }
      }
    });
  }

  getNestedValue(obj, keys) {
    if (!obj || !keys || keys.length === 0) return null;
    
    let value = obj;
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return null;
      }
    }
    return value;
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
        try {
          el.textContent = window.i18n.t(key);
        } catch (e) {
        }
      }
    });
    
    const items = this.container.querySelectorAll('.price-items-list .price-item');
    items.forEach((item, index) => {
      const sectionKey = item.closest('.price-card').querySelector('h2').getAttribute('data-i18n').replace('pages.pricing.', '').replace('.title', '');
      const itemsKey = `pages.pricing.${sectionKey}.items`;
      const itemsArray = this.getNestedValue(window.i18n && window.i18n.translations, itemsKey.split('.'));
      if (itemsArray && Array.isArray(itemsArray) && itemsArray[index]) {
        const itemData = itemsArray[index];
        const nameEl = item.querySelector('h3');
        const priceEl = item.querySelector('.price-value');
        const unitEl = item.querySelector('.price-unit');
        const descEl = item.querySelector('.price-description');
        
        if (nameEl) nameEl.textContent = itemData.name || '';
        if (priceEl) priceEl.textContent = itemData.price || '';
        if (unitEl) unitEl.textContent = itemData.unit || '';
        if (descEl) descEl.textContent = itemData.description || '';
      }
    });
    
    const contactLink = this.container.querySelector('.pricing-contact-section .btn');
    if (contactLink && window.router) {
      contactLink.href = this.getContactUrl();
    }
  }
}

if (typeof window !== 'undefined') {
  window.PricingPage = PricingPage;
}


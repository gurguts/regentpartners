class PrivacyPage {
  constructor() {
    this.container = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'privacy') {
      return;
    }
    
    this.container = container;
    this.render();
  }

  render() {
    if (!window.i18n) return;
    
    const content = this.createContent();
    
    this.container.innerHTML = '';
    this.container.appendChild(content);
  }

  createContent() {
    const section = document.createElement('section');
    section.className = 'privacy-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.privacy.title');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.privacy.title');
    }
    
    const lastUpdated = document.createElement('p');
    lastUpdated.className = 'privacy-last-updated';
    lastUpdated.setAttribute('data-i18n', 'pages.privacy.lastUpdated');
    if (window.i18n) {
      lastUpdated.textContent = window.i18n.t('pages.privacy.lastUpdated');
    }
    
    const sections = [
      'introduction',
      'dataController',
      'dataCollected',
      'dataPurpose',
      'dataStorage',
      'dataRights',
      'dataSecurity',
      'contact'
    ];
    
    sections.forEach(sectionKey => {
      const sectionContent = this.createSection(sectionKey);
      if (sectionContent) {
        container.appendChild(sectionContent);
      }
    });
    
    section.appendChild(container);
    
    container.insertBefore(h1, container.firstChild);
    container.insertBefore(lastUpdated, container.children[1]);
    
    return section;
  }

  createSection(sectionKey) {
    const section = document.createElement('section');
    section.className = 'privacy-section-content';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', `pages.privacy.${sectionKey}.title`);
    if (window.i18n) {
      h2.textContent = window.i18n.t(`pages.privacy.${sectionKey}.title`);
    }
    
    const paragraphs = window.i18n && window.i18n.translations && 
                       window.i18n.translations.pages && 
                       window.i18n.translations.pages.privacy && 
                       window.i18n.translations.pages.privacy[sectionKey] &&
                       window.i18n.translations.pages.privacy[sectionKey].content;
    
    if (paragraphs && Array.isArray(paragraphs)) {
      paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.className = 'privacy-text';
        p.textContent = paragraph;
        section.appendChild(p);
      });
    } else {
      const p = document.createElement('p');
      p.className = 'privacy-text';
      p.setAttribute('data-i18n', `pages.privacy.${sectionKey}.text`);
      if (window.i18n) {
        p.textContent = window.i18n.t(`pages.privacy.${sectionKey}.text`);
      }
      section.appendChild(p);
    }
    
    section.insertBefore(h2, section.firstChild);
    
    return section;
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
    
    const sections = ['introduction', 'dataController', 'dataCollected', 'dataPurpose', 'dataStorage', 'dataRights', 'dataSecurity', 'contact'];
    sections.forEach(sectionKey => {
      const sectionElement = this.container.querySelector(`.privacy-section-content h2[data-i18n="pages.privacy.${sectionKey}.title"]`);
      if (sectionElement) {
        const section = sectionElement.parentElement;
        const paragraphs = this.getNestedValue(window.i18n && window.i18n.translations, ['pages', 'privacy', sectionKey, 'content']);
        
        if (paragraphs && Array.isArray(paragraphs)) {
          const existingParagraphs = section.querySelectorAll('.privacy-text');
          existingParagraphs.forEach(p => p.remove());
          
          paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.className = 'privacy-text';
            p.textContent = paragraph;
            section.appendChild(p);
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
}

if (typeof window !== 'undefined') {
  window.PrivacyPage = PrivacyPage;
}


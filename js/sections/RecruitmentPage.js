class RecruitmentPage {
  constructor() {
    this.container = null;
    this.modal = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;

    if (!window.router || window.router.getCurrentPage() !== 'recruitment') {
      return;
    }

    this.container = container;
    this.render();
    this.initForm();
    this.initModal();
  }

  render() {
    if (!window.i18n) return;

    const hero = this.createHero();
    const summary = this.createSummary();
    const process = this.createProcess();
    const benefits = this.createBenefits();
    const caseStudy = this.createCaseStudy();
    const b2bSupport = this.createB2BSupport();
    const quickOrder = this.createQuickOrderForm();

    this.container.innerHTML = '';
    this.container.appendChild(hero);
    this.container.appendChild(summary);
    this.container.appendChild(process);
    this.container.appendChild(benefits);
    this.container.appendChild(caseStudy);
    this.container.appendChild(b2bSupport);
    this.container.appendChild(quickOrder);
  }

  createHero() {
    const section = document.createElement('section');
    section.className = 'recruitment-hero-section';

    const container = document.createElement('div');
    container.className = 'container hero-container';

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'hero-content';

    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.recruitment.hero.h1');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.recruitment.hero.h1');
    }

    const intro = document.createElement('p');
    intro.className = 'recruitment-intro';
    intro.setAttribute('data-i18n', 'pages.recruitment.hero.intro');
    if (window.i18n) {
      intro.textContent = window.i18n.t('pages.recruitment.hero.intro');
    }

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'hero-image';

    const img = document.createElement('img');
    img.src = '/img/recruitment-hero.webp';
    img.alt = 'International Recruitment Services - Global Talent Acquisition';
    img.loading = 'eager';

    imageWrapper.appendChild(img);

    contentWrapper.appendChild(h1);
    contentWrapper.appendChild(intro);

    container.appendChild(contentWrapper);
    container.appendChild(imageWrapper);
    section.appendChild(container);

    return section;
  }

  createSummary() {
    const section = document.createElement('section');
    section.className = 'recruitment-summary-section';

    const container = document.createElement('div');
    container.className = 'container';

    const text = document.createElement('p');
    text.className = 'recruitment-text';
    text.setAttribute('data-i18n', 'pages.recruitment.summary.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.recruitment.summary.text');
    }

    container.appendChild(text);
    section.appendChild(container);

    return section;
  }

  createProcess() {
    const section = document.createElement('section');
    section.className = 'recruitment-process-section';
    section.id = 'process';

    const container = document.createElement('div');
    container.className = 'container';

    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.recruitment.process.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.recruitment.process.title');
    }

    const intro = document.createElement('p');
    intro.className = 'recruitment-text';
    intro.setAttribute('data-i18n', 'pages.recruitment.process.intro');
    if (window.i18n) {
      intro.textContent = window.i18n.t('pages.recruitment.process.intro');
    }

    const stepsContainer = document.createElement('div');
    stepsContainer.className = 'recruitment-steps';

    const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

    steps.forEach(stepKey => {
      const step = this.createProcessStep(stepKey);
      stepsContainer.appendChild(step);
    });

    container.appendChild(h2);
    container.appendChild(intro);
    container.appendChild(stepsContainer);
    section.appendChild(container);

    return section;
  }

  createProcessStep(stepKey) {
    const step = document.createElement('div');
    step.className = 'recruitment-step';

    const number = document.createElement('div');
    number.className = 'recruitment-step-number';
    number.setAttribute('data-i18n', `pages.recruitment.process.${stepKey}.number`);
    if (window.i18n) {
      number.textContent = window.i18n.t(`pages.recruitment.process.${stepKey}.number`);
    }

    const content = document.createElement('div');
    content.className = 'recruitment-step-content';

    const title = document.createElement('h3');
    title.setAttribute('data-i18n', `pages.recruitment.process.${stepKey}.title`);
    if (window.i18n) {
      title.textContent = window.i18n.t(`pages.recruitment.process.${stepKey}.title`);
    }

    const text = document.createElement('p');
    text.setAttribute('data-i18n', `pages.recruitment.process.${stepKey}.text`);
    if (window.i18n) {
      text.textContent = window.i18n.t(`pages.recruitment.process.${stepKey}.text`);
    }

    content.appendChild(title);
    content.appendChild(text);

    step.appendChild(number);
    step.appendChild(content);

    return step;
  }

  createBenefits() {
    const section = document.createElement('section');
    section.className = 'recruitment-benefits-section';

    const container = document.createElement('div');
    container.className = 'container';

    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.recruitment.benefits.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.recruitment.benefits.title');
    }

    const benefitsList = document.createElement('ul');
    benefitsList.className = 'recruitment-benefits-list';

    const benefits = [
      { key: 'talentPool' },
      { key: 'fasterHiring' },
      { key: 'costEfficiency' },
      { key: 'compliance' },
      { key: 'retention' },
      { key: 'scalability' }
    ];

    benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.className = 'recruitment-benefit-item';

      const text = document.createElement('p');
      text.setAttribute('data-i18n', `pages.recruitment.benefits.${benefit.key}`);
      if (window.i18n) {
        text.textContent = window.i18n.t(`pages.recruitment.benefits.${benefit.key}`);
      }

      li.appendChild(text);
      benefitsList.appendChild(li);
    });

    container.appendChild(h2);
    container.appendChild(benefitsList);
    section.appendChild(container);

    return section;
  }

  createCaseStudy() {
    const section = document.createElement('section');
    section.className = 'recruitment-case-study-section';

    const container = document.createElement('div');
    container.className = 'container';

    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.recruitment.caseStudy.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.recruitment.caseStudy.title');
    }

    const text = document.createElement('p');
    text.className = 'recruitment-text';
    text.setAttribute('data-i18n', 'pages.recruitment.caseStudy.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.recruitment.caseStudy.text');
    }

    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);

    return section;
  }

  createB2BSupport() {
    const section = document.createElement('section');
    section.className = 'recruitment-b2b-support-section';

    const container = document.createElement('div');
    container.className = 'container';

    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.recruitment.b2bSupport.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.recruitment.b2bSupport.title');
    }

    const text = document.createElement('p');
    text.className = 'recruitment-text';
    text.setAttribute('data-i18n', 'pages.recruitment.b2bSupport.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.recruitment.b2bSupport.text');
    }

    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);

    return section;
  }

  createQuickOrderForm() {
    const section = document.createElement('section');
    section.className = 'recruitment-quick-order-section';
    section.id = 'quick-order';

    const container = document.createElement('div');
    container.className = 'container';

    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.recruitment.quickOrder.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.recruitment.quickOrder.title');
    }

    const description = document.createElement('p');
    description.className = 'recruitment-text';
    description.setAttribute('data-i18n', 'pages.recruitment.quickOrder.description');
    if (window.i18n) {
      description.textContent = window.i18n.t('pages.recruitment.quickOrder.description');
    }

    const form = document.createElement('form');
    form.className = 'quick-order-form';
    form.id = 'quick-order-form';

    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = 'website';
    honeypot.className = 'honeypot';
    honeypot.style.display = 'none';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';

    const formFields = [
      { key: 'firstName', type: 'text', required: true },
      { key: 'lastName', type: 'text', required: true },
      { key: 'company', type: 'text', required: true },
      { key: 'country', type: 'text', required: true },
      { key: 'employeesCount', type: 'text', required: true },
      { key: 'email', type: 'email', required: true },
      { key: 'phone', type: 'tel', required: true },
      { key: 'comments', type: 'textarea', required: false }
    ];

    formFields.forEach(field => {
      const fieldWrapper = document.createElement('div');
      fieldWrapper.className = 'form-field';

      const label = document.createElement('label');
      label.setAttribute('for', field.key);
      label.className = field.required ? 'required' : '';
      label.setAttribute('data-i18n', `forms.quickOrderForm.${field.key}`);
      if (window.i18n) {
        label.textContent = window.i18n.t(`forms.quickOrderForm.${field.key}`);
        if (field.required) {
          label.textContent += ' *';
        }
      }

      let input;
      if (field.type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 4;
        input.setAttribute('data-i18n-placeholder', `forms.quickOrderForm.${field.key}Placeholder`);
        if (window.i18n) {
          input.placeholder = window.i18n.t(`forms.quickOrderForm.${field.key}Placeholder`);
        }
      } else {
        input = document.createElement('input');
        input.type = field.type;
      }

      input.id = field.key;
      input.name = field.key;
      input.required = field.required;

      const errorMsg = document.createElement('span');
      errorMsg.className = 'form-error';
      errorMsg.setAttribute('data-field', field.key);

      fieldWrapper.appendChild(label);
      fieldWrapper.appendChild(input);
      fieldWrapper.appendChild(errorMsg);
      form.appendChild(fieldWrapper);
    });

    const gdprWrapper = document.createElement('div');
    gdprWrapper.className = 'form-field form-field-checkbox';

    const gdprCheckbox = document.createElement('input');
    gdprCheckbox.type = 'checkbox';
    gdprCheckbox.id = 'gdpr-consent';
    gdprCheckbox.name = 'gdprConsent';
    gdprCheckbox.required = true;

    const gdprLabel = document.createElement('label');
    gdprLabel.setAttribute('for', 'gdpr-consent');
    gdprLabel.className = 'checkbox-label';

    if (window.i18n) {
      const gdprText = window.i18n.t('forms.quickOrderForm.gdprConsent');
      const privacyLink = document.createElement('a');
      privacyLink.href = this.getPrivacyUrl();
      privacyLink.setAttribute('data-i18n', 'forms.quickOrderForm.gdprLink');
      if (window.i18n) {
        privacyLink.textContent = window.i18n.t('forms.quickOrderForm.gdprLink');
      }
      privacyLink.target = '_blank';

      gdprLabel.appendChild(document.createTextNode(gdprText + ' '));
      gdprLabel.appendChild(privacyLink);
    }

    const gdprError = document.createElement('span');
    gdprError.className = 'form-error';
    gdprError.setAttribute('data-field', 'gdprConsent');

    gdprWrapper.appendChild(gdprCheckbox);
    gdprWrapper.appendChild(gdprLabel);
    gdprWrapper.appendChild(gdprError);
    form.appendChild(gdprWrapper);

    form.insertBefore(honeypot, form.firstChild);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'btn btn-primary';
    submitButton.setAttribute('data-i18n', 'forms.quickOrderForm.submit');
    if (window.i18n) {
      submitButton.textContent = window.i18n.t('forms.quickOrderForm.submit');
    }

    form.appendChild(submitButton);

    container.appendChild(h2);
    container.appendChild(description);
    container.appendChild(form);
    section.appendChild(container);

    return section;
  }

  initForm() {
    const form = this.container.querySelector('#quick-order-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const honeypot = form.querySelector('.honeypot');
      if (honeypot && honeypot.value !== '') {
        return;
      }

      if (this.validateForm(form)) {
        this.submitForm(form);
      }
    });

    const inputs = form.querySelectorAll('input:not([type="checkbox"]), textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        this.clearFieldError(input);
      });
    });

    const gdprCheckbox = form.querySelector('#gdpr-consent');
    if (gdprCheckbox) {
      gdprCheckbox.addEventListener('change', () => {
        this.clearFieldError(gdprCheckbox);
      });
    }
  }

  validateForm(form) {
    let isValid = true;

    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    const fieldKey = field.name || field.id;
    const errorElement = this.container.querySelector(`[data-field="${fieldKey}"]`);

    if (field.type === 'checkbox') {
      if (!field.checked) {
        this.showFieldError(errorElement, 'forms.validation.gdprRequired');
        field.classList.add('error');
        return false;
      } else {
        this.clearFieldError(field);
        return true;
      }
    }

    if (field.hasAttribute('required') && !field.value.trim()) {
      this.showFieldError(errorElement, 'forms.validation.required');
      return false;
    }

    if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value.trim())) {
        this.showFieldError(errorElement, 'forms.validation.emailInvalid');
        return false;
      }
    }

    if (field.type === 'tel' && field.value.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(field.value.trim()) || field.value.trim().length < 6) {
        this.showFieldError(errorElement, 'forms.validation.phoneInvalid');
        return false;
      }
    }

    this.clearFieldError(field);
    return true;
  }

  showFieldError(errorElement, errorKey) {
    if (!errorElement || !window.i18n) return;

    errorElement.textContent = window.i18n.t(errorKey);
    errorElement.style.display = 'block';

    const field = errorElement.parentElement.querySelector('input, textarea');
    if (field) {
      field.classList.add('error');
    }
  }

  clearFieldError(field) {
    const fieldKey = field.name || field.id;
    const errorElement = this.container.querySelector(`[data-field="${fieldKey}"]`);

    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }

    field.classList.remove('error');
  }

  async submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    if (window.i18n) {
      submitButton.textContent = window.i18n.t('forms.quickOrderForm.submitting');
    } else {
      submitButton.textContent = 'Sending...';
    }
    submitButton.disabled = true;

    const formData = new FormData(form);
    const data = {
      formType: 'quickOrder',
      firstName: formData.get('firstName') || '',
      lastName: formData.get('lastName') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      company: formData.get('company') || '',
      country: formData.get('country') || '',
      employeesCount: formData.get('employeesCount') || '',
      comments: formData.get('comments') || '',
      gdprConsent: formData.get('gdprConsent') === 'on',
      website: formData.get('website') || ''
    };

    try {
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        this.showSuccessModal();
        form.reset();
      } else {
        const errorMessage = result.message || (window.i18n ? window.i18n.t('forms.messages.error') : 'An error occurred. Please try again later.');
        alert(errorMessage);
      }
    } catch (error) {
      const errorMessage = window.i18n ? window.i18n.t('forms.messages.error') : 'An error occurred. Please try again later.';
      alert(errorMessage);
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }

  initModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'success-modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Close');

    const title = document.createElement('h3');
    title.setAttribute('data-i18n', 'forms.messages.thankYou');
    if (window.i18n) {
      title.textContent = window.i18n.t('forms.messages.thankYou');
    }

    const message = document.createElement('p');
    message.setAttribute('data-i18n', 'pages.recruitment.quickOrder.submitSuccess');
    if (window.i18n) {
      message.textContent = window.i18n.t('pages.recruitment.quickOrder.submitSuccess');
    }

    const okButton = document.createElement('button');
    okButton.className = 'btn btn-primary';
    okButton.textContent = 'OK';

    closeButton.addEventListener('click', () => this.hideModal());
    okButton.addEventListener('click', () => this.hideModal());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.hideModal();
      }
    });

    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(message);
    modalContent.appendChild(okButton);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
    this.modal = modal;
  }

  showSuccessModal() {
    if (this.modal) {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  hideModal() {
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  getPrivacyUrl() {
    if (!window.router) {
      return '/privacy';
    }
    const lang = window.router.getCurrentLang();
    return window.router.getUrlForPage('privacy', lang) || '/privacy';
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

    const placeholders = this.container.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && window.i18n) {
        el.placeholder = window.i18n.t(key);
      }
    });

    const form = this.container.querySelector('#quick-order-form');
    if (form) {
      const labels = form.querySelectorAll('label[data-i18n]');
      labels.forEach(label => {
        const key = label.getAttribute('data-i18n');
        if (key && window.i18n) {
          const isRequired = label.classList.contains('required');
          label.textContent = window.i18n.t(key) + (isRequired ? ' *' : '');
        }
      });

      const placeholders = form.querySelectorAll('[data-i18n-placeholder]');
      placeholders.forEach(input => {
        const key = input.getAttribute('data-i18n-placeholder');
        if (key && window.i18n) {
          input.placeholder = window.i18n.t(key);
        }
      });

      const gdprLabel = form.querySelector('.checkbox-label');
      if (gdprLabel && window.i18n) {
        const gdprText = window.i18n.t('forms.quickOrderForm.gdprConsent');
        const privacyLink = gdprLabel.querySelector('a');
        if (privacyLink) {
          privacyLink.textContent = window.i18n.t('forms.quickOrderForm.gdprLink');
          privacyLink.href = this.getPrivacyUrl();
        }
        gdprLabel.innerHTML = gdprText + ' ';
        if (privacyLink) {
          gdprLabel.appendChild(privacyLink);
        }
      }

      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton && window.i18n) {
        submitButton.textContent = window.i18n.t('forms.quickOrderForm.submit');
      }
    }

    if (this.modal) {
      const modalTitle = this.modal.querySelector('h3[data-i18n]');
      const modalMessage = this.modal.querySelector('p[data-i18n]');

      if (modalTitle && window.i18n) {
        modalTitle.textContent = window.i18n.t('forms.messages.thankYou');
      }

      if (modalMessage && window.i18n) {
        modalMessage.textContent = window.i18n.t('pages.recruitment.quickOrder.submitSuccess');
      }
    }
  }
}

if (typeof window !== 'undefined') {
  window.RecruitmentPage = RecruitmentPage;
}


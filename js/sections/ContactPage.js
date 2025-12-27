class ContactPage {
  constructor() {
    this.container = null;
    this.modal = null;
  }

  init() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    if (!window.router || window.router.getCurrentPage() !== 'contact') {
      return;
    }
    
    this.container = container;
    this.render();
    this.initForm();
    this.initModal();
  }

  render() {
    if (!window.i18n) return;
    
    const intro = this.createIntro();
    const info = this.createContactInfo();
    const officeHours = this.createOfficeHours();
    const location = this.createLocation();
    const directions = this.createDirections();
    const form = this.createContactForm();
    const socialMedia = this.createSocialMedia();
    const closing = this.createClosing();
    
    this.container.innerHTML = '';
    this.container.appendChild(intro);
    this.container.appendChild(info);
    this.container.appendChild(officeHours);
    this.container.appendChild(location);
    this.container.appendChild(directions);
    this.container.appendChild(form);
    this.container.appendChild(socialMedia);
    this.container.appendChild(closing);
  }

  createIntro() {
    const section = document.createElement('section');
    section.className = 'contact-intro-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.setAttribute('data-i18n', 'pages.contact.title');
    if (window.i18n) {
      h1.textContent = window.i18n.t('pages.contact.title');
    }
    
    const text = document.createElement('p');
    text.className = 'contact-intro-text';
    text.setAttribute('data-i18n', 'pages.contact.intro');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.contact.intro');
    }
    
    container.appendChild(h1);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createContactInfo() {
    const section = document.createElement('section');
    section.className = 'contact-info-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const card = document.createElement('div');
    card.className = 'contact-info-card';
    
    const title = document.createElement('h2');
    title.setAttribute('data-i18n', 'pages.contact.info.title');
    if (window.i18n) {
      title.textContent = window.i18n.t('pages.contact.info.title');
    }
    
    const companyName = document.createElement('div');
    companyName.className = 'contact-company-name';
    companyName.setAttribute('data-i18n', 'footer.companyName');
    if (window.i18n) {
      companyName.textContent = window.i18n.t('footer.companyName');
    }
    
    const address = document.createElement('div');
    address.className = 'contact-address';
    const addressLine1 = document.createElement('div');
    addressLine1.setAttribute('data-i18n', 'footer.address');
    if (window.i18n) {
      addressLine1.textContent = window.i18n.t('footer.address');
    }
    const addressLine2 = document.createElement('div');
    addressLine2.setAttribute('data-i18n', 'footer.city');
    if (window.i18n) {
      addressLine2.textContent = window.i18n.t('footer.city');
    }
    address.appendChild(addressLine1);
    address.appendChild(addressLine2);
    
    const phone = document.createElement('div');
    phone.className = 'contact-phone';
    const phoneLabel = document.createElement('span');
    phoneLabel.className = 'contact-label';
    phoneLabel.setAttribute('data-i18n', 'pages.contact.info.phone');
    if (window.i18n) {
      phoneLabel.textContent = window.i18n.t('pages.contact.info.phone') + ': ';
    }
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+48791186568';
    phoneLink.className = 'contact-link';
    phoneLink.setAttribute('data-i18n', 'footer.phoneValue');
    if (window.i18n) {
      phoneLink.textContent = window.i18n.t('footer.phoneValue');
    }
    phone.appendChild(phoneLabel);
    phone.appendChild(phoneLink);
    
    const email = document.createElement('div');
    email.className = 'contact-email';
    const emailLabel = document.createElement('span');
    emailLabel.className = 'contact-label';
    emailLabel.setAttribute('data-i18n', 'pages.contact.info.email');
    if (window.i18n) {
      emailLabel.textContent = window.i18n.t('pages.contact.info.email') + ': ';
    }
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:regantpartners@gmail.com';
    emailLink.className = 'contact-link';
    emailLink.setAttribute('data-i18n', 'footer.emailValue');
    if (window.i18n) {
      emailLink.textContent = window.i18n.t('footer.emailValue');
    }
    email.appendChild(emailLabel);
    email.appendChild(emailLink);
    
    const website = document.createElement('div');
    website.className = 'contact-website';
    const websiteLabel = document.createElement('span');
    websiteLabel.className = 'contact-label';
    websiteLabel.setAttribute('data-i18n', 'pages.contact.info.website');
    if (window.i18n) {
      websiteLabel.textContent = window.i18n.t('pages.contact.info.website') + ': ';
    }
    const websiteLink = document.createElement('a');
    websiteLink.href = 'https://www.regentpartners.pl';
    websiteLink.target = '_blank';
    websiteLink.className = 'contact-link';
    websiteLink.setAttribute('data-i18n', 'footer.websiteValue');
    if (window.i18n) {
      websiteLink.textContent = window.i18n.t('footer.websiteValue');
    }
    website.appendChild(websiteLabel);
    website.appendChild(websiteLink);
    
    const registration = document.createElement('div');
    registration.className = 'contact-registration';
    const regText = document.createElement('span');
    regText.setAttribute('data-i18n', 'pages.contact.info.registration');
    if (window.i18n) {
      const krs = window.i18n.t('footer.krsValue');
      const nip = window.i18n.t('footer.nipValue');
      regText.textContent = window.i18n.t('pages.contact.info.registration').replace('{krs}', krs).replace('{nip}', nip);
    }
    registration.appendChild(regText);
    
    card.appendChild(title);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(registration);
    
    container.appendChild(card);
    section.appendChild(container);
    
    return section;
  }

  createOfficeHours() {
    const section = document.createElement('section');
    section.className = 'contact-office-hours-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.contact.officeHours.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.contact.officeHours.title');
    }
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', 'pages.contact.officeHours.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.contact.officeHours.text');
    }
    
    const hoursValue = document.createElement('div');
    hoursValue.className = 'contact-hours-value';
    hoursValue.setAttribute('data-i18n', 'footer.officeHoursValue');
    if (window.i18n) {
      hoursValue.textContent = window.i18n.t('footer.officeHoursValue');
    }
    
    container.appendChild(h2);
    container.appendChild(hoursValue);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createLocation() {
    const section = document.createElement('section');
    section.className = 'contact-location-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.contact.location.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.contact.location.title');
    }
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', 'pages.contact.location.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.contact.location.text');
    }
    
    container.appendChild(h2);
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createDirections() {
    const section = document.createElement('section');
    section.className = 'contact-directions-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'pages.contact.directions.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('pages.contact.directions.title');
    }
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', 'pages.contact.directions.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.contact.directions.text');
    }
    
    const mapContainer = document.createElement('div');
    mapContainer.className = 'contact-map-container';
    
    const mapIframe = document.createElement('iframe');
    mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.645312345678!2d21.0123456789!3d52.1876543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDExJzE1LjYiTiAyMcKwMDAnNDQuNCJF!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl';
    mapIframe.width = '100%';
    mapIframe.height = '450';
    mapIframe.style.border = '0';
    mapIframe.allowFullscreen = true;
    mapIframe.loading = 'lazy';
    mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
    mapIframe.title = 'Regent Partners Office Location';
    
    mapContainer.appendChild(mapIframe);
    
    container.appendChild(h2);
    container.appendChild(text);
    container.appendChild(mapContainer);
    section.appendChild(container);
    
    return section;
  }

  createContactForm() {
    const section = document.createElement('section');
    section.className = 'contact-form-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n', 'forms.contactForm.title');
    if (window.i18n) {
      h2.textContent = window.i18n.t('forms.contactForm.title');
    }
    
    const intro = document.createElement('p');
    intro.className = 'contact-form-intro';
    intro.setAttribute('data-i18n', 'pages.contact.form.intro');
    if (window.i18n) {
      intro.textContent = window.i18n.t('pages.contact.form.intro');
    }
    
    const form = document.createElement('form');
    form.className = 'contact-form';
    form.id = 'contact-form';
    
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = 'website';
    honeypot.className = 'honeypot';
    honeypot.style.display = 'none';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    
    const formFields = [
      { key: 'name', type: 'text', required: true },
      { key: 'email', type: 'email', required: true },
      { key: 'company', type: 'text', required: false },
      { key: 'message', type: 'textarea', required: true }
    ];
    
    formFields.forEach(field => {
      const fieldWrapper = document.createElement('div');
      fieldWrapper.className = 'form-field';
      
      const label = document.createElement('label');
      label.setAttribute('for', field.key);
      label.className = field.required ? 'required' : '';
      label.setAttribute('data-i18n', `forms.contactForm.${field.key}`);
      if (window.i18n) {
        label.textContent = window.i18n.t(`forms.contactForm.${field.key}`);
        if (field.required) {
          label.textContent += ' *';
        }
      }
      
      let input;
      if (field.type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 6;
        input.setAttribute('data-i18n-placeholder', `forms.contactForm.${field.key}Placeholder`);
        if (window.i18n) {
          input.placeholder = window.i18n.t(`forms.contactForm.${field.key}Placeholder`);
        }
      } else {
        input = document.createElement('input');
        input.type = field.type;
        input.setAttribute('data-i18n-placeholder', `forms.contactForm.${field.key}Placeholder`);
        if (window.i18n) {
          input.placeholder = window.i18n.t(`forms.contactForm.${field.key}Placeholder`);
        }
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
    gdprCheckbox.id = 'gdpr-consent-contact';
    gdprCheckbox.name = 'gdprConsent';
    gdprCheckbox.required = true;
    
    const gdprLabel = document.createElement('label');
    gdprLabel.setAttribute('for', 'gdpr-consent-contact');
    gdprLabel.className = 'checkbox-label';
    
    if (window.i18n) {
      const gdprText = window.i18n.t('forms.contactForm.gdprConsent');
      const privacyLink = document.createElement('a');
      privacyLink.href = this.getPrivacyUrl();
      privacyLink.setAttribute('data-i18n', 'forms.contactForm.gdprLink');
      if (window.i18n) {
        privacyLink.textContent = window.i18n.t('forms.contactForm.gdprLink');
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
    submitButton.setAttribute('data-i18n', 'forms.contactForm.submit');
    if (window.i18n) {
      submitButton.textContent = window.i18n.t('forms.contactForm.submit');
    }
    
    form.appendChild(submitButton);
    
    container.appendChild(h2);
    container.appendChild(intro);
    container.appendChild(form);
    section.appendChild(container);
    
    return section;
  }

  createSocialMedia() {
    const section = document.createElement('section');
    section.className = 'contact-social-media-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const text = document.createElement('p');
    text.setAttribute('data-i18n', 'pages.contact.socialMedia.text');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.contact.socialMedia.text');
    }
    
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  createClosing() {
    const section = document.createElement('section');
    section.className = 'contact-closing-section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const text = document.createElement('p');
    text.className = 'contact-closing-text';
    text.setAttribute('data-i18n', 'pages.contact.closing');
    if (window.i18n) {
      text.textContent = window.i18n.t('pages.contact.closing');
    }
    
    container.appendChild(text);
    section.appendChild(container);
    
    return section;
  }

  initForm() {
    const form = this.container.querySelector('#contact-form');
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
    
    const gdprCheckbox = form.querySelector('#gdpr-consent-contact');
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

  submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    if (window.i18n) {
      submitButton.textContent = window.i18n.t('forms.contactForm.submitting');
    } else {
      submitButton.textContent = 'Sending...';
    }
    submitButton.disabled = true;
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    setTimeout(() => {
      console.log('Form submitted:', data);
      
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      
      this.showSuccessModal();
      form.reset();
    }, 1000);
  }

  initModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'contact-success-modal';
    
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
    message.setAttribute('data-i18n', 'forms.messages.thankYouMessage');
    if (window.i18n) {
      message.textContent = window.i18n.t('forms.messages.thankYouMessage');
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
        try {
          if (key === 'pages.contact.info.registration') {
            const krs = window.i18n.t('footer.krsValue');
            const nip = window.i18n.t('footer.nipValue');
            el.textContent = window.i18n.t(key).replace('{krs}', krs).replace('{nip}', nip);
          } else {
            el.textContent = window.i18n.t(key);
          }
        } catch (e) {
        }
      }
    });
    
    const placeholders = this.container.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && window.i18n) {
        el.placeholder = window.i18n.t(key);
      }
    });
    
    const form = this.container.querySelector('#contact-form');
    if (form) {
      const labels = form.querySelectorAll('label[data-i18n]:not(.checkbox-label)');
      labels.forEach(label => {
        const key = label.getAttribute('data-i18n');
        if (key && window.i18n) {
          const isRequired = label.classList.contains('required');
          label.textContent = window.i18n.t(key) + (isRequired ? ' *' : '');
        }
      });
      
      const gdprLabel = form.querySelector('.checkbox-label');
      if (gdprLabel && window.i18n) {
        const gdprText = window.i18n.t('forms.contactForm.gdprConsent');
        const privacyLink = gdprLabel.querySelector('a');
        if (privacyLink) {
          privacyLink.textContent = window.i18n.t('forms.contactForm.gdprLink');
          privacyLink.href = this.getPrivacyUrl();
        }
        gdprLabel.innerHTML = gdprText + ' ';
        if (privacyLink) {
          gdprLabel.appendChild(privacyLink);
        }
      }
      
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton && window.i18n) {
        submitButton.textContent = window.i18n.t('forms.contactForm.submit');
      }
    }
    
    if (this.modal) {
      const modalTitle = this.modal.querySelector('h3[data-i18n]');
      const modalMessage = this.modal.querySelector('p[data-i18n]');
      
      if (modalTitle && window.i18n) {
        modalTitle.textContent = window.i18n.t('forms.messages.thankYou');
      }
      
      if (modalMessage && window.i18n) {
        modalMessage.textContent = window.i18n.t('forms.messages.thankYouMessage');
      }
    }
  }
}

if (typeof window !== 'undefined') {
  window.ContactPage = ContactPage;
}


class Layout {
  constructor() {
    this.header = null;
    this.footer = null;
  }

  init() {
    this.createLayout();
    if (window.Header) {
      this.header = new window.Header();
      this.header.init();
    }
    if (window.Footer) {
      this.footer = new window.Footer();
      this.footer.init();
    }
  }

  createLayout() {
    const body = document.body;
    
    if (document.querySelector('.layout-wrapper')) {
      return;
    }
    
    let headerContainer = document.getElementById('main-header');
    let mainContainer = document.getElementById('main-content');
    let footerContainer = document.getElementById('main-footer');
    
    if (!headerContainer) {
      headerContainer = document.createElement('header');
      headerContainer.id = 'main-header';
      headerContainer.className = 'main-header';
    }
    
    if (!mainContainer) {
      mainContainer = document.createElement('main');
      mainContainer.id = 'main-content';
      mainContainer.className = 'main-content';
    }
    
    if (!footerContainer) {
      footerContainer = document.createElement('footer');
      footerContainer.id = 'main-footer';
      footerContainer.className = 'main-footer';
    }
    
    const wrapper = document.createElement('div');
    wrapper.className = 'layout-wrapper';
    
    const existingContent = Array.from(body.children);
    
    wrapper.appendChild(headerContainer);
    wrapper.appendChild(mainContainer);
    wrapper.appendChild(footerContainer);
    
    body.appendChild(wrapper);
    
    existingContent.forEach(child => {
      if (child !== wrapper && child.id !== 'main-header' && child.id !== 'main-footer' && child.id !== 'main-content') {
        if (child.tagName === 'HEADER' && !child.id) {
          const children = Array.from(child.children);
          children.forEach(c => mainContainer.appendChild(c));
          if (child.parentNode === body) {
            body.removeChild(child);
          }
        } else if (child.tagName === 'FOOTER' && !child.id) {
          const children = Array.from(child.children);
          children.forEach(c => footerContainer.appendChild(c));
          if (child.parentNode === body) {
            body.removeChild(child);
          }
        } else if (child.tagName !== 'SCRIPT' && child.className !== 'layout-wrapper' && child.parentNode === body) {
          mainContainer.appendChild(child);
        }
      }
    });
  }

  getMainContent() {
    return document.getElementById('main-content');
  }
}

if (typeof window !== 'undefined') {
  window.Layout = Layout;
}


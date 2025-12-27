class Navigation {
  constructor(container) {
    this.container = container;
    this.isMobileMenuOpen = false;
  }

  init() {
    this.createNavigation();
    this.setupEventListeners();
  }

  createNavigation() {
    const nav = document.createElement('nav');
    nav.className = 'main-navigation';
    nav.setAttribute('role', 'navigation');
    
    const menuList = document.createElement('ul');
    menuList.className = 'nav-menu';
    
    const menuItems = [
      { key: 'home', url: '/' },
      { key: 'about', url: '/about-us' },
      {
        key: 'services',
        url: '/services',
        submenu: [
          { key: 'callCenter', url: '/services/call-center' },
          { key: 'advertising', url: '/services/advertising-campaigns' },
          { key: 'recruitment', url: '/services/international-recruitment' }
        ]
      },
      { key: 'pricing', url: '/pricing' },
      { key: 'contact', url: '/contact' }
    ];
    
    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'nav-item';
      
      if (item.submenu) {
        li.classList.add('has-submenu');
        
        const link = document.createElement('a');
        const url = this.getUrl(item.url);
        link.href = url;
        link.setAttribute('data-original-href', item.url);
        link.className = 'nav-link';
        link.setAttribute('data-i18n', `navigation.${item.key}`);
        link.textContent = window.i18n ? window.i18n.t(`navigation.${item.key}`) : item.key;
        
        const submenuToggle = document.createElement('span');
        submenuToggle.className = 'submenu-toggle';
        submenuToggle.setAttribute('aria-label', 'Toggle submenu');
        submenuToggle.setAttribute('aria-expanded', 'false');
        submenuToggle.innerHTML = '<span></span>';
        
        const submenu = document.createElement('ul');
        submenu.className = 'submenu';
        submenu.setAttribute('aria-expanded', 'false');
        
        item.submenu.forEach(subItem => {
          const subLi = document.createElement('li');
          const subLink = document.createElement('a');
          const url = this.getUrl(subItem.url);
          subLink.href = url;
          subLink.setAttribute('data-original-href', subItem.url);
          subLink.className = 'submenu-link';
          subLink.setAttribute('data-i18n', `navigation.${subItem.key}`);
          subLink.textContent = window.i18n ? window.i18n.t(`navigation.${subItem.key}`) : subItem.key;
          subLi.appendChild(subLink);
          submenu.appendChild(subLi);
        });
        
        const linkWrapper = document.createElement('div');
        linkWrapper.className = 'nav-link-wrapper';
        linkWrapper.appendChild(link);
        linkWrapper.appendChild(submenuToggle);
        
        li.appendChild(linkWrapper);
        li.appendChild(submenu);
      } else {
        const link = document.createElement('a');
        const url = this.getUrl(item.url);
        link.href = url;
        link.setAttribute('data-original-href', item.url);
        link.className = 'nav-link';
        link.setAttribute('data-i18n', `navigation.${item.key}`);
        link.textContent = window.i18n ? window.i18n.t(`navigation.${item.key}`) : item.key;
        li.appendChild(link);
      }
      
      menuList.appendChild(li);
    });
    
    nav.appendChild(menuList);
    
    const burgerButton = document.createElement('button');
    burgerButton.className = 'burger-menu-toggle';
    burgerButton.setAttribute('aria-label', 'Toggle menu');
    burgerButton.setAttribute('aria-expanded', 'false');
    burgerButton.innerHTML = '<span></span><span></span><span></span>';
    
    nav.appendChild(burgerButton);
    this.container.appendChild(nav);
    
    this.nav = nav;
    this.menuList = menuList;
    this.burgerButton = burgerButton;
    nav._navigationInstance = this;
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
      '/contact': 'contact'
    };
    
    const page = pageMap[path];
    if (page && window.router.getUrlForPage) {
      return window.router.getUrlForPage(page, lang);
    }
    return path;
  }

  setupEventListeners() {
    if (this.burgerButton) {
      this.burgerButton.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }
    
    const submenuItems = this.nav.querySelectorAll('.has-submenu');
    submenuItems.forEach(item => {
      const linkWrapper = item.querySelector('.nav-link-wrapper');
      const link = item.querySelector('.nav-link');
      const toggle = item.querySelector('.submenu-toggle');
      const submenu = item.querySelector('.submenu');
      
      if (link && toggle && linkWrapper) {
        const handleSubmenuToggle = (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            item.classList.toggle('submenu-open');
            const isOpen = item.classList.contains('submenu-open');
            if (submenu) {
              submenu.setAttribute('aria-expanded', isOpen.toString());
            }
            if (toggle) {
              toggle.setAttribute('aria-expanded', isOpen.toString());
            }
          }
        };
        
        if (link) {
          link.addEventListener('click', handleSubmenuToggle);
        }
        if (toggle) {
          toggle.addEventListener('click', handleSubmenuToggle);
        }
      }
    });
    
    document.addEventListener('click', (e) => {
      if (this.isMobileMenuOpen && !this.nav.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
    
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
      if (window.innerWidth > 768) {
        const openSubmenus = this.nav.querySelectorAll('.has-submenu.submenu-open');
        openSubmenus.forEach(item => {
          item.classList.remove('submenu-open');
          const submenu = item.querySelector('.submenu');
          const toggle = item.querySelector('.submenu-toggle');
          if (submenu) {
            submenu.setAttribute('aria-expanded', 'false');
          }
          if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.nav.classList.toggle('mobile-menu-open', this.isMobileMenuOpen);
    this.burgerButton.setAttribute('aria-expanded', this.isMobileMenuOpen.toString());
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.nav.classList.remove('mobile-menu-open');
    this.burgerButton.setAttribute('aria-expanded', 'false');
    
    const openSubmenus = this.nav.querySelectorAll('.has-submenu.submenu-open');
    openSubmenus.forEach(item => {
      item.classList.remove('submenu-open');
      const submenu = item.querySelector('.submenu');
      const toggle = item.querySelector('.submenu-toggle');
      if (submenu) {
        submenu.setAttribute('aria-expanded', 'false');
      }
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  updateTranslations() {
    const links = this.nav.querySelectorAll('[data-i18n]');
    links.forEach(link => {
      const key = link.getAttribute('data-i18n');
      if (window.i18n && key) {
        link.textContent = window.i18n.t(key);
      }
    });
    
    const navLinks = this.nav.querySelectorAll('.nav-link, .submenu-link');
    navLinks.forEach(link => {
      const originalHref = link.getAttribute('data-original-href');
      if (originalHref) {
        link.href = this.getUrl(originalHref);
      }
    });
  }
}

if (typeof window !== 'undefined') {
  window.Navigation = Navigation;
}


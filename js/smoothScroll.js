class SmoothScroll {
  constructor() {
    this.easing = 0.12;
    this.maxVelocity = 50;
  }

  init() {
    this.setupWheelSmoothing();
  }

  setupWheelSmoothing() {
    let rafId = null;
    let currentScrollY = window.pageYOffset || window.scrollY || 0;
    let targetScrollY = currentScrollY;

    const smoothScroll = () => {
      const diff = targetScrollY - currentScrollY;
      
      if (Math.abs(diff) < 0.5) {
        currentScrollY = targetScrollY;
        window.scrollTo(0, currentScrollY);
        rafId = null;
        return;
      }

      currentScrollY += diff * this.easing;
      window.scrollTo(0, currentScrollY);
      
      if (Math.abs(targetScrollY - currentScrollY) > 0.5) {
        rafId = requestAnimationFrame(smoothScroll);
      } else {
        rafId = null;
      }
    };

    const handleWheel = (e) => {
      const delta = e.deltaY || e.detail || -e.wheelDelta;
      const scrollAmount = Math.min(Math.abs(delta), this.maxVelocity) * Math.sign(delta);
      targetScrollY += scrollAmount * 0.8;
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

      if (rafId === null) {
        rafId = requestAnimationFrame(smoothScroll);
      }

      e.preventDefault();
    };

    let passiveSupported = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get() {
          passiveSupported = true;
          return false;
        }
      });
      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {}

    const options = passiveSupported ? { passive: false } : false;
    
    window.addEventListener('wheel', handleWheel, options);

    window.addEventListener('scroll', () => {
      if (rafId === null) {
        currentScrollY = window.pageYOffset || window.scrollY || 0;
        targetScrollY = currentScrollY;
      }
    }, { passive: true });
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = new SmoothScroll();
    smoothScroll.init();
    window.smoothScroll = smoothScroll;
  });
}

export default SmoothScroll;

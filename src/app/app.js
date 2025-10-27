import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';
import '@scss/_modifiers.scss';
import { createButtonUp as btnUp, checkTop } from '@common/button-up';
import scrollBrowserToTop from '@helpers/browser-scroll';
import BASE_PATH from '@helpers/constants';
import footer from '@lay/footer';
import { header, nav, toggleMenu, burgerMenuResize } from '@lay/header';
import { logoContainer } from '@lay/header';
import main from '@lay/main';
import { router, changeViewsUrl } from '@route';
import { ctaBtn } from '@sections/cta';
import { heroButton } from '@sections/hero';
import { resetSlider } from '@sections/slider';

const App = {
  init() {
    window.onpopstate = router.showView;
    window.onresize = this.onResize.bind(this);
    window.onscroll = checkTop;

    window.addEventListener(
      'DOMContentLoaded',
      () => {
        this.mountLayout();
        router.showView();
        this.bindLinks();
      },
      { once: true }
    );
  },

  mountLayout() {
    document.body.prepend(footer);
    document.body.prepend(main);
    document.body.prepend(header);
  },

  bindLinks() {
    const giftsButtons = [heroButton, ctaBtn];
    giftsButtons.forEach((button) => {
      if (!button) return;
      button.onclick = (event) => {
        event.preventDefault();
        const isHomePage = window.location.pathname === BASE_PATH;
        const buttonName = button === ctaBtn ? 'ctaBtn' : 'heroButton';
        scrollBrowserToTop(isHomePage, buttonName);
        changeViewsUrl('gifts');
      };
    });

    if (logoContainer) {
      logoContainer.onclick = (event) => {
        if (nav.classList.contains('menu-open')) {
          toggleMenu();
        }
        event.preventDefault();
        scrollBrowserToTop();
        changeViewsUrl('');
      };
    }
  },

  onResize() {
    burgerMenuResize();
    btnUp();
    resetSlider();
  },
};

export default App;

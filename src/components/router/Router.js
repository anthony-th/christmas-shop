import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';
import '@scss/_modifiers.scss';
import { header, nav, toggleMenu, burgerMenuResize } from '@lay/header/Header';
import { setActiveLink } from '@lay/header/navigation/Navigation';
import { main } from '@lay/main/Main';
import { homePage } from '@page/HomePage';
import { giftsPage } from '@page/GiftsPage';
import { page404 } from '@page/404/404';
import { heroButton } from '@sections/hero/Hero';
import { logoContainer } from '@lay/header/Header';
import { ctaBtn } from '@sections/cta/Cta';
import { footer } from '@lay/footer/Footer';
import { scrollBrowserToTop } from '@helpers/BrowserScroll';
import { createButtonUp as btnUp, checkTop } from '@common/button-up/ButtonUp';
import { resetSlider } from '@sections/slider/Slider';
import { BASE_PATH } from '@helpers/Constants';

const views = {
  404: page404,
  [BASE_PATH]: homePage,
  [BASE_PATH + 'gifts']: giftsPage,
};

const checkHeaderVisible = (visibleHeader) => {
  if (visibleHeader && !document.body.contains(header)) {
    document.body.prepend(footer);
    document.body.prepend(main);
    document.body.prepend(header);
  } else if (!visibleHeader && document.body.contains(header)) {
    header.remove();
    main.remove();
    footer.remove();
  }
};

const showViews = () => {
  const currentPath = window.location.pathname;
  const currentPage = views[currentPath] || views[404];
  checkHeaderVisible(currentPath === BASE_PATH || currentPath === BASE_PATH + 'gifts');
  main.innerHTML = '';
  currentPage();
  btnUp();
  setActiveLink(currentPath);
};

const changeViewsUrl = (url) => {
  history.pushState(null, null, BASE_PATH + url);
  showViews();
};

const linksConfig = () => {
  const giftsButtons = [heroButton, ctaBtn];
  giftsButtons.forEach((button) => {
    if (button) {
      button.onclick = (event) => {
        event.preventDefault();
        const isHomePage = window.location.pathname === BASE_PATH;
        const buttonName = button === ctaBtn ? 'ctaBtn' : 'heroButton';
        scrollBrowserToTop(isHomePage, buttonName); 
        changeViewsUrl('gifts');
      };
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
};

window.onpopstate = showViews;
window.onresize = () => {
  burgerMenuResize();
  btnUp();
  resetSlider();
};
window.onscroll = checkTop;
window.addEventListener('DOMContentLoaded', () => {
  showViews();
  linksConfig();
}, { once: true });

export { changeViewsUrl };
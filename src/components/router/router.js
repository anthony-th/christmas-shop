import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';
import '@scss/_modifiers.scss';
import { header, nav, toggleMenu, burgerMenuResize } from '@lay/header';
import { setActiveLink } from '@lay/header/navigation';
import main from '@lay/main';
import homePage from '@views/home';
import giftsPage from '@views/gifts';
import notFound from '@views/not-found';
import { heroButton } from '@sections/hero';
import { logoContainer } from '@lay/header';
import { ctaBtn } from '@sections/cta';
import footer from '@lay/footer';
import scrollBrowserToTop from '@helpers/browser-scroll';
import { createButtonUp as btnUp, checkTop } from '@common/button-up';
import { resetSlider } from '@sections/slider';
import BASE_PATH from '@helpers/constants';

const views = {
  404: notFound,
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
    }
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
window.addEventListener(
  'DOMContentLoaded',
  () => {
    showViews();
    linksConfig();
  },
  { once: true }
);

export default changeViewsUrl;

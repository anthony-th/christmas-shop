import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';
import '@scss/_modifiers.scss';
import { header } from '@lay/header/Header';
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

const views = {
  404: page404,
  '/': homePage,
  '/gifts': giftsPage,
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
  checkHeaderVisible(currentPath === '/' || currentPath === '/gifts');
  main.innerHTML = '';
  currentPage();
  setActiveLink(currentPath);
};

const changeViewsUrl = (url) => {
  history.pushState(null, null, url);
  showViews();
};

const linksConfig = () => {
  const giftsButtons = [heroButton, ctaBtn];
  giftsButtons.forEach((button) => {
    if (button) {
      button.onclick = (event) => {
        event.preventDefault();
        const isHomePage = window.location.pathname === '/';
        const buttonName = button === ctaBtn ? 'ctaBtn' : 'heroButton';
        scrollBrowserToTop(isHomePage, buttonName); 
        changeViewsUrl('/gifts');
      };
    };
  });
  if (logoContainer) {
    logoContainer.onclick = (event) => {
      event.preventDefault();
      scrollBrowserToTop();
      changeViewsUrl('/');
    };
  }
};

window.onpopstate = showViews;
window.addEventListener('DOMContentLoaded', () => {
  showViews();
  linksConfig();
});

export { changeViewsUrl };
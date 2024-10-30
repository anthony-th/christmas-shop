import { header } from '@lay/header/Header';
import { setActiveLink } from '@lay/header/navigation/Navigation';
import { homePage } from '@page/Home';
import { giftsPage } from '@page/gifts';
import { page404 } from '@page/404/404';
import { heroButton } from '@sections/hero/Hero';
import { logoContainer } from '@lay/header/Header';

const views = {
  404: page404,
  '/': homePage,
  '/gifts': giftsPage,
};

const checkHeaderVisible = (visibleHeader) => {
  if (visibleHeader && !document.body.contains(header)) {
    document.body.prepend(header);
  } else if (!visibleHeader && document.body.contains(header)) {
    header.remove();
  }
};

const showViews = () => {
  const currentPath = window.location.pathname;
  const currentPage = views[currentPath] || views[404];
  document.body.innerHTML = '';
  checkHeaderVisible(currentPath === '/' || currentPath === '/gifts');
  currentPage();
  setActiveLink(currentPath);
};

const changeViewsUrl = (url) => {
  history.pushState(null, null, url);
  showViews();
};

const linksConfig = () => {
  if (heroButton) {
    heroButton.onclick = (event) => {
      event.preventDefault();
      changeViewsUrl('/gifts');
    };
  }
  if (logoContainer) {
    logoContainer.onclick = (event) => {
      event.preventDefault();
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
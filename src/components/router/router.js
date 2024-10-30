import { createNav } from '@lay/header/navigation/Navigation';
import { homePage } from '@page/Home';
import { giftsPage } from '@page/gifts';
import { page404 } from '../views/404/404';
import { header } from '@lay/header/Header';

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
}

const showViews = () => {
  const currentPath = window.location.pathname;
  const currentPage = views[currentPath] || views[404];
  checkHeaderVisible(currentPath === '/' || currentPath === '/gifts');
  currentPage();
}

const changeViewsUrl = (url) => {
  history.pushState(null, null, url);
  showViews();
}

const linksConfig = () => {
  const links = createNav();
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetURL = link.getAttribute('href');
      changeViewsUrl(targetURL);
    });
  });
}

window.onpopstate = showViews;
window.addEventListener('DOMContentLoaded', () => {
  showViews();
  linksConfig();
});

import { createNav } from '../layouts/header/navigation/Navigation';
import { homePage } from '@page/Home';
import { giftsPage } from '@page/gifts';

const views = {
  '/': homePage,
  '/gifts': giftsPage,
};

const showViews = () => {
  const currentPath = window.location.pathname;
  const currentPage = views[currentPath] || homePage;
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

window.addEventListener('popstate', showViews);
window.addEventListener('DOMContentLoaded', () => {
  showViews();
  linksConfig();
});

import { createElement } from '@common/CreateElement';
import { changeViewsUrl } from '@route/router';
import { scrollBrowserToTop } from '@helpers/BrowserScroll';
import { toggleMenu, nav } from '@lay/header/Header';
import { BASE_PATH } from '@helpers/Constants';

const linksData = [
  { textContent: 'gifts', url: 'gifts' },
  { textContent: 'about', url: '#about' },
  { textContent: 'best', url: '#best' },
  { textContent: 'contacts', url: '#contacts' },
];

const navLinks = linksData.map((link) => {
  const linkElement = createElement('a', ['header__nav-link', 'user-select-none'], link.textContent, { href: BASE_PATH + link.url });
  linkElement.onclick = (event) => clickLink(event, link);
  return linkElement;
});

const clickLink = (event, link) => {
  event.preventDefault();
  const isHomePage = window.location.pathname === BASE_PATH;
  const isGiftsPage = window.location.pathname === BASE_PATH + 'gifts';
  const linkText = link.textContent;
  const targetUrl = BASE_PATH + link.url;
  if (nav.classList.contains('menu-open')) {
    toggleMenu();
  }
  const anchorMove = (anchorUrl) => {
    history.pushState(null, null, anchorUrl);
    checkAnchorLink({ url: anchorUrl });
  };
  switch (linkText) {
    case 'gifts':
      if (isGiftsPage) {
        history.pushState(null, null, targetUrl);
      } else {
        changeViewsUrl('gifts');
        scrollBrowserToTop();
      }
      break;
    case 'contacts':
      if (isGiftsPage) {
        anchorMove(targetUrl); 
        history.pushState(null, null, BASE_PATH + 'gifts#contacts');            
      } else if (isHomePage) {
        anchorMove(targetUrl);
      }
      break;
    case 'about':
    case 'best':
      if (isHomePage) {
        anchorMove(targetUrl);
      } else if (isGiftsPage) {
        changeViewsUrl('');
        anchorMove(targetUrl);
      }
      break;
  }
};

const checkAnchorLink = (link) => {
  if (link.url.startsWith(BASE_PATH + '#')) {
    const urlWithSlash = link.url.slice((BASE_PATH + '#').length);
    if (window[urlWithSlash]) {
      window[urlWithSlash].scrollIntoView();
    }
  } else {
    setActiveLink(BASE_PATH + link.url);
  }
};

const createNav = () => {
  return navLinks.map((link) => {
    const listItem = createElement('li', ['header__nav-item']);
    listItem.append(link);
    return listItem;
  });
};

const setActiveLink = (currentUrl) => {
  navLinks.forEach((link) => {
    const linkUrl = link.getAttribute('href');
    const urlActive = linkUrl === currentUrl || (currentUrl.startsWith(BASE_PATH + 'gifts') && linkUrl === BASE_PATH + 'gifts');
    link.classList.toggle('link-active', urlActive);
  });
};

export { createNav, setActiveLink };

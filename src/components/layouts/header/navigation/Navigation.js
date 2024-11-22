import { createElement } from '@common/CreateElement';
import { changeViewsUrl } from '@route/router';
import { scrollBrowserToTop } from '@helpers/BrowserScroll';
import { toggleMenu } from '@lay/header/Header';

const linksData = [
  { textContent: 'gifts', url: '/gifts' },
  { textContent: 'about', url: '/#about' },
  { textContent: 'best', url: '/#best' },
  { textContent: 'contacts', url: '/#contacts' },
];

const navLinks = linksData.map((link) => {
  const linkElement = createElement('a', ['header__nav-link', 'user-select-none'], link.textContent, { href: `/christmas-shop` + link.url });
  linkElement.onclick = (event) => clickLink(event, link);
  return linkElement;
});

const clickLink = (event, link) => {
  event.preventDefault();
  const isHomePage = window.location.pathname === '/christmas-shop/';
  const isGiftsPage = window.location.pathname === '/christmas-shop/gifts';
  const linkText = link.textContent;
  const targetUrl = `/christmas-shop` + link.url;
  toggleMenu();
  const anchorMove = (anchorUrl) => {
    history.pushState(null, null, anchorUrl);
    checkAnchorLink({ url: anchorUrl });
  };
  switch (linkText) {
    case 'gifts':
      if (isGiftsPage) {
        history.pushState(null, null, targetUrl);
      } else {
        changeViewsUrl('/gifts');
        scrollBrowserToTop();
      }
      break;
    case 'contacts':
      if (isGiftsPage) {
        anchorMove(targetUrl); 
        history.pushState(null, null, '/christmas-shop/gifts#contacts');               
      } else if (isHomePage) {
        anchorMove(targetUrl);
      }
      break;
    case 'about':
    case 'best':
      if (isHomePage) {
        anchorMove(targetUrl);
      } else if (isGiftsPage) {
        changeViewsUrl('/');
        anchorMove(targetUrl);
      }
      break;
  }
};

const checkAnchorLink = (link) => {
  if (link.url.startsWith('/christmas-shop/#')) {
    const urlWithSlash = link.url.slice('/christmas-shop/#'.length);
    if (window[urlWithSlash]) {
      window[urlWithSlash].scrollIntoView();
    }
  } else {
    setActiveLink(`/christmas-shop` + link.url);
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
    const urlActive = linkUrl === currentUrl || (currentUrl.startsWith('/christmas-shop/gifts') && linkUrl === '/christmas-shop/gifts');
    link.classList.toggle('link-active', urlActive);
  });
};

export { createNav, setActiveLink };

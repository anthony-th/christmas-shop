import { createElement } from '@common/createElement';
import { changeViewsUrl } from '@route/router';

const linksData = [
  { textContent: 'gifts', url: '/gifts' },
  { textContent: 'about', url: '/#about' },
  { textContent: 'best', url: '/#best' },
  { textContent: 'contacts', url: '/#contacts' },
];

const navLinks = linksData.map((link) => {
  const linkElement = createElement('a', ['header__nav-link', 'user-select-none'], link.textContent, { href: link.url });
  linkElement.onclick = (event) => clickLink(event, link);
  return linkElement;
});

const clickLink = (event, link) => {
  event.preventDefault();
  const isHomePage = window.location.pathname === '/';
  const isGiftsPage = window.location.pathname === '/gifts';
  const linkText = link.textContent;
  const targetUrl = link.url;
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
      }
      break;
    case 'contacts':
      if (isGiftsPage) {
        anchorMove(targetUrl); 
        history.pushState(null, null, '/gifts#contacts');               
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
  if (link.url.startsWith('/#')) {
    const urlWithSlash = link.url.slice(2);
    if (window[urlWithSlash]) {
      window[urlWithSlash].scrollIntoView();
    }
  } else {
    setActiveLink(link.url);
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
    const urlActive = linkUrl === currentUrl || (currentUrl.startsWith('/gifts') && linkUrl === '/gifts');
    link.classList.toggle('link-active', urlActive);
  });
};

export { createNav, setActiveLink };

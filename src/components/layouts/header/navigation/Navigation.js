import { createElement } from '@com/common/createElement';
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
  let targetUrl = link.url;
  if (linkText === 'gifts' && isGiftsPage) {
    history.pushState(null, null, targetUrl);
    return;
  }
  const anchorMove = (anchorUrl) => {
    history.pushState(null, null, anchorUrl);
    checkAnchorLink({ url: anchorUrl });
  };
  if (isHomePage) {
    if (linkText === 'about' || linkText === 'best' || linkText === 'contacts') {
      anchorMove(targetUrl);
    } else if (linkText === 'gifts') {
      changeViewsUrl('/gifts');
    }
    return;
  }
  if (isGiftsPage) {
    if (linkText === 'contacts') {
      anchorMove('/gifts#contacts');
    } else if (linkText === 'about' || linkText === 'best') {
      changeViewsUrl('/');
      anchorMove(targetUrl);
    }
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

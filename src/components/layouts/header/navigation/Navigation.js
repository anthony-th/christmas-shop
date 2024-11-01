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
  changeViewsUrl(link.url);
  checkAnchorLink(link);
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
    const listItem = createElement('li', ['header__nav-item', 'cursor-pointer']);
    listItem.append(link);
    return listItem;
  });
};

const setActiveLink = (currentUrl) => {
  navLinks.forEach(anchor => {
    anchor.classList.toggle('link-active', anchor.getAttribute('href') === currentUrl);
  });
};

export { createNav, setActiveLink };

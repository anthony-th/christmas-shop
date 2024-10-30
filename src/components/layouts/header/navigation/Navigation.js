import { createElement } from '@com/common/createElement';
import { changeViewsUrl } from '@route/router';

const linksData = [
  { textContent: 'gifts', url: '/gifts' },
  { textContent: 'about', url: '#about' },
  { textContent: 'best', url: '#best' },
  { textContent: 'contacts', url: '#contacts' },
];

const navLinks = linksData.map((link) => {
  const anchor = createElement('a', ['header__nav-link', 'user-select-none'], link.textContent, { href: link.url });
  anchor.onclick = (event) => {
    event.preventDefault();
    changeViewsUrl(link.url);
    setActiveLink(link.url);
  };
  return anchor;
});

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

export { createNav, setActiveLink, navLinks };

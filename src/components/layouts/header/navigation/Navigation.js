import { createElement } from '@com/common/createElement';

const links = [
  { textContent: 'gifts', url: '/gifts' },
  { textContent: 'about', url: '#about' },
  { textContent: 'best', url: '#best' },
  { textContent: 'contacts', url: '#contacts' },
];

const createNav = () => {
  return links.map((link) => {
    const anchor = createElement('a', ['header__nav-link', 'user-select-none']);
    if (link.url === window.location.pathname) {
      anchor.classList.add('link-active');
    }
    anchor.textContent = link.textContent;
    anchor.href = link.url;
    return anchor;
  });
};

export { createNav };
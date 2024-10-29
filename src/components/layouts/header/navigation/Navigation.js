import { createElement } from '@com/common/createElement';

const links = [
  { textContent: 'gifts', url: '/gifts' },
  { textContent: 'about', url: '#' },
  { textContent: 'best', url: '#' },
  { textContent: 'contacts', url: '#' },
];

const createNav = () => {
  return links.map((link) => {
    const anchor = createElement('a', ['header__nav-link', 'user-select-none']);
    anchor.textContent = link.textContent;
    anchor.href = link.url;
    return anchor;
  });
};

export { createNav };
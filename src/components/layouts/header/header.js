import './header.scss';
import createElement from '@helpers/create-element';
import createSvg from '@helpers/create-svg';
import logoSvg from '@icons/logo.svg?raw';
import { createNav } from '@lay/header/navigation';

const header = createElement('header', ['header']);
const logoContainer = createElement('a', ['header__logo-container'], '', { href: './' });
const logoIcon = createSvg(logoSvg, ['header__logo-icon'], {
  'aria-hidden': 'true',
  focusable: 'false',
});
const logoTitle = createElement('h3', ['header__logo-title', 'user-select-none'], 'the gifts');
const nav = createElement('nav', ['header__nav']);
const burgerMenu = createElement('button', ['burger-menu', 'cursor-pointer'], '', {
  'aria-label': 'Open menu',
});

const createNavList = () => {
  const navList = createElement('ul', ['header__nav-list']);
  createNav().forEach((listItem) => {
    navList.append(listItem);
  });
  return navList;
};

const toggleMenu = () => {
  nav.classList.toggle('menu-open');
  burgerMenu.classList.toggle('burger-menu-active');
  document.body.classList.toggle('overflow-hidden');
};

burgerMenu.onclick = () => {
  toggleMenu();
};

const burgerMenuResize = () => {
  if (window.innerWidth > 768 && nav.classList.contains('menu-open')) {
    toggleMenu();
  }
};

logoContainer.append(logoIcon, logoTitle);
nav.append(createNavList());
header.append(logoContainer, nav, burgerMenu);
export { header, logoContainer, toggleMenu, burgerMenu, nav, burgerMenuResize };

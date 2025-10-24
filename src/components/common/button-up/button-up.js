import './button-up.scss';
import '@scss/_modifiers.scss';
import scrollBrowserToTop from '@helpers/browser-scroll';
import BASE_PATH from '@helpers/constants';
import createElement from '@helpers/create-element';
import createSvg from '@helpers/create-svg';
import arrowUpSvg from '@icons/arrow-up.svg?raw';

let btnAdd = false;
const buttonUp = createElement('button', ['button-up', 'cursor-pointer', 'display-none'], '', {
  'aria-label': 'Scroll page to top',
});
const svg = createSvg(arrowUpSvg, ['icon-up'], {
  'aria-hidden': 'true',
  focusable: 'false',
});
buttonUp.append(svg);
buttonUp.onclick = () => {
  scrollBrowserToTop();
  history.pushState(null, null, BASE_PATH + 'gifts');
};

const createButtonUp = () => {
  const isGiftsPage = window.location.pathname.includes('gifts');
  if (isGiftsPage && window.innerWidth <= 768) {
    if (!btnAdd) {
      document.body.append(buttonUp);
      btnAdd = true;
    }
  } else {
    if (btnAdd) {
      btnAdd = false;
      buttonUp.remove();
    }
  }
};

const checkTop = () => {
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
    buttonUp.className = 'button-up cursor-pointer';
  } else {
    buttonUp.className = 'button-up cursor-pointer display-none';
  }
};

createButtonUp();

export { createButtonUp, checkTop };

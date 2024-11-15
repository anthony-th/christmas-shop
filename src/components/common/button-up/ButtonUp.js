import './button-up.scss';
import '@scss/_modifiers.scss';
import { createElement } from '@common/CreateElement';
import { scrollBrowserToTop } from '@helpers/BrowserScroll';

let btnAdd = false;
const buttonUp = createElement('button', ['button-up', 'cursor-pointer', 'display-none'], '', { 'aria-label': 'Scroll page to top' });
const svg = createElement('svg', ['icon-up'], `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 5V19" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 11L12 5" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 11L12 5" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, {}, true);
buttonUp.append(svg);
buttonUp.onclick = scrollBrowserToTop;

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
}

const checkTop = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    buttonUp.className = 'button-up cursor-pointer';
  } else {
    buttonUp.className = 'button-up cursor-pointer display-none';
  }
}

createButtonUp();

export { createButtonUp, checkTop };
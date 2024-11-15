import './button-up.scss';
import { createElement } from '@common/CreateElement';

const buttonUp = createElement('button', ['button-up', 'cursor-pointer'], '', { 'aria-label': 'Scroll page to top' });
let btnAdd = false;

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

createButtonUp();

export { createButtonUp };
import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';
import { header } from '@lay/header/Header';
import { main } from '@lay/main/Main';

const homePage = () => {
  document.body.innerHTML = '';
  document.body.append(header, main);
}

export { homePage };
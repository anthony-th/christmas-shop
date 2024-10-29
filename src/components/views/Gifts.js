import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';
import { header } from '@lay/header/Header';

const giftsPage = () => {
  document.body.innerHTML = '';
  document.title = "Gifts";
  document.body.append(header);
}

export { giftsPage };

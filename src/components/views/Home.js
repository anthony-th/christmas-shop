import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';
import '@scss/_modifiers.scss';
import { main } from '@lay/main/Main';

const homePage = () => {
  document.title = "Christmas-shop";
  document.body.append(main);
}

export { homePage };
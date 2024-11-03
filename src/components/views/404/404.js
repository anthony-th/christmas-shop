import '@scss/_typography.scss';
import '@scss/_global.scss';
import './404.scss';
import { createElement } from '@com/common/createElement';
import { main } from '@lay/main/Main';
import { footer } from '@lay/footer/Footer';

const page404 = () => {
  document.title = "404";
  main.innerHTML = '';
  footer.innerHTML = '';
  const title = createElement('h2', ['page-404__title'], '404');
  const subTitle = createElement('h3', ['page-404__subtitle'], 'Page not found');
  const homeLink = createElement('a', ['page-404__link', 'cursor-pointer'], 'HOME', { href: '/' });

  main.className = 'main main-404';
  document.body.className = 'page-404';
  
  main.append(title, subTitle, homeLink);
  document.body.append(main);
};


export { page404 };
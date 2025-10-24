import '@scss/_typography.scss';
import '@scss/_global.scss';
import './not-found.scss';
import { createElement } from '@common/createElement';
import main from '@lay/main';
import changeViewsUrl from '@route';

const notFound = () => {
  document.title = "404";
  main.innerHTML = '';
  const title = createElement('h2', ['page-404__title'], '404');
  const subTitle = createElement('h3', ['page-404__subtitle'], 'Page not found');
  const homeLink = createElement('button', ['page-404__link', 'cursor-pointer'], 'HOME');
  const notFoundSection = createElement('section', ['page-404']);
  const notfoundContainer = createElement('div', ['page-404__container']);

  homeLink.onclick = (event) => {
    event.preventDefault();
    changeViewsUrl('');
  };

  notfoundContainer.append(title, subTitle, homeLink);
  notFoundSection.append(notfoundContainer);
  main.append(notFoundSection);
  document.body.append(main);
};


export default notFound;
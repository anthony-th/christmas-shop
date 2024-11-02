import './Best.scss';
import { createElement } from '@com/common/createElement';

const bestSection = createElement('section', ['section', 'best'],'', { id: 'best' });
const bestContainer = createElement('div', ['best__container']);
const bestTextContainer = createElement('div', ['best__text-container']);
const bestCaption = createElement('h3', ['best__caption'], 'Best Gifts');
const bestTitle = createElement('h2', ['best__title'], 'especially for you');
const cardsContainer = createElement('div', ['best__cards-container']);

bestTextContainer.append(bestCaption, bestTitle);
bestContainer.append(bestTextContainer, cardsContainer);
bestSection.append(bestContainer);
export { bestSection };
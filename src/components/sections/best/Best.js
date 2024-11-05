import './best.scss';
import { createElement } from '@common/CreateElement';
import { createCard } from '@common/create-card/CreateCard';
import dataJson from '@data/gifts.json';

const bestSection = createElement('section', ['section', 'best'], '', { id: 'best' });
const bestContainer = createElement('div', ['best__container']);
const bestTextContainer = createElement('div', ['best__text-container']);
const bestCaption = createElement('h3', ['best__caption'], 'Best Gifts');
const bestTitle = createElement('h3', ['best__title'], 'especially for you');
const cardsContainer = createElement('div', ['cards-container']);

const firstWeekCard = [dataJson[1], dataJson[15], dataJson[3], dataJson[27]];

cardsContainer.append(...firstWeekCard.map(createCard));
bestTextContainer.append(bestCaption, bestTitle);
bestContainer.append(bestTextContainer, cardsContainer);
bestSection.append(bestContainer);

export { bestSection };
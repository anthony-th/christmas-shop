import './best.scss';
import { createElement } from '@common/CreateElement';
import { createCard } from '@common/create-card/CreateCard';
import dataJson from '@data/gifts.json';

const bestSection = createElement('section', ['section', 'best'], '', { id: 'best' });
const bestContainer = createElement('div', ['best__container']);
const bestTextContainer = createElement('div', ['best__text-container']);
const bestCaption = createElement('h3', ['best__caption'], 'Best Gifts');
const bestTitle = createElement('h3', ['best__title'], 'especially for you');
const cardsContainer = createElement('ul', ['cards-container']);

const getRandomCards = (array, quantity) => {
  return Array.from({ length: quantity }, () => array[Math.floor(Math.random() * array.length)]);
}

const randomCard = getRandomCards(dataJson, 4);

cardsContainer.append(...randomCard.map(item => createCard(item)));
bestTextContainer.append(bestCaption, bestTitle);
bestContainer.append(bestTextContainer, cardsContainer);
bestSection.append(bestContainer);

export { bestSection };
import './Best.scss';
import { createElement } from '@com/common/createElement';
import dataJson from '@data/gifts.json';

const bestSection = createElement('section', ['section', 'best'], '', { id: 'best' });
const bestContainer = createElement('div', ['best__container']);
const bestTextContainer = createElement('div', ['best__text-container']);
const bestCaption = createElement('h3', ['best__caption'], 'Best Gifts');
const bestTitle = createElement('h2', ['best__title'], 'especially for you');
const cardsContainer = createElement('div', ['best__cards-container']);

const firstWeekCard = [dataJson[1], dataJson[15], dataJson[3], dataJson[27]];

const createCard = ({ category, name }) => {
  const card = createElement('div', ['card', 'cursor-pointer']);
  const cardImageContainer = createElement('div', ['card__image-container']);
  const cardTextContainer = createElement('div', ['card__text-container']);
  const categoryFileName = category.toLowerCase().replace(/\s+/g, '-');
  const cardImage = createElement('img', ['card__image'], '', {
    src: `../../assets/images/gift-${categoryFileName}.webp`,
    alt: name
  });
  const cardSubtitleClass = `card__subtitle--${category.toLowerCase().replace(/\s+/g, '-')}`;
  const cardSubtitle = createElement('h4', ['card__subtitle', cardSubtitleClass], category);
  const cardTitle = createElement('h3', ['card__title'], name);
  cardTextContainer.append(cardSubtitle, cardTitle);
  cardImageContainer.append(cardImage);
  card.append(cardImageContainer, cardTextContainer); 
  return card;
};

cardsContainer.append(...firstWeekCard.map(createCard));
bestTextContainer.append(bestCaption, bestTitle);
bestContainer.append(bestTextContainer, cardsContainer);
bestSection.append(bestContainer);

export { bestSection };
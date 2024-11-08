import './create-card.scss';
import { createElement } from '@common/CreateElement';
import giftHarmony from '@img/gift-for-harmony.webp';
import giftHealth from '@img/gift-for-health.webp';
import giftWork from '@img/gift-for-work.webp';

const images = {
  'for-harmony': giftHarmony,
  'for-health': giftHealth,
  'for-work': giftWork,
}

const createCard = ({ category, name }) => {
  const card = createElement('div', ['card', 'cursor-pointer']);
  const cardImageContainer = createElement('div', ['card__image-container']);
  const cardTextContainer = createElement('div', ['card__text-container']);
  const categoryFileName = category.toLowerCase().replace(/\s+/g, '-');
  const cardImage = createElement('img', ['card__image'], '', {
    src: images[categoryFileName],
    alt: name,
  });
  const cardSubtitleClass = `card__subtitle--${category.toLowerCase().replace(/\s+/g, '-')}`;
  const cardSubtitle = createElement('h4', ['card__subtitle', cardSubtitleClass], category);
  const cardTitle = createElement('h4', ['card__title'], name);
  
  cardTextContainer.append(cardSubtitle, cardTitle);
  cardImageContainer.append(cardImage);
  card.append(cardImageContainer, cardTextContainer);
  
  return card;
};

export { createCard };

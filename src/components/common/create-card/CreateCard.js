import './create-card.scss';
import { createElement } from '@common/CreateElement';
import giftHarmony from '@img/gift-for-harmony.avif';
import giftHealth from '@img/gift-for-health.avif';
import giftWork from '@img/gift-for-work.avif';

const images = {
  'for-harmony': giftHarmony,
  'for-health': giftHealth,
  'for-work': giftWork,
}

const createCard = ({ category, name }) => {
  const cardItem = createElement('li', ['card-item', 'cursor-pointer']);
  const card = createElement('article', ['card', 'cursor-pointer']);
  const cardImageContainer = createElement('div', ['card__image-container']);
  const cardTextContainer = createElement('div', ['card__text-container']);
  const categoryImg = category.toLowerCase().replace(/\s+/g, '-');
  const cardImage = createElement('img', ['card__image'], '', {
    src: images[categoryImg],
    alt: name,
  });
  const subtitleClass = `card__subtitle--${category.toLowerCase().replace(/\s+/g, '-')}`;
  const cardSubtitle = createElement('h4', ['card__subtitle', subtitleClass], category);
  const cardTitle = createElement('h3', ['card__title'], name);
  
  cardTextContainer.append(cardSubtitle, cardTitle);
  cardImageContainer.append(cardImage);

  card.append(cardImageContainer, cardTextContainer);
  cardItem.append(card);
  
  return cardItem;
};

export { createCard };

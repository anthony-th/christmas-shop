import './create-card.scss';
import { createElement } from '@common/CreateElement';
import { createAndOpenModal as OpenModal } from '@common/open-modal/OpenModal';
import giftHarmony from '@img/gift-for-harmony.avif';
import giftHealth from '@img/gift-for-health.avif';
import giftWork from '@img/gift-for-work.avif';

const images = {
  'for-harmony': giftHarmony,
  'for-health': giftHealth,
  'for-work': giftWork,
}

const createCard = (item, headingLevels = { subtitle: 'h3', title: 'h4' }) => {
  const cardItem = createElement('li', ['card-item', 'cursor-pointer']);
  const card = createElement('article', ['card', 'cursor-pointer']);
  const cardBtn = createElement('button', ['card__button', 'cursor-pointer'], '', { 'aria-label': 'Open card' });
  const cardImageContainer = createElement('div', ['card__image-container']);
  const cardTextContainer = createElement('div', ['card__text-container']);
  const categoryImg = item.category.toLowerCase().replace(/\s+/g, '-');
  const cardImage = createElement('img', ['card__image'], '', {
    src: images[categoryImg],
    alt: item.name,
  });
  const subtitleClass = `card__subtitle--${item.category.toLowerCase().replace(/\s+/g, '-')}`;
  const cardSubtitle = createElement(headingLevels.subtitle, ['card__subtitle', subtitleClass], item.category);
  const cardTitle = createElement(headingLevels.title, ['card__title'], item.name);
  
  cardTextContainer.append(cardSubtitle, cardTitle);
  cardImageContainer.append(cardImage);
  card.append(cardImageContainer, cardTextContainer, cardBtn);
  cardItem.append(card);
  
  cardBtn.onclick = () => OpenModal(item, images[categoryImg]);

  return cardItem;
};

export { createCard };

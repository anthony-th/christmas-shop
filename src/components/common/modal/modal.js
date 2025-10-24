import './modal.scss';
import createElement from '@helpers/create-element';
import createSvg from '@helpers/create-svg';
import starSvg from '@icons/star.svg?raw';
import closeSvg from '@icons/close.svg?raw';

const createStars = (count) => {
  return Array.from({ length: 5 }, (_, index) => {
    const isActive = index < count;
    const classes = ['superpowers__star'];
    if (isActive) {
      classes.push('star-active');
    }
    return createSvg(starSvg, classes, { 'aria-hidden': 'true', 'focusable': 'false' });
  });
};

const createSuperpower = (titleText, paragraphText, starsCount) => {
  const superpowerContainer = createElement('div', ['superpowers__information']);
  const title = createElement('p', ['superpowers__title'], titleText);
  const paragraph = createElement('p', ['superpowers__text'], paragraphText);
  const starsContainer = createElement('div', ['superpowers__stars']);
  createStars(starsCount).forEach((star) => starsContainer.append(star));
  superpowerContainer.append(title, paragraph, starsContainer);
  return superpowerContainer;
};

const toggleActiveClass = (modal, shadow) => {
  modal.classList.toggle('modal-active');
  shadow.classList.toggle('modal-active');
  document.body.classList.toggle('overflow-hidden');
}

const closeModal = (modal, shadow) => {
  toggleActiveClass(modal, shadow);
  modal.remove();
  shadow.remove();
}

const createModal = (item, image) => {
  const shadow = createElement('div', ['shadow']);
  const modal = createElement('div', ['modal']);
  const imageContainer = createElement('div', ['modal__image-container']);
  const cardImage = createElement('img', ['modal__image'], '', {
    src: image,
    alt: item.name,
  });
  const descriptionContainer = createElement('div', ['modal__description-container']);
  const textContainer = createElement('div', ['modal__text-container']);
  const categoryClass = `modal__subtitle--${item.category.toLowerCase().replace(/\s+/g, '-')}`;
  const category = createElement('h4', ['modal__subtitle', categoryClass], item.category);
  const title = createElement('h3', ['modal__title'], item.name);
  const paragraph = createElement('p', ['modal__paragraph'], item.description);
  const superpowers = createElement('div', ['modal__text-container']);
  const superpowersTitle = createElement('h4', ['modal__subtitle'], 'Adds superpowers to:');
  const superpowersContainer = createElement('div', ['superpowers-container']);

  superpowersContainer.append(
    createSuperpower('Live', item.superpowers.live, Math.round(item.superpowers.live / 100)),
    createSuperpower('Create', item.superpowers.create, Math.round(item.superpowers.create / 100)),
    createSuperpower('Love', item.superpowers.love, Math.round(item.superpowers.love / 100)),
    createSuperpower('Dream', item.superpowers.dream, Math.round(item.superpowers.dream / 100))
  );

  const cancelBtn = createElement('button', ['modal__cancel', 'cursor-pointer'], '', { 'aria-label': 'Close modal' });
  const closeIcon = createSvg(closeSvg, ['modal__cancel-icon'], { 'aria-hidden': 'true', 'focusable': 'false' });
  cancelBtn.append(closeIcon);

  imageContainer.append(cardImage);
  textContainer.append(category, title, paragraph);
  superpowers.append(superpowersTitle, superpowersContainer);
  descriptionContainer.append(textContainer, superpowers);
  modal.append(imageContainer, descriptionContainer, cancelBtn);
  document.body.append(modal, shadow);

  requestAnimationFrame(() => toggleActiveClass(modal, shadow));
  cancelBtn.onclick = () => closeModal(modal, shadow);
  shadow.onclick = () => closeModal(modal, shadow);
}

export default createModal;

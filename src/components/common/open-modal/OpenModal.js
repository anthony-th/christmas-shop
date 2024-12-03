import './open-modal.scss';
import { createElement } from '@common/CreateElement';

const svgStar = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_32048_58)">
    <path d="M12.1959 9.88162L11.6482 9.56542L13.1158 9.17219L12.8732 8.26704L10.5005 8.90278L9.38146 8.25667C9.39689 8.17336 9.40538 8.08765 9.40538 7.99997C9.40538 7.91229 9.39692 7.82655 9.38146 7.74327L10.5005 7.09716L12.8732 7.7329L13.1158 6.82775L11.6482 6.43452L12.1959 6.11831L14.546 5.97725L14.8921 4.02063L13.0246 3.34203L11.7274 5.30677L11.1797 5.62297L11.5729 4.15545L10.6678 3.91293L10.032 6.28561L8.91226 6.93211C8.78247 6.82103 8.63242 6.73313 8.4683 6.67494V5.3828L10.2052 3.64586L9.5426 2.98325L8.46827 4.05755V3.42515L9.51792 1.32584L7.99976 0L6.48157 1.3259L7.53122 3.42521V4.05761L6.45689 2.98332L5.79429 3.64592L7.53119 5.38286V6.675C7.36708 6.73319 7.21702 6.82109 7.08724 6.93217L5.96746 6.28568L5.33171 3.91299L4.42656 4.15551L4.81979 5.62304L4.27213 5.30684L2.9749 3.34209L1.10742 4.02069L1.45349 5.97731L3.80362 6.11838L4.35128 6.43458L2.88375 6.82781L3.1263 7.73296L5.49898 7.09722L6.61807 7.74333C6.60264 7.82664 6.59414 7.91235 6.59414 8.00003C6.59414 8.08771 6.60261 8.17345 6.61807 8.25673L5.49898 8.90285L3.1263 8.2671L2.88375 9.17226L4.35128 9.56548L3.80362 9.88169L1.45349 10.0227L1.10742 11.9793L2.97493 12.6579L4.27216 10.6932L4.81985 10.377L4.42662 11.8445L5.33177 12.087L5.96752 9.71435L7.0873 9.06786C7.21708 9.17894 7.36714 9.26684 7.53125 9.32503V10.6172L5.79435 12.3541L6.45696 13.0167L7.53129 11.9424V12.5748L6.48163 14.6741L7.99983 16L9.51802 14.6741L8.46837 12.5748V11.9424L9.5427 13.0167L10.2053 12.3541L8.4684 10.6172V9.32503C8.63251 9.26684 8.78257 9.17894 8.91235 9.06786L10.0321 9.71435L10.6679 12.087L11.573 11.8445L11.1798 10.377L11.7275 10.6932L13.0247 12.6579L14.8922 11.9793L14.5462 10.0227L12.1959 9.88162Z" fill="#FF4646" fill-opacity="0.1"/>
  </g>
  <defs>
    <clipPath id="clip0_32048_58">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

const closeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const createStars = (count) => {
  return Array.from({ length: 5 }, (_, index) => {
    const isActive = index < count;
    const classes = ['superpowers__star'];
    if (isActive) {
      classes.push('star-active');
    }
    return createElement('svg', classes, svgStar, {}, true);
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

const createAndOpenModal = (item, image) => {
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
  cancelBtn.append(createElement('svg', ['modal__cancel-icon'], closeSvg, {}, true));

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

export { createAndOpenModal };

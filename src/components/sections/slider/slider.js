import './slider.scss';
import createElement from '@helpers/create-element';
import createSvg from '@helpers/create-svg';
import arrowLeftSvg from '@icons/arrow-left.svg?raw';
import arrowRightSvg from '@icons/arrow-right.svg?raw';
import snowman from '@img/snowman.avif';
import christmasTrees from '@img/christmas-trees.avif';
import christmasTreeBall from '@img/christmas-tree-ball.avif';
import fairytaleHouse from '@img/fairytale-house.avif';

const sliderSection = createElement('section', ['section', 'slider']);
const sliderContainer = createElement('div', ['slider__container']);
const sliderTextContainer = createElement('div', ['slider__text-container']);
const sliderCaption = createElement('h3', ['slider__caption'], 'Become Happier!');
const sliderTitle = createElement('h2', ['slider__title'], 'in the new 2025');
const sliderWrapper = createElement('div', ['slider__wrapper']);
const sliderTrack = createElement('div', ['slider__track']);
const sliderNavigation = createElement('div', ['slider__navigation']);

const createButtons = (iconSvg, classes, iconClasses, isDisabled = false, options = {}) => {
  const buttonOptions = { ...options };
  if (isDisabled) buttonOptions.disabled = '';
  const button = createElement('button', classes, '', buttonOptions);
  const icon = createSvg(iconSvg, iconClasses, { 'aria-hidden': 'true', focusable: 'false' });
  button.append(icon);
  return button;
};

const leftBtn = createButtons(
  arrowLeftSvg,
  ['slider__button', 'cursor-pointer'],
  ['slider__icon'],
  true,
  { 'aria-label': 'Prev slide' }
);

const rightBtn = createButtons(
  arrowRightSvg,
  ['slider__button', 'cursor-pointer'],
  ['slider__icon'],
  false,
  { 'aria-label': 'Next slide' }
);

const texts = ['Live', 'create', 'Love', 'dream'];
const imageSrc = [snowman, christmasTrees, christmasTreeBall, fairytaleHouse];
let currentSlide = 0;

const createItems = (texts, imageSrc) => {
  texts.forEach((text, index) => {
    const sliderElement = createElement('figure', ['slider-item']);
    const sliderImg = createElement('img', ['slider__image'], '', {
      src: imageSrc[index],
      alt: 'slider image',
    });
    const sliderText = createElement('figcaption', ['slider__text'], text);
    sliderElement.append(sliderImg, sliderText);
    sliderTrack.append(sliderElement);
  });
};

const updateState = () => {
  const isMobile = window.innerWidth < 769;
  const maxMoves = isMobile ? 6 : 3;
  const moveDistance = (sliderTrack.scrollWidth - sliderWrapper.offsetWidth) / maxMoves;
  const btnDistance = -(currentSlide * moveDistance);
  sliderTrack.style.transform = `translateX(${btnDistance}px)`;
  leftBtn.disabled = currentSlide === 0;
  rightBtn.disabled = currentSlide === maxMoves;
};

const slideDirection = (direction) => {
  const isMobile = window.innerWidth < 769;
  const maxMoves = isMobile ? 6 : 3;
  if (
    (direction === 'left' && currentSlide > 0) ||
    (direction === 'right' && currentSlide < maxMoves)
  ) {
    currentSlide += direction === 'left' ? -1 : 1;
  }
  updateState();
};

const resetSlider = () => {
  if (currentSlide !== 0) {
    currentSlide = 0;
    updateState();
  }
};

rightBtn.onclick = () => slideDirection('right');
leftBtn.onclick = () => slideDirection('left');
createItems(texts, imageSrc);
updateState();

sliderTextContainer.append(sliderCaption, sliderTitle);
sliderNavigation.append(leftBtn, rightBtn);
sliderWrapper.append(sliderTrack);
sliderContainer.append(sliderTextContainer, sliderWrapper, sliderNavigation);
sliderSection.append(sliderContainer);
export { sliderSection, resetSlider };

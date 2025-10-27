import './slider.scss';
import createElement from '@helpers/create-element';
import createSvg from '@helpers/create-svg';
import arrowLeftSvg from '@icons/arrow-left.svg?raw';
import arrowRightSvg from '@icons/arrow-right.svg?raw';
import christmasTreeBall from '@img/christmas-tree-ball.avif';
import christmasTrees from '@img/christmas-trees.avif';
import fairytaleHouse from '@img/fairytale-house.avif';
import snowman from '@img/snowman.avif';

const sliderSection = createElement('section', ['section', 'slider']);
const sliderContainer = createElement('div', ['slider__container']);
const sliderTextContainer = createElement('div', ['slider__text-container']);
const sliderCaption = createElement('h3', ['slider__caption'], 'Become Happier!');
const sliderTitle = createElement('h2', ['slider__title'], 'in the new 2025');
const sliderWrapper = createElement('div', ['slider__wrapper']);
const sliderTrack = createElement('div', ['slider__track']);
const sliderNavigation = createElement('div', ['slider__navigation']);

const createButton = (iconSvg, ariaLabel, isDisabled = false) => {
  const btn = createElement('button', ['slider__button', 'cursor-pointer'], '', {
    'aria-label': ariaLabel,
    disabled: isDisabled ? '' : null,
  });
  const icon = createSvg(iconSvg, ['slider__icon'], { 'aria-hidden': 'true', focusable: 'false' });
  btn.append(icon);
  return btn;
};

const leftBtn = createButton(arrowLeftSvg, 'Prev slide', true);
const rightBtn = createButton(arrowRightSvg, 'Next slide');

const texts = ['Live', 'create', 'Love', 'dream'];
const imageSrc = [snowman, christmasTrees, christmasTreeBall, fairytaleHouse];
let currentSlide = 0;

const getSliderConfig = () => {
  const isMobile = window.innerWidth < 769;
  return { maxMoves: isMobile ? 6 : 3 };
};

const updateButtonsState = () => {
  const { maxMoves } = getSliderConfig();
  leftBtn.disabled = currentSlide === 0;
  rightBtn.disabled = currentSlide === maxMoves;
};

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
  const { maxMoves } = getSliderConfig();
  const moveDistance = (sliderTrack.scrollWidth - sliderWrapper.offsetWidth) / maxMoves;
  const btnDistance = -(currentSlide * moveDistance);
  sliderTrack.style.transform = `translateX(${btnDistance}px)`;
  updateButtonsState();
};

const slideDirection = (direction) => {
  const { maxMoves } = getSliderConfig();
  if (
    (direction === 'left' && currentSlide > 0) ||
    (direction === 'right' && currentSlide < maxMoves)
  ) {
    currentSlide += direction === 'left' ? -1 : 1;
    updateState();
    disableSliderButtons();
    enableSliderButtons();
  }
};

const resetSlider = () => {
  if (currentSlide !== 0) {
    currentSlide = 0;
    updateState();
  }
};

const onTransitionEnd = () => {
  updateButtonsState();
  leftBtn.addEventListener('click', leftBtnClick);
  rightBtn.addEventListener('click', rightBtnClick);
  sliderTrack.removeEventListener('transitionend', onTransitionEnd);
};

const enableSliderButtons = () => {
  sliderTrack.addEventListener('transitionend', onTransitionEnd);
};

const disableSliderButtons = () => {
  leftBtn.disabled = true;
  rightBtn.disabled = true;
  leftBtn.removeEventListener('click', leftBtnClick);
  rightBtn.removeEventListener('click', rightBtnClick);
};

const rightBtnClick = () => slideDirection('right');
const leftBtnClick = () => slideDirection('left');

rightBtn.addEventListener('click', rightBtnClick);
leftBtn.addEventListener('click', leftBtnClick);

createItems(texts, imageSrc);
updateState();

sliderTextContainer.append(sliderCaption, sliderTitle);
sliderNavigation.append(leftBtn, rightBtn);
sliderWrapper.append(sliderTrack);
sliderContainer.append(sliderTextContainer, sliderWrapper, sliderNavigation);
sliderSection.append(sliderContainer);
export { sliderSection, resetSlider };

import './slider.scss';
import { createElement } from '@common/CreateElement';
import snowman from '@img/snowman.avif';
import christmasTrees from '@img/christmas-trees.avif';
import christmasTreeBall from '@img/christmas-tree-ball.avif';
import fairytaleHouse from '@img/fairytale-house.avif';

const sliderSection = createElement('section', ['section', 'slider']);
const sliderContainer = createElement('div', ['slider__container']);
const sliderTextContainer = createElement('div', ['slider__text-container']);
const sliderCaption = createElement('h3', ['slider__caption'], 'Become Happier!');
const sliderTitle = createElement('h2', ['slider__title'], 'in the new 2025');
const sliders = createElement('div', ['sliders']);
const sliderNavigation = createElement('div', ['slider__navigation']);

const createButtons = (classes, iconClasses, iconSvg, isDisabled = false, options = {}) => {
  const buttonOptions = { ...options };
  if (isDisabled) buttonOptions.disabled = '';
  const button = createElement('button', classes, '', buttonOptions);
  const icon = createElement('svg', iconClasses, iconSvg, {}, true);
  button.append(icon);
  return button;
};

const leftBtn = createButtons (
  ['slider__button', 'cursor-pointer'],
  ['slider__icon'],
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`,
  true,
  { 'aria-label': 'Prev slide' }
);

const rightBtn = createButtons (
  ['slider__button', 'cursor-pointer'],
  ['slider__icon'],
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`,
   false,
   { 'aria-label': 'Next slide' }
);

const texts = ['Live', 'create', 'Love', 'dream'];
const totalSlides = texts.length;
const imageSrc = [snowman, christmasTrees, christmasTreeBall, fairytaleHouse];
let currentSlide = 0;

const createItems = (texts, imageSrc) => {
  texts.forEach((text, index) => {
    const sliderElement =  createElement('figure', ['slider-item']);
    const sliderImg = createElement('img', ['slider__image'], '', { src: imageSrc[index], alt: 'slider image' });
    const sliderText = createElement('figcaption', ['slider__text'], text);
    sliderElement.append(sliderImg, sliderText);
    sliders.append(sliderElement);
  });
};

const slidePosition = () => {
  const offsetWidth = -currentSlide * 240;
  sliders.style.transform = `translateX(${offsetWidth}px)`;
};

const buttonsState = () => {
  leftBtn.disabled = currentSlide === 0;
  rightBtn.disabled = currentSlide === totalSlides - 1;
}

const slideDirection = (direction) => {
  if ((direction === 'left' && currentSlide > 0) || (direction === 'right' && currentSlide < totalSlides - 1)) {
    currentSlide += (direction === 'left' ? -1 : 1);
  }
  slidePosition();
  buttonsState();
}

rightBtn.onclick = () => slideDirection('right');
leftBtn.onclick = () => slideDirection('left');
createItems(texts, imageSrc);
buttonsState();

sliderTextContainer.append(sliderCaption, sliderTitle);
sliderNavigation.append(leftBtn, rightBtn);
sliderContainer.append(sliderTextContainer, sliders, sliderNavigation);
sliderSection.append(sliderContainer);
export { sliderSection };
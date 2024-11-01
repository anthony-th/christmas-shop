import './Slider.scss';
import { createElement } from '@com/common/createElement';

const sliderSection = createElement('section', ['section', 'slider']);
const sliderContainer = createElement('div', ['slider__container']);
const sliderTextContainer = createElement('div', ['slider__text-container']);
const sliderCaption = createElement('h3', ['slider__caption'], 'Become Happier!');
const sliderTitle = createElement('h2', ['slider__title'], 'in the new 2025');
const sliders = createElement('div', ['slider__sliders']);
const sliderNavigation = createElement('div', ['slider__navigation']);
const leftSliderBtn = createElement('button', ['slider__button'], '', { disabled: true });
const leftIcon = createElement('svg', ['slider__icon', 'inactive-arrow'], `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, {}, true);
const rightSliderBtn = createElement('button', ['slider__button', 'cursor-pointer']);
const rightIcon = createElement('svg', ['slider__icon'], `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, {}, true);

sliderTextContainer.append(sliderCaption, sliderTitle);
leftSliderBtn.append(leftIcon);
rightSliderBtn.append(rightIcon);
sliderNavigation.append(leftSliderBtn, rightSliderBtn);
sliderContainer.append(sliderTextContainer, sliders, sliderNavigation);
sliderSection.append(sliderContainer);
export { sliderSection };
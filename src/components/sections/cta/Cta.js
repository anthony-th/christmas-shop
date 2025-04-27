import './cta.scss';
import { createElement } from '@common/CreateElement';
import { createTimer } from './timer/Timer';

const ctaSection = createElement('section', ['section', 'cta']);
const ctaContainer = createElement('div', ['cta__container']);
const contentContainer = createElement('div', ['cta__content']);
const ctaTitle = createElement('h2', ['cta__title'], 'Ready to start your journey to a better version of yourself?');
const ctaBtn = createElement('a', ['cta__btn', 'user-select-none'], 'Explore Magical Gifts', { href: '/gifts' });
const ctaTimerContainer = createElement('div', ['cta__timer-container']);
const ctaCaption = createElement('h3', ['cta__caption'], 'The New Year is Coming Soon...');
const timer = createTimer();

ctaTimerContainer.append(ctaCaption, timer);
contentContainer.append(ctaTitle, ctaBtn, ctaTimerContainer);
ctaContainer.append(contentContainer);
ctaSection.append(ctaContainer);

export { ctaSection, ctaBtn };
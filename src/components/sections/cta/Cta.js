import './Cta.scss';
import { createElement } from '@common/createElement';

const ctaSection = createElement('section', ['section', 'cta']);
const ctaContainer = createElement('div', ['cta__container']);
const contentContainer = createElement('div', ['cta__content']);
const ctaTitle = createElement('h2', ['cta__title'], 'Ready to start your journey to a better version of yourself?');
const ctaBtn = createElement('a', ['cta__btn', 'user-select-none'], 'Explore Magical Gifts', { href: '/gifts' });
const ctaTimerContainer = createElement('div', ['cta__timer-container']);
const ctaCaption = createElement('h3', ['cta__caption'], 'The New Year is Coming Soon...');

const createTimer = (days, hours, minutes, seconds) => {
  const timer = createElement('div', ['timer']);
  const createTimeContainer = (title, description) => {
    const container = createElement('div', ['timer__item']);
    const titleElement = createElement('span', ['timer__title'], title);
    const descriptionElement = createElement('span', ['timer__description'], description);
    container.append(titleElement, descriptionElement);
    return container;
  };
  const daysContainer = createTimeContainer(days, 'days');
  const hoursContainer = createTimeContainer(hours, 'hours');
  const minutesContainer = createTimeContainer(minutes, 'minutes');
  const secondsContainer = createTimeContainer(seconds, 'seconds');
  const separator1 = createElement('span', ['timer__separator']);
  const separator2 = createElement('span', ['timer__separator']);
  const separator3 = createElement('span', ['timer__separator']);
  timer.append(daysContainer, separator1, hoursContainer, separator2, minutesContainer, separator3, secondsContainer);
  return timer;
};

const timer = createTimer('47', '5', '34', '12');

ctaTimerContainer.append(ctaCaption, timer);
contentContainer.append(ctaTitle, ctaBtn, ctaTimerContainer);
ctaContainer.append(contentContainer);
ctaSection.append(ctaContainer);

export { ctaSection, ctaBtn };
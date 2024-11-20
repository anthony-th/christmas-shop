import { createElement } from '@common/CreateElement';

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
  timer.append(daysContainer, hoursContainer, minutesContainer, secondsContainer);
  return timer;
};

export { createTimer };
import { createElement } from '@common/CreateElement';

const createTimer = () => {
  const timer = createElement('div', ['timer']);
  const createTimerItem = (title, description) => {
    const timerItem = createElement('div', ['timer__item']);
    const timerTitle = createElement('span', ['timer__title'], title);
    const descriptionElement = createElement('span', ['timer__description'], description);
    timerItem.append(timerTitle, descriptionElement);
    return { timerItem, timerTitle };
  };
  
  const { timerItem: daysElement, timerTitle: daysTitle } = createTimerItem(0, 'days');
  const { timerItem: hoursElement, timerTitle: hoursTitle } = createTimerItem(0, 'hours');
  const { timerItem: minutesElement, timerTitle: minutesTitle } = createTimerItem(0, 'minutes');
  const { timerItem: secondsElement, timerTitle: secondsTitle } = createTimerItem(0, 'seconds');

  timer.append(daysElement, hoursElement, minutesElement, secondsElement);

  let startTime = 0;
  const updateTime = (time) => {
    if (time - startTime < 1000) {
      requestAnimationFrame(updateTime);
      return;
    }
    startTime = time;
    const currentDate = new Date();
    const newYear = new Date(Date.UTC(currentDate.getUTCFullYear() + 1, 0, 1));
    const remainingTime = newYear - currentDate;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    minutes = (minutes === 60) ? 0 : minutes;
    seconds = (seconds === 60) ? 0 : seconds;

    daysTitle.textContent = days;
    hoursTitle.textContent = hours;
    minutesTitle.textContent = minutes;
    secondsTitle.textContent = seconds;

    requestAnimationFrame(updateTime);
  };
  requestAnimationFrame(updateTime);
  return timer;
};

export { createTimer };
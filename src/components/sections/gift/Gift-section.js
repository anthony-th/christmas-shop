import './gift-section.scss';
import { createElement } from '@common/CreateElement';
import { createCard } from '@common/create-card/CreateCard';
import dataJson from '@data/gifts.json';

const giftSection = createElement('section', ['section', 'gift-section']);
const giftContainer = createElement('div', ['gift-container']);
const titleContainer = createElement('div', ['title-container']);
const giftTitle = createElement('h1', ['title', 'gift-title'], 'Achieve health, harmony, and inner strength');
const tabsContainer = createElement('ul', ['tabs-container']);
const cardsContainer = createElement('ul', ['cards-container']);

const categories = [
  { name: 'All', filter: 'all' },
  { name: 'for work', filter: 'work' },
  { name: 'for health', filter: 'health' },
  { name: 'for harmony', filter: 'harmony' }
];

let activeTab = null;
const firstWeekCard = [dataJson[1], dataJson[13], dataJson[0], dataJson[2], dataJson[12], dataJson[26], dataJson[14], dataJson[25], dataJson[15], dataJson[3], dataJson[24], dataJson[27]];

categories.forEach((category, index) => {
  const tabIetm = createElement('li', ['tabs-item']);
  const tabBtn = createElement('button', ['tabs-btn', 'user-select-none', 'cursor-pointer'], category.name);
  if (index === 0) {
    tabBtn.classList.add('active-tab');
    activeTab = tabBtn;
  }
  tabIetm.append(tabBtn);
  tabsContainer.append(tabIetm);
});

cardsContainer.append(...firstWeekCard.map(createCard));
titleContainer.append(giftTitle);
giftContainer.append(titleContainer);
giftSection.append(giftContainer, tabsContainer, cardsContainer);
export { giftSection };
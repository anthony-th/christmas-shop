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

const cardCategory = (filter) => {
  cardsContainer.innerHTML = '';
  const openCategory = 
    filter === 'all' 
      ? dataJson 
      : dataJson.filter((item) => item.category.toLowerCase().slice(4) === filter.toLowerCase());
  cardsContainer.append(...openCategory.map(item => createCard(item, { subtitle: 'h2', title: 'h3' })));
};

categories.forEach((category, index) => {
  const tabItem = createElement('li', ['tabs-item']);
  const tabBtn = createElement('button', ['tabs-btn', 'user-select-none', 'cursor-pointer'], category.name, { 'aria-label': `Open card ${category.name}` });
  if (index === 0) {
    tabBtn.classList.add('active-tab');
    activeTab = tabBtn;
  }
  tabBtn.onclick = () => {
    if (activeTab) activeTab.classList.remove('active-tab');
    tabBtn.classList.add('active-tab');
    activeTab = tabBtn;
    cardCategory(category.filter);
  };
  tabItem.append(tabBtn);
  tabsContainer.append(tabItem);
});

cardCategory('all');
titleContainer.append(giftTitle);
giftContainer.append(titleContainer);
giftSection.append(giftContainer, tabsContainer, cardsContainer);
export { giftSection };
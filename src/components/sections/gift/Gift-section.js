import './Gift-section.scss';
import { createElement } from '@com/common/createElement';

const giftSection = createElement('section', ['section', 'gift-section']);
const giftContainer = createElement('div', ['gift-container']);
const titleContainer = createElement('div', ['title-container']);
const giftTitle = createElement('h1', ['title', 'gift-title'], 'Achieve health, harmony, and inner strength');
const tabsContainer = createElement('div', ['tabs-container']);

const categories = [
  { name: 'All', filter: 'all' },
  { name: 'for work', filter: 'work' },
  { name: 'for health', filter: 'health' },
  { name: 'for harmony', filter: 'harmony' }
];

let activeTab = null;

categories.forEach((category, index) => {
  const tabBtn = createElement('button', ['tabs-btn', 'user-select-none', 'cursor-pointer'], category.name);
  if (index === 0) {
    tabBtn.classList.add('active-tab');
    activeTab = tabBtn;
  }
  tabsContainer.append(tabBtn);
});

titleContainer.append(giftTitle);
giftContainer.append(titleContainer);
giftSection.append(giftContainer, tabsContainer);
export { giftSection };
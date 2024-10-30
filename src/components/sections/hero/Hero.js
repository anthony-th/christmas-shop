import './Hero.scss';
import { createElement } from '@com/common/createElement';

const heroSection = createElement('section', ['section', 'hero']);
const heroContainer = createElement('div', ['hero__container']);
const heroCaption = createElement('h3', ['hero__caption'], 'Merry Christmas');
const heroTitle = createElement('h1', ['hero__title'], `Gift yourself the magic of new possibilities`, {}, true);
const heroButton = createElement('a', ['hero__button'], 'Explore Magical Gifts', { href: '/gifts' });
const heroSubCaption = createElement('h3', ['hero__subcaption'], 'and Happy New Year');

heroContainer.append(heroCaption, heroTitle, heroButton, heroSubCaption);
heroSection.append(heroContainer);
export { heroSection, heroButton };
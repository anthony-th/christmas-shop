import './About.scss';
import { createElement } from '@common/createElement';

const aboutSection = createElement('section', ['section', 'about'],'', { id: 'about' });
const aboutContainer = createElement('div', ['about__container']);
const textContainer = createElement('div', ['about__text-container']);
const textBlock = createElement('div', ['about__text-block']);
const aboutCaption = createElement('h3', ['about__caption'], 'About');
const aboutTitle = createElement('h2', ['about__title'], 'Unleash your inner superhero!');
const aboutParagraph = createElement('p', ['about__paragraph'], 'This New Year marks the beginning of your journey to inner harmony and new strengths. We offer unique gifts that will help you improve your life.');
const imgContainer = createElement('div', ['about__img-container']);

textBlock.append(aboutCaption, aboutTitle, aboutParagraph);
textContainer.append(textBlock);
aboutContainer.append(textContainer, imgContainer);
aboutSection.append(aboutContainer);
export { aboutSection };
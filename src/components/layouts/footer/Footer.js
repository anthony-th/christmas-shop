import './Footer.scss';
import { createElement } from '@com/common/createElement';
import phoneIcon from '@icons/santa-claus.svg';
import locationIcon from '@icons/christmas-tree.svg';
import emailIcon from '@icons/snake.svg';

const footer = createElement('footer', ['footer'], '', { id: 'contacts' });
const footerContainer = createElement('div', ['footer__container']);
const contactsContainer = createElement('div', ['footer__contacts-container']);
const socialsContainer = createElement('div', ['footer__socials-container']);

const createContactCard = (svgSrc, hrefLink, textContent, description, target = '', rel = '') => {
  const card = createElement('div', ['contact-card', 'cursor-pointer']);
  const svgElement = createElement('img', ['contact-card__icon'], '', { src: svgSrc, alt: '' });
  const link = createElement('a', ['contact-card__link'], textContent, { href: hrefLink, target, rel });
  const text = createElement('p', ['contact-card__text'], description);
  card.append(svgElement, link, text);
  return card;
}

const phoneCard = createContactCard(phoneIcon, 'tel:+375291112233', '+375 (29) 111-22-33', 'Call Us');
const locationCard = createContactCard(locationIcon, 'https://maps.app.goo.gl/emac7cSMKEP3SRuP8', 'Magic forest', 'meet us', '_blank', 'noreferrer noopener');
const emailCard = createContactCard(emailIcon, 'mailto:gifts@magic.com', 'gifts@magic.com', 'write us');

contactsContainer.append(phoneCard, locationCard, emailCard);
footerContainer.append(contactsContainer, socialsContainer);
footer.append(footerContainer);

export { footer };
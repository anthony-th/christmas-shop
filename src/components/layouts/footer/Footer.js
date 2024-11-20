import './footer.scss';
import { createElement } from '@common/CreateElement';
import phoneIcon from '@icons/santa-claus.svg';
import locationIcon from '@icons/christmas-tree.svg';
import emailIcon from '@icons/snake.svg';

const footer = createElement('footer', ['footer'], '', { id: 'contacts' });
const footerContainer = createElement('div', ['footer__container']);
const contactsContainer = createElement('ul', ['footer__contacts-container']);
const socialsContainer = createElement('div', ['footer__socials-container']);
const socials = createElement('ul', ['socials']);

const createContactCard = (icon, href, text, description, target = '', rel = '') => {
  const contacsItem = createElement('li', ['contacts-item']);
  const options = { href };
  if (target) options.target = target;
  if (rel) options.rel = rel;
  const card = createElement('a', ['contact-card', 'cursor-pointer', 'user-select-none'], '', options);
  const iconElement = createElement('img', ['contact-card__icon'], '', { src: icon, alt: '' });
  const textElement = createElement('p', ['contact-card__link'], text);
  const descriptionText = createElement('p', ['contact-card__text'], description);
  card.append(iconElement, textElement, descriptionText);
  contacsItem.append(card);
  return contacsItem;
};

const contacts = [
  { icon: phoneIcon, href: 'tel:+375291112233', text: '+375 (29) 111-22-33', description: 'Call Us' },
  { icon: locationIcon, href: 'https://maps.app.goo.gl/emac7cSMKEP3SRuP8', text: 'Magic forest', description: 'Meet Us', target: '_blank', rel: 'noreferrer noopener' },
  { icon: emailIcon, href: 'mailto:gifts@magic.com', text: 'gifts@magic.com', description: 'Write Us' },
];

contacts.forEach((contact) => {
  const { icon, href, text, description, target, rel } = contact;
  const card = createContactCard(icon, href, text, description, target, rel);
  contactsContainer.append(card);
});

const socialIcons = {
  telegram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#181C29" stroke-width="1.5"/>
    <path d="M17.5 6.51L17.51 6.49889" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" stroke="#181C29" stroke-width="1.5"/>
    <path d="M20 3L4 21" stroke="#181C29" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`
};

const socialLinksData = [
  { icon: socialIcons.telegram, href: 'https://web.telegram.org/' },
  { icon: socialIcons.facebook, href: 'https://www.facebook.com/' },
  { icon: socialIcons.instagram, href: 'https://www.instagram.com/' },
  { icon: socialIcons.twitter, href: 'https://twitter.com/' }
];

socialLinksData.forEach(({ icon, href }) => {
  const linkItem = createElement('li', ['social-link-item']);
  const link = createElement('a', ['social-link'], icon,  { href, target: '_blank', rel: 'noreferrer noopener', 'aria-label': 'Social link'}, true);
  linkItem.append(link);
  socials.append(linkItem);
});

const footerParagraph = createElement('p', ['footer__paragraph'], '© Copyright 2025, All Rights Reserved');
const footerCaption = createElement('a', ['footer__caption'], 'Made in Rolling Scopes School', { href: 'https://rs.school/', target: '_blank', rel: 'noreferrer noopener' });

socialsContainer.append(socials, footerParagraph, footerCaption);
footerContainer.append(contactsContainer, socialsContainer);
footer.append(footerContainer);

export { footer };
import './footer.scss';
import createElement from '@helpers/create-element';
import createSvg from '@helpers/create-svg';
import locationIcon from '@icons/christmas-tree.svg';
import facebookSvg from '@icons/fb.svg?raw';
import instagramSvg from '@icons/ig.svg?raw';
import phoneIcon from '@icons/santa-claus.svg';
import emailIcon from '@icons/snake.svg';
import telegramSvg from '@icons/telegram.svg?raw';
import twitterSvg from '@icons/tw.svg?raw';

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
  const card = createElement(
    'a',
    ['contact-card', 'cursor-pointer', 'user-select-none'],
    '',
    options
  );
  const iconElement = createElement('img', ['contact-card__icon'], '', {
    src: icon,
    alt: '',
    'aria-hidden': 'true',
  });
  const textElement = createElement('p', ['contact-card__link'], text);
  const descriptionText = createElement('p', ['contact-card__text'], description);
  card.append(iconElement, textElement, descriptionText);
  contacsItem.append(card);
  return contacsItem;
};

const contacts = [
  {
    icon: phoneIcon,
    href: 'tel:+375291112233',
    text: '+375 (29) 111-22-33',
    description: 'Call Us',
  },
  {
    icon: locationIcon,
    href: 'https://maps.app.goo.gl/emac7cSMKEP3SRuP8',
    text: 'Magic forest',
    description: 'Meet Us',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  {
    icon: emailIcon,
    href: 'mailto:gifts@magic.com',
    text: 'gifts@magic.com',
    description: 'Write Us',
  },
];

contacts.forEach((contact) => {
  const { icon, href, text, description, target, rel } = contact;
  const card = createContactCard(icon, href, text, description, target, rel);
  contactsContainer.append(card);
});

const socialLinksData = [
  { icon: telegramSvg, href: 'https://web.telegram.org/', label: 'Telegram' },
  { icon: facebookSvg, href: 'https://www.facebook.com/', label: 'Facebook' },
  {
    icon: instagramSvg,
    href: 'https://www.instagram.com/',
    label: 'Instagram',
  },
  { icon: twitterSvg, href: 'https://twitter.com/', label: 'Twitter' },
];

socialLinksData.forEach(({ icon, href, label }) => {
  const linkItem = createElement('li', ['social-link-item']);
  const link = createElement('a', ['social-link'], '', {
    href,
    target: '_blank',
    rel: 'noreferrer noopener',
    'aria-label': label,
  });
  const socialIcon = createSvg(icon, ['social-icon'], {
    'aria-hidden': 'true',
    focusable: 'false',
  });
  link.append(socialIcon);
  linkItem.append(link);
  socials.append(linkItem);
});

const footerParagraph = createElement(
  'p',
  ['footer__paragraph'],
  '© Copyright 2025, All Rights Reserved'
);
const footerCaption = createElement('a', ['footer__caption'], 'Made in Rolling Scopes School', {
  href: 'https://rs.school/',
  target: '_blank',
  rel: 'noreferrer noopener',
});

socialsContainer.append(socials, footerParagraph, footerCaption);
footerContainer.append(contactsContainer, socialsContainer);
footer.append(footerContainer);

export default footer;

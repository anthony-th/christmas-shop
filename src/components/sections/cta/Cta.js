import './Cta.scss';
import { createElement } from '@com/common/createElement';

const ctaSection = createElement('section', ['section', 'cta']);
const ctaContainer = createElement('div', ['cta__container']);

ctaSection.append(ctaContainer);
export { ctaSection};
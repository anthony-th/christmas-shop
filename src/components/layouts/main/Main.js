import './Main.scss';
import { createElement } from '@com/common/createElement';
import { heroSection } from '@com/sections/hero/Hero';

const main = createElement('main', ['main']);

main.append(heroSection);
export { main };
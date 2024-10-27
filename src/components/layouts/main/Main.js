import './Main.scss';
import { createElement } from '../../common/createElement';
import { heroSection } from '../../sections/hero/Hero';

const main = createElement('main', ['main']);

main.append(heroSection);
export { main };
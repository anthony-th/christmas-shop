import './Main.scss';
import { createElement } from '@com/common/createElement';
import { heroSection } from '@com/sections/hero/Hero';
import { aboutSection } from '@com/sections/about/About';
import { sliderSection } from '@com/sections/slider/Slider';
import { bestSection } from '@com/sections/best/Best';

const main = createElement('main', ['main']);

main.append(heroSection, aboutSection, sliderSection, bestSection);
export { main };
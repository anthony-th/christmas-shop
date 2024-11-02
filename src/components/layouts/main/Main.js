import './Main.scss';
import { createElement } from '@com/common/createElement';
import { heroSection } from '@com/sections/hero/Hero';
import { aboutSection } from '@com/sections/about/About';
import { sliderSection } from '@com/sections/slider/Slider';
import { bestSection } from '@com/sections/best/Best';
import { ctaSection } from '../../sections/cta/Cta';

const main = createElement('main', ['main']);

main.append(heroSection, aboutSection, sliderSection, bestSection, ctaSection);
export { main };
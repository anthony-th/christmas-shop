import { main } from '@lay/main/Main';
import { heroSection } from '@com/sections/hero/Hero';
import { aboutSection } from '@com/sections/about/About';
import { sliderSection } from '@com/sections/slider/Slider';
import { bestSection } from '@com/sections/best/Best';
import { ctaSection } from '@com/sections/cta/Cta';

const homePage = () => {
  document.title = "Christmas-shop";
  main.append(heroSection, aboutSection, sliderSection, bestSection, ctaSection);
}

export { homePage };
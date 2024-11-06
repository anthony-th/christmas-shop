import { main } from '@lay/main/Main';
import { heroSection } from '@sections/hero/Hero';
import { aboutSection } from '@sections/about/About';
import { sliderSection } from '@sections/slider/Slider';
import { bestSection } from '@sections/best/Best';
import { ctaSection } from '@sections/cta/Cta';

const homePage = () => {
  document.title = "Christmas-shop";
  main.append(heroSection, aboutSection, sliderSection, bestSection, ctaSection);
}

export { homePage };
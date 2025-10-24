import main from '@lay/main';
import aboutSection from '@sections/about';
import bestSection from '@sections/best';
import { ctaSection } from '@sections/cta';
import { heroSection } from '@sections/hero';
import { sliderSection } from '@sections/slider';

const homePage = () => {
  document.title = 'Christmas-shop';
  main.prepend(heroSection, aboutSection, sliderSection, bestSection, ctaSection);
};

export default homePage;

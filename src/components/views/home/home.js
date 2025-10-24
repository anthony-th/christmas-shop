import main from '@lay/main';
import { heroSection } from '@sections/hero';
import aboutSection from '@sections/about';
import { sliderSection } from '@sections/slider';
import bestSection from '@sections/best';
import { ctaSection } from '@sections/cta';

const homePage = () => {
  document.title = "Christmas-shop";
  main.prepend(heroSection, aboutSection, sliderSection, bestSection, ctaSection);
}

export default homePage;
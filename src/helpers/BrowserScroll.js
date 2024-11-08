import { header } from "@lay/header/Header";

const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

const scrollBrowserToTop = (isHomePage, buttonName) => {
  if (isHomePage && isFirefox) {
    if (buttonName === 'ctaBtn') {
      document.documentElement.style.scrollBehavior = 'unset';
      header.scrollIntoView();
      document.onscrollend = () => {
        document.documentElement.style.scrollBehavior = 'smooth';
      };
    } else if (buttonName === 'heroButton') {
      window.scrollTo(0, 0);
    }
  } else {
    window.scrollTo(0, 0);
  }
}

export { scrollBrowserToTop };
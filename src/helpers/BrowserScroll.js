import { header } from "@lay/header/Header";

const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

const scrollBrowserToTop = () => {
  if (isFirefox) {
    document.documentElement.style.scrollBehavior = 'unset';
    header.scrollIntoView();
    document.onscrollend = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  } else {
    window.scrollTo(0, 0);
  }
}

export { scrollBrowserToTop };
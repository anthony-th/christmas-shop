import { createButtonUp as btnUp } from '@common/button-up';
import BASE_PATH from '@helpers/constants';
import footer from '@lay/footer';
import { header } from '@lay/header';
import { setActiveLink } from '@lay/header/navigation';
import main from '@lay/main';
import giftsPage from '@views/gifts';
import homePage from '@views/home';
import notFound from '@views/not-found';

const routes = {
  404: notFound,
  [BASE_PATH]: homePage,
  [BASE_PATH + 'gifts']: giftsPage,
};

const router = {
  showView() {
    const currentPath = window.location.pathname;
    const currentView = routes[currentPath] || routes[404];
    const isErrorPage = currentView === notFound;
    header.style.display = isErrorPage ? 'none' : '';
    footer.style.display = isErrorPage ? 'none' : '';
    main.innerHTML = '';
    currentView();
    btnUp();
    setActiveLink(currentPath);
  },
};

const changeViewsUrl = (url) => {
  history.pushState(null, null, BASE_PATH + url);
  router.showView();
};

export { router, changeViewsUrl };

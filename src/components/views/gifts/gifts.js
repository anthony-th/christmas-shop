import main from '@lay/main';
import giftSection from '@sections/gift';

const giftsPage = () => {
  document.title = "Christmas-shop | Gifts";
  main.prepend(giftSection);
}

export default giftsPage;
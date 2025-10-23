import main from '@lay/main';
import { giftSection } from '@sections/gift/Gift-section';

const giftsPage = () => {
  document.title = "Christmas-shop | Gifts";
  main.prepend(giftSection);
}

export { giftsPage };
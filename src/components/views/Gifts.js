import { main } from '@lay/main/Main';
import { giftSection } from '@sections/gift/Gift-section';

const giftsPage = () => {
  document.title = "Christmas-shop | Gifts";
  main.append(giftSection);
}

export { giftsPage };
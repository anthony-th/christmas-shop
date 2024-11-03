import { main } from '@lay/main/Main';
import { giftSection } from '@com/sections/gift/Gift-section';

const giftsPage = () => {
  document.title = "Christmas-shop | Gifts";
  main.innerHTML = '';
  main.append(giftSection);
}

export { giftsPage };
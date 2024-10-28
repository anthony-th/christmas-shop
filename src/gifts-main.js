import '@scss/_typography.scss';
import '@scss/_global.scss';
import '@scss/_media_hover.scss';

import { header } from '@com/layouts/header/Header';
import { main } from '@com/layouts/gifts-main/Main';

document.body.append(header, main);
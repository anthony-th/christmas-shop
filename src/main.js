import './assets/styles/_typography.scss';
import './assets/styles/_global.scss';
import './assets/styles/_media_hover.scss';

import { header } from '@/components/layouts/header/Header';
import { main } from '@/components/layouts/main/Main';

document.body.append(header, main);
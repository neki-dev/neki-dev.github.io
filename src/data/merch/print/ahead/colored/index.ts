import { PrintMeta } from '~types';

import image from './image.png';
import source from './source.psd?url';

export const printColored: PrintMeta = {
  url: image,
  hex: '#76B65F',
  name: 'COLORED',
  source,
  size: 12,
  offset: 12,
};

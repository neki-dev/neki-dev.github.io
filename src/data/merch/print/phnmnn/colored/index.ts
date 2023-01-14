import { PrintMeta } from '~types';

import image from './image.png';
import source from './source.psd?url';

export const printColored: PrintMeta = {
  url: image,
  hex: '#F66086',
  name: 'COLORED',
  source,
  size: 16,
  offset: 12,
};

import { PrintMeta } from '~types';

import image from './image.png';
import source from './source.psd?url';

export const printBlack: PrintMeta = {
  url: image,
  hex: '#000000',
  name: 'BLACK',
  source,
  size: 8,
  offset: 12,
};

import { PrintMeta } from '~types';

import image from './image.png';
import source from './source.psd?url';

export const printWhite: PrintMeta = {
  url: image,
  hex: '#FFFFFF',
  name: 'WHITE',
  source,
  size: 10,
  offset: 12,
};

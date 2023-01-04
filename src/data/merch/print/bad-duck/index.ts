import { PrintVariant } from '~types';

import base_black from '../../base/black.png';
import base_white from '../../base/white.png';

import yellow from './yellow.png';
import black from './black.png';
import white from './white.png';

const print: PrintVariant[] = [
  {
    base: { url: base_black, hex: '#000000', name: 'B' },
    print: { url: yellow, hex: '#FFCD00', name: 'Y' },
  },
  {
    base: { url: base_black, hex: '#000000', name: 'B' },
    print: { url: white, hex: '#FFFFFF', name: 'W' },
  },
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: black, hex: '#000000', name: 'B' },
  },
];

export default print;

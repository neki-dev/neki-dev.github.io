import { PrintVariant } from '~types';

import base_black from '../../base/black.png';
import base_white from '../../base/white.png';

import red from './red.png';
import black from './black.png';
import white from './white.png';

const print: PrintVariant[] = [
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: black, hex: '#000000', name: 'B' },
  },
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: red, hex: '#DF3C3B', name: 'R' },
  },
  {
    base: { url: base_black, hex: '#000000', name: 'B' },
    print: { url: white, hex: '#FFFFFF', name: 'W' },
  },
];

export default print;

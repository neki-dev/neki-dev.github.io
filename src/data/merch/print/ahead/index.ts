import { PrintVariant } from '~types';

import base_white from '../../base/white.png';

import green from './green.png';

const print: PrintVariant[] = [
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: green, hex: '#77b75f', name: 'G' },
  },
];

export default print;

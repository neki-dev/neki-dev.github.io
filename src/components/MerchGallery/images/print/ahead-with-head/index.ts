import { PrintVariant } from '../../../types';

import base_white from '../../base/white.png';
import base_black from '../../base/black.png';
import base_purple from '../../base/purple.png';

import yellow from './yellow.png';

const print: PrintVariant[] = [
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: yellow, hex: '#EDDB3C', name: 'Y' },
  },
  {
    base: { url: base_black, hex: '#000000', name: 'B' },
    print: { url: yellow, hex: '#EDDB3C', name: 'Y' },
  },
  {
    base: { url: base_purple, hex: '#7B03CA', name: 'P' },
    print: { url: yellow, hex: '#EDDB3C', name: 'Y' },
  },
];

export default print;

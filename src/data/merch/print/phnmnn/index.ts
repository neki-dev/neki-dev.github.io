import { PrintVariant } from '~types';

import base_red from '../../base/red.png';
import base_white from '../../base/white.png';
import base_lightblue from '../../base/lightblue.png';

import red_blue from './red_blue.png';
import red from './red.png';
import lightblue from './lightblue.png';

const print: PrintVariant[] = [
  {
    base: { url: base_lightblue, hex: '#05A1CE', name: 'B' },
    print: { url: red, hex: '#FE5D82', name: 'R' },
  },
  {
    base: { url: base_red, hex: '#CD336F', name: 'R' },
    print: { url: lightblue, hex: '#00B7CC', name: 'B' },
  },
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: red_blue, hex: '#FE5D82', name: 'RB' },
  },
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: lightblue, hex: '#00B7CC', name: 'B' },
  },
];

export default print;

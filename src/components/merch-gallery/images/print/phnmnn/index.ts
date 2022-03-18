import { PrintVariant } from '../../../types';

import base_red from '../../base/red.png';
import base_white from '../../base/white.png';
import base_lightblue from '../../base/lightblue.png';

import red from './red.png';
import lightblue from './lightblue.png';
import white from './white.png';

const print: PrintVariant[] = [
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: red, hex: '#FE5D82', name: 'R' },
  },
  {
    base: { url: base_white, hex: '#FFFFFF', name: 'W' },
    print: { url: lightblue, hex: '#00B7CC', name: 'L' },
  },
  {
    base: { url: base_red, hex: '#CD336F', name: 'R' },
    print: { url: white, hex: '#FFFFFF', name: 'W' },
  },
  {
    base: { url: base_red, hex: '#CD336F', name: 'R' },
    print: { url: lightblue, hex: '#00B7CC', name: 'L' },
  },
  {
    base: { url: base_lightblue, hex: '#05A1CE', name: 'L' },
    print: { url: white, hex: '#FFFFFF', name: 'W' },
  },
];

export default print;

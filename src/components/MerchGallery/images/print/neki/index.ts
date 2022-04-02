import { PrintVariant } from '../../../types';

import base_black from '../../base/black.png';
import base_white from '../../base/white.png';
import base_red from '../../base/red.png';
import base_lightblue from '../../base/lightblue.png';
import base_purple from '../../base/purple.png';

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
  {
    base: { url: base_red, hex: '#CD336F', name: 'R' },
    print: { url: white, hex: '#FFFFFF', name: 'W' },
  },
  {
    base: { url: base_lightblue, hex: '#05A1CE', name: 'L' },
    print: { url: white, hex: '#FFFFFF', name: 'W' },
  },
  {
    base: { url: base_purple, hex: '#7B03CA', name: 'P' },
    print: { url: white, hex: '#FFFFFF', name: 'W' },
  },
];

export default print;

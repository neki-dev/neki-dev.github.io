import { PrintVariant } from '~types';

import { baseLightblue } from '../../base/lightblue';
import { basePink } from '../../base/pink';
import { baseWhite } from '../../base/white';

import { printPink } from './pink';
import { printLightblue } from './lightblue';
import { printColored } from './colored';

const print: PrintVariant[] = [
  {
    base: baseLightblue,
    print: printPink,
  },
  {
    base: basePink,
    print: printLightblue,
  },
  {
    base: baseWhite,
    print: printColored,
  },
];

export default print;

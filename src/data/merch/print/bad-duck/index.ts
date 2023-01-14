import { PrintVariant } from '~types';

import { baseBlack } from '../../base/black';
import { baseWhite } from '../../base/white';

import { printYellow } from './yellow';
import { printWhite } from './white';
import { printBlack } from './black';

const print: PrintVariant[] = [
  {
    base: baseBlack,
    print: printYellow,
  },
  {
    base: baseBlack,
    print: printWhite,
  },
  {
    base: baseWhite,
    print: printBlack,
  },
];

export default print;

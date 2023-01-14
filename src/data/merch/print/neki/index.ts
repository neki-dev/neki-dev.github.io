import { PrintVariant } from '~types';

import { baseBlack } from '../../base/black';
import { baseWhite } from '../../base/white';

import { printWhite } from './white';
import { printPurple } from './purple';
import { printBlack } from './black';

const print: PrintVariant[] = [
  {
    base: baseWhite,
    print: printPurple,
  },
  {
    base: baseWhite,
    print: printBlack,
  },
  {
    base: baseBlack,
    print: printWhite,
  },
];

export default print;

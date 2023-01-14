import { PrintVariant } from '~types';

import { baseWhite } from '../../base/white';

import { printColored } from './colored';

const print: PrintVariant[] = [
  {
    base: baseWhite,
    print: printColored,
  },
];

export default print;

import { Print } from '~types';

import neki from './print/neki';
import badDuck from './print/bad-duck';
import ahead from './print/ahead';
import phnmnn from './print/phnmnn';

export const MERCH: Print[] = [
  { name: 'PHNMNN', variants: phnmnn },
  { name: 'AHEAD', variants: ahead },
  { name: 'BAD DUCK', variants: badDuck },
  { name: 'NEKI', variants: neki },
];

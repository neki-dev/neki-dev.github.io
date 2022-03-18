import { PrintVariant } from '../../types';

import neki from './neki';
import badDuck from './bad-duck';
import phnmnn from './phnmnn';
import againWrong from './again-wrong';
import aheadWithHead from './ahead-with-head';

const prints: {
  [name: string]: PrintVariant[];
} = {
  NEKI: neki,
  'BAD DUCK': badDuck,
  PHNMNN: phnmnn,
  'AHEAD WITH HEAD': aheadWithHead,
  'AGAIN WRONG': againWrong,
};

export default prints;

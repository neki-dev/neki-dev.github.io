import { StackGroup } from '~types';

export const STACK_BEG_YEAR = 2011;
export const STACK_NOW_YEAR = new Date().getFullYear();
export const STACK_SIZE = 100 / (STACK_NOW_YEAR - STACK_BEG_YEAR);

export const STACK_GROUPS: StackGroup[] = [
  {
    name: 'Layout',
    stacks: [
      {
        name: 'HTML',
        beg: 2011,
        color: ['#f58442', '#ff9d63'],
      },
      {
        name: 'CSS',
        beg: 2011,
        color: ['#267abf', '#4ca0e6'],
      },
      {
        name: 'SASS',
        beg: 2019,
        color: ['#ba75ae', '#d18ac5'],
      },
    ],
  },
  {
    name: 'Languages',
    stacks: [
      {
        name: 'JavaScript',
        beg: 2012,
        color: ['#f5d142', '#ffe26e'],
      },
      {
        name: 'TypeScript',
        beg: 2017,
        color: ['#267abf', '#4ca0e6'],
      },
      {
        name: 'PHP',
        beg: 2013,
        end: 2018,
        color: ['#4f85b8', '#77a9d9'],
      },
      {
        name: 'Lua',
        beg: 2016,
        end: 2019,
        color: ['#002dbf', '#1e4ad9'],
      },
      // { name: 'C#', beg: 2017, end: 2018, color: ['#8945ba', '#b067e6'] },
    ],
  },
  {
    name: 'Libraries',
    stacks: [
      {
        name: 'React',
        beg: 2018,
        color: ['#58d5e8', '#71e3f5'],
      },
      {
        name: 'Solid.js',
        beg: 2021,
        color: ['#4f85b8', '#77a9d9'],
      },
      {
        name: 'Phaser',
        beg: 2021,
        color: ['#73199A', '#922cc1'],
      },
      {
        name: 'Angular',
        beg: 2017,
        end: 2018,
        color: ['#d93654', '#ed516d'],
      },
    ],
  },
  {
    name: 'Platforms',
    stacks: [
      {
        name: 'Node.js',
        beg: 2014,
        end: 2021,
        color: ['#8fb848', '#a3cf59'],
      },
    ],
  },
  {
    name: 'Databases',
    stacks: [
      {
        name: 'MySQL',
        beg: 2013,
        end: 2018,
        color: ['#c9a459', '#edc980'],
      },
      {
        name: 'Oracle',
        beg: 2018,
        end: 2021,
        color: ['#f23d3d', '#ff5e5e'],
      },
    ],
  },
];

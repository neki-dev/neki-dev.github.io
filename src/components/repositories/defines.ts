import { Package } from './types';

export const PACKAGE_LIST: Package[] = [
  {
    name: 'dothree',
    type: 'game',
    langs: ['TypeScript', 'React'],
    description: 'Online logic game',
  },
  {
    name: 'promise-partial',
    type: 'lib',
    langs: ['TypeScript'],
    description: 'Partial (mixed) promise execution',
  },
  {
    name: 'arrays-otherness',
    type: 'lib',
    langs: ['TypeScript'],
    description: 'Get a matching, missing and excess items of an array based on target array',
  },
  {
    name: 'uran-engine',
    type: 'framework',
    langs: ['JavaScript'],
    description: 'Browser multiplayer game engine',
    mark: 'deprecated',
  },
  {
    name: 'react-scrl',
    type: 'lib',
    langs: ['JavaScript', 'React'],
    description: 'Simple and versatile stylized scrollbar',
  },
  {
    name: 'sip-gateway',
    type: 'lib',
    langs: ['JavaScript'],
    description: 'Simple gateway for SIP via WebSocket',
  },
  {
    name: 'fake-function',
    type: 'lib',
    langs: ['JavaScript'],
    description: 'Fake wrapper for functions',
  },
  {
    name: 'digital-mask',
    type: 'lib',
    langs: ['JavaScript'],
    description: 'Easy digital mask for string',
  },
  {
    name: 'net-bird',
    type: 'framework',
    langs: ['PHP'],
    description: 'Easy website framework',
    mark: 'deprecated',
  },
];

export default { PACKAGE_LIST };

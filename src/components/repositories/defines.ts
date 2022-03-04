import { Package } from './types';

export const PACKAGE_LIST: Package[] = [
	{ name: 'dothree', type: 'game', langs: ['TypeScript', 'React'], description: 'Online logic game' },
	{ name: 'promise-partial', type: 'lib', langs: ['JavaScript'], description: 'Partial Promise execution' },
	{ name: 'contrast-arrays', type: 'lib', langs: ['JavaScript'], description: 'Synchronization current array by target array' },
	{ name: 'uran-engine', type: 'framework', langs: ['JavaScript'], description: 'Browser multiplayer engine', mark: 'deprecated' },
	{ name: 'react-scrl', type: 'lib', langs: ['JavaScript', 'React'], description: 'Simple and versatile stylized scrollbar' },
	{ name: 'fake-function', type: 'lib', langs: ['JavaScript'], description: 'Fake wrapper for functions' },
	{ name: 'netbird', type: 'framework', langs: ['PHP'], description: 'Easy website framwork', mark: 'deprecated' },
	{ name: 'digital-mask', type: 'lib', langs: ['JavaScript'], description: 'Easy digital mask for string' },
	{ name: 'genmap2d', type: 'lib', langs: ['JavaScript'], description: 'Generation of 2D maps' },
	{ name: 'sip-gateway', type: 'lib', langs: ['JavaScript'], description: 'Simple gateway for SIP via WebSocket' }
];
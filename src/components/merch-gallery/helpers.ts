import { PrintVariant } from './types';

export function getPrintUUID(name: string, type: PrintVariant) {
  return `${name}-${type.base.name || type.base.hex}-${type.print.name || type.print.hex}`
    .toUpperCase()
    .replace(/[#\sEYUIOA]/g, '');
}

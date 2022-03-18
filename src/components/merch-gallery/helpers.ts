import { PrintVariant } from './types';

export function getPrintUUID(name: string, type: PrintVariant) {
  const modelKey = name.toUpperCase().replace(/[\sEYUIOA]/g, '');
  return `${modelKey}-${type.base.name}-${type.print.name}`;
}

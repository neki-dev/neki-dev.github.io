import { Component } from 'solid-js';
import cn from 'classnames';

import { PrintVariant } from '~types';

import './styles.scss';

type Props = PrintVariant & {
  isActive: boolean
  onClick: () => void
};

export const VariantItem: Component<Props> = (props) => (
  <div
    onClick={() => props.onClick()}
    class={cn('variant-item', {
      active: props.isActive,
    })}
  >
    <div style={{ 'background-color': props.base.hex }} />
    <div style={{ 'background-color': props.print.hex }} />
  </div>
);

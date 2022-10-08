import { Component } from 'solid-js';

import { PrintVariant } from '~types';

import './styles.scss';

type Props = PrintVariant & {
  isActive: boolean
  onClick: () => void
};

export const VariantItem: Component<Props> = (props) => (
  <div
    class={`variant-item ${props.isActive ? 'active' : ''}`}
    onClick={() => props.onClick()}
  >
    <div style={{ 'background-color': props.base.hex }} />
    <div style={{ 'background-color': props.print.hex }} />
  </div>
);

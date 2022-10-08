import { Component } from 'solid-js';

import './styles.scss';

type Props = {
  name: string
  isActive: boolean
  onClick: () => void
};

export const ModelItem: Component<Props> = (props) => (
  <div
    class={`model-item ${props.isActive ? 'active' : ''}`}
    onClick={() => props.onClick()}
  >
    {props.name}
  </div>
);

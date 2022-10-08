import { Component } from 'solid-js';

import './styles.scss';

type Props = {
  image: string
  isActive: boolean
  onClick: () => void
};

export const DesignItem: Component<Props> = (props) => (
  <div
    class={`design-item ${props.isActive ? 'active' : ''}`}
    onClick={() => props.onClick()}
  >
    <img src={props.image} alt="" />
  </div>
);

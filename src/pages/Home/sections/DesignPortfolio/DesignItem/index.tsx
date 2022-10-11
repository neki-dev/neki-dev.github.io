import { Component } from 'solid-js';
import classnames from 'classnames';

import './styles.scss';

type Props = {
  image: string
  isActive: boolean
  onClick: () => void
};

export const DesignItem: Component<Props> = (props) => (
  <div
    onClick={() => props.onClick()}
    class={classnames('design-item', {
      active: props.isActive,
    })}
  >
    <img src={props.image} alt="" />
  </div>
);

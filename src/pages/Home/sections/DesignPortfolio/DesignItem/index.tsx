import { Component } from 'solid-js';
import cn from 'classnames';

import './styles.scss';

type Props = {
  image: string
  isActive: boolean
  onClick: () => void
};

export const DesignItem: Component<Props> = (props) => (
  <div
    onClick={() => props.onClick()}
    class={cn('design-item', {
      active: props.isActive,
    })}
  >
    <img src={props.image} alt="" />
  </div>
);

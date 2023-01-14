import { Component } from 'solid-js';
import cn from 'classnames';

import './styles.scss';

type Props = {
  name: string
  isActive: boolean
  onClick: () => void
};

export const ModelItem: Component<Props> = (props) => (
  <div
    onClick={() => props.onClick()}
    class={cn('model-item', {
      active: props.isActive,
    })}
  >
    {props.name}
  </div>
);

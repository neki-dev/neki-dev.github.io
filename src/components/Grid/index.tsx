import { JSX, Component } from 'solid-js';
import cn from 'classnames';

import './styles.scss';

type Props = {
  large?: boolean
  compact?: boolean
  children: JSX.Element
};

export const Grid: Component<Props> = (props) => (
  <div class={cn('grid', {
    large: props.large,
    compact: props.compact,
  })}>
    {props.children}
  </div>
);

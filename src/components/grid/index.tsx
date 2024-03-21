import cn from 'classnames';

import type { JSX, Component } from 'solid-js';

import './styles.scss';

type Props = {
  size: 'small' | 'medium' | 'large'
  compact?: boolean
  children: JSX.Element
};

export const Grid: Component<Props> = (props) => (
  <div class={cn('grid', props.size, {
    compact: props.compact,
  })}>
    {props.children}
  </div>
);

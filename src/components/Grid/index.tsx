import { JSX, Component } from 'solid-js';
import classnames from 'classnames';

import './styles.scss';

type Props = {
  large?: boolean
  compact?: boolean
  children: JSX.Element
};

export const Grid: Component<Props> = (props) => (
  <div class={classnames('grid', {
    large: props.large,
    compact: props.compact,
  })}>
    {props.children}
  </div>
);

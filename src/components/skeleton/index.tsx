import cn from 'classnames';
import { createMemo, For } from 'solid-js';

import type { Component } from 'solid-js';

import './styles.scss';

type Props = {
  repeat?: number
  height?: number
  inverse?: boolean
};

export const Skeleton: Component<Props> = (props) => {
  const repeats = createMemo(() => Array(props.repeat || 1));

  return (
    <For each={repeats()}>
      {() => (
        <div
          class={cn('skeleton-item', {
            inverse: props.inverse,
          })}
          style={{
            height: props.height ? `${props.height}px` : '100%',
          }}
        />
      )}
    </For>
  );
};

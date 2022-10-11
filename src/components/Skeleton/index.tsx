import { Component, createMemo, For } from 'solid-js';
import cn from 'classnames';

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
            height: `${props.height || 64}px`,
          }}
        />
      )}
    </For>
  );
};

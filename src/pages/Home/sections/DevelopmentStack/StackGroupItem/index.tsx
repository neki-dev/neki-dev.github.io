import { Component, For } from 'solid-js';

import { StackGroup } from '~types';
import { StackItem } from './StackItem';

import './styles.scss';

export const StackGroupItem: Component<StackGroup> = (props) => (
  <div class="stack-group-item">
    <div class="group-name">{props.name}</div>
    <div class="grid thin">
      <For each={props.stacks}>
        {StackItem}
      </For>
    </div>
  </div>
);

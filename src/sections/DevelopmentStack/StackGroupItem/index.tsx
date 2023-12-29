import { Component, For } from 'solid-js';

import { StackGroup } from '~types';
import { Grid } from '~component/Grid';
import { StackItem } from './StackItem';

import './styles.scss';

export const StackGroupItem: Component<StackGroup> = (props) => (
  <div class="stack-group-item">
    <Grid size="large" compact>
      <For each={props.stacks}>{StackItem}</For>
    </Grid>
  </div>
);

import { For } from 'solid-js';

import { StackItem } from './item';
import { Grid } from '../../../components/grid';

import type { StackGroup } from './types';
import type { Component } from 'solid-js';

import './styles.scss';

export const StackGroupItem: Component<StackGroup> = (props) => (
  <div class="stack-group-item">
    <Grid size="large" compact>
      <For each={props.stacks}>{StackItem}</For>
    </Grid>
  </div>
);

import { Component, For } from 'solid-js';

import { STACK_GROUPS } from '~data';
import { Section } from '~component/Section';
import { StackGroupItem } from './StackGroupItem';

import './styles.scss';

export const DevelopmentStack: Component = () => (
  <Section class="stack-timeline" label="Development Stack">
    <For each={STACK_GROUPS}>
      {StackGroupItem}
    </For>
  </Section>
);

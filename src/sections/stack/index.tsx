import { Component, For } from 'solid-js';

import { STACK_GROUPS } from '~data';
import { Section } from '~component/section';
import { StackGroupItem } from './group';

import './styles.scss';

export const SectionStack: Component = () => (
  <Section class="stack-timeline" label="Development Stack">
    <For each={STACK_GROUPS}>
      {StackGroupItem}
    </For>
  </Section>
);

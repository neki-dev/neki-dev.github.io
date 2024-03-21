import { For } from 'solid-js';

import { STACK_GROUPS } from './const';
import { StackGroupItem } from './group';
import { Section } from '../../components/section';

import type { Component } from 'solid-js';

import './styles.scss';

export const SectionStack: Component = () => (
  <Section class="stack-timeline" label="Development Stack">
    <For each={STACK_GROUPS}>
      {StackGroupItem}
    </For>
  </Section>
);

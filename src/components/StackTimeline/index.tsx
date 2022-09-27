import { For } from "solid-js";
import { STACK_GROUPS } from './defines';
import StackItem from './StackItem';

import './styles.scss';

export default function StackTimeline() {
  const range: {
    beg: number
    end: number
  } = {
    beg: Math.min(
      ...STACK_GROUPS.map((group) => (
        group.stacks.map((stack) => stack.beg)
      )).flat(),
    ),
    end: new Date().getFullYear(),
  };

  return (
    <section class="stack-timeline">
      <div class="wrapper">
        <h4>Development Stack</h4>
        <For each={STACK_GROUPS}>
          {(group) => (
            <div class="group">
              <div class="group-name">{group.name}</div>
              <div class="grid thin">
                <For each={group.stacks}>
                  {(stack) => (
                    <StackItem {...stack} range={range} />
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}

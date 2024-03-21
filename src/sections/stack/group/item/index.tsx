import cn from 'classnames';
import { createMemo } from 'solid-js';

import { STACK_BEG_YEAR, STACK_SIZE, STACK_NOW_YEAR } from './const';

import type { Stack } from './types';
import type { Component } from 'solid-js';

import './styles.scss';

export const StackItem: Component<Stack> = (props) => {
  const offsetBeg = createMemo(() => ((props.beg - STACK_BEG_YEAR) * STACK_SIZE));
  const offsetEnd = createMemo(() => (props.end ? ((STACK_NOW_YEAR - props.end) * STACK_SIZE) : 0));
  const experienceYears = createMemo(() => ((props.end || STACK_NOW_YEAR) - props.beg));

  return (
    <div class={cn('stack-item', {
      actual: !props.end,
    })}>
      <div class="info">
        <div
          class="icon"
          style={{
            background: `linear-gradient(${props.color[1]}, ${props.color[0]})`,
          }}
        />
        <div class="name">{props.name}</div>
      </div>
      <div class="experience">
        <span class="number">{experienceYears()}</span>
        <span class="postfix">
          {(experienceYears() === 1) ? 'year' : 'years'}
          {' '}
          experience
        </span>
      </div>
      <div class="timeline">
        <div class="bar">
          <div class="container">
            <div
              class="moment"
              style={{
                left: `${offsetBeg()}%`,
                right: `${offsetEnd()}%`,
              }}
            >
              <span class="beg">{props.beg}</span>
              <span class="end">{props.end || 'now'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

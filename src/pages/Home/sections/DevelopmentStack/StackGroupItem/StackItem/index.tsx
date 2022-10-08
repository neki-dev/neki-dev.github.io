import { Component, createMemo } from 'solid-js';

import { STACK_NOW_YEAR, STACK_BEG_YEAR, STACK_SIZE } from '~data';
import { Stack } from '~types';

import './styles.scss';

export const StackItem: Component<Stack> = (props) => {
  const offsetBeg = createMemo(() => ((props.beg - STACK_BEG_YEAR) * STACK_SIZE));
  const offsetEnd = createMemo(() => ((STACK_NOW_YEAR - props.end) * STACK_SIZE));

  return (
    <div class={`stack-item ${props.end ? '' : 'actual'}`}>
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
        <span class="number">{props.end - props.beg}</span>
        <span class="postfix">
          {(props.end - props.beg === 1) ? 'year' : 'years'}
          {' '}
          experience
          {(props.end < STACK_NOW_YEAR) && ', not actual'}
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
              <span class="end">{props.end || 'Now'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

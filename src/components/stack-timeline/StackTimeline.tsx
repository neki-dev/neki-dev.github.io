import { STACK_GROUPS } from './defines';
import { Stack, StackGroup } from './types';
import StackItem from './StackItem';

import './StackTimeline.scss';

function StackTimeline() {
  const range: {
    beg: number;
    end: number;
  } = {
    beg: Math.min(
      ...STACK_GROUPS.map((group: StackGroup) => (
        group.stacks.map((stack: Stack) => stack.beg)
      )).flat(),
    ),
    end: new Date().getFullYear(),
  };

  return (
    <section className="stack-timeline" tabIndex="0">
      <div className="wrapper">
        <h4>Development Stack</h4>
        {STACK_GROUPS.map((group: StackGroup) => (
          <div className="group">
            <div className="grid spaced">
              {group.stacks.map((stack: Stack) => (
                <StackItem {...stack} range={range} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StackTimeline;

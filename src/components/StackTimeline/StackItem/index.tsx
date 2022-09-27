import { Stack } from '~components/StackTimeline/types';

import './styles.scss';

type Props = Stack & {
  range: {
    beg: number
    end: number
  }
};

export default function StackItem({
  range, beg, end, name, color,
}: Props) {
  const experience = (end || range.end) - beg;
  const yearsLength = range.end - range.beg + 1;
  const columnSize = (100 / yearsLength);

  return (
    <div class={`stack-item ${end ? '' : 'actual'}`}>
      <div class="info">
        <div
          class="icon"
          style={{
            background: `linear-gradient(${color[1]}, ${color[0]})`,
          }}
        />
        <div class="name">{name}</div>
      </div>
      <div class="experience">
        <span class="number">{experience}</span>
        <span class="postfix">
          {(experience === 1) ? 'year' : 'years'}
          {' '}
          experience
          {end && ', not actual'}
        </span>
      </div>
      <div class="timeline">
        <div class="bar">
          <div class="container">
            <div
              class="moment"
              style={{
                left: `${(beg - range.beg) * columnSize}%`,
                right: `${(range.end - (end || range.end)) * columnSize}%`,
              }}
            >
              <span class="beg">{beg}</span>
              <span class="end">{end || 'Now'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

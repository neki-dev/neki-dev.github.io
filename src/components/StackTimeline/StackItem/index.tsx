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
    <div className={`stack-item ${end ? '' : 'actual'}`}>
      <div className="info">
        <div
          className="icon"
          style={{
            background: `linear-gradient(${color[1]}, ${color[0]})`,
          }}
        />
        <div className="name">{name}</div>
      </div>
      <div className="exp">
        <span className="number">{experience}</span>
        <span className="label">
          {(experience === 1) ? 'year' : 'years'}
          {' '}
          experience
          {end && ', not actual'}
        </span>
      </div>
      <div className="timeline">
        <div className="bar">
          <div className="container">
            <div
              className="moment"
              style={{
                left: `${(beg - range.beg) * columnSize}%`,
                right: `${(range.end - (end || range.end)) * columnSize}%`,
              }}
            >
              <span className="beg">{beg}</span>
              <span className="end">{end || 'Now'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Stack } from './types';

import './StackItem.scss';

type ComponentProps = Stack & {
  range: {
    beg: number;
    end: number;
  }
};

function StackItem({
  range, beg, end, name, color, basic,
}: ComponentProps) {
  const experience = (end || range.end) - beg;
  const yearsLength = range.end - range.beg + 1;
  const columnSize = (100 / yearsLength);

  return (
    <div className={`stack ${end ? 'inactive' : 'active'}`}>
      <div className="info">
        {basic && (
        <span className="status">Main</span>
        )}
        {end && (
        <span className="status">Not actual</span>
        )}
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
              <span className="end">{end || 'today'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackItem;

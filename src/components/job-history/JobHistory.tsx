import useScrollProgress from '../../hooks/use-scroll-progress';
import { Job } from './types';
import { JOB_HISTORY } from './defines';
import JobItem from './JobItem';

import './JobHistory.scss';

const JOB_START_TIMESTAMP = 1404172800;

function JobHistory() {
  let refSection: HTMLElement;
  let refContent: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refContent.style.transform = `translateY(${progress * 200}px)`;
    refContent.style.opacity = `${1 - progress}`;
  });

  return (
    <section ref={refSection} className="job-history" tabIndex="0">
      <div ref={refContent} className="wrapper">
        <div className="total">
          <div>
            Total work experience
            <span>
              <b>{((Date.now() / 1000 - JOB_START_TIMESTAMP) / 31536000).toFixed(1)}</b>
              {' '}
              years
            </span>
          </div>
        </div>
        <div className="list">
          {JOB_HISTORY.map((job: Job) => (
            <JobItem {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobHistory;

import useScrollProgress from '../../hooks/use-scroll-progress';
import { Job } from './types';
import { JOB_HISTORY } from './defines';
import { getTotalWorkExperience } from './helpers';
import JobItem from './JobItem';

import './JobHistory.scss';

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
              <b>{getTotalWorkExperience()}</b>
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

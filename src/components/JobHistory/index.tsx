import { For } from 'solid-js';
import { useScrollProgress } from '~hooks';
import { JOB_HISTORY } from '~data';
import { getTotalWorkExperience } from './helpers';
import JobItem from './JobItem';

import './styles.scss';

export default function JobHistory() {
  let refSection: HTMLElement;
  let refContent: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refContent.style.transform = `translateY(${progress * 200}px)`;
    refContent.style.opacity = `${1 - progress}`;
  });

  return (
    <section ref={refSection} class="job-history">
      <div ref={refContent} class="wrapper">
        <div class="total">
          <div>
            Total work experience
            <div class="amount">
              <span class="number">{getTotalWorkExperience()}</span>
              <span class="postfix">years</span>
            </div>
          </div>
        </div>
        <div class="list">
          <For each={JOB_HISTORY}>
            {(job) => (
              <JobItem {...job} />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

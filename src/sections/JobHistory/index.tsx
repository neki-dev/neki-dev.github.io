import { Component, For } from 'solid-js';

import { useScrollProgress } from '~hooks';
import { JOB_HISTORY, JOB_TOTAL_EXPERIENCE } from '~data';
import { Section } from '~component/Section';
import { JobItem } from './JobItem';

import './styles.scss';

export const JobHistory: Component = () => {
  let refSection!: HTMLElement;
  let refContent!: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refContent.style.transform = `translateY(${progress * 200}px)`;
    refContent.style.opacity = `${1 - progress}`;
  });

  return (
    <Section ref={refSection} class="job-history">
      <div ref={refContent}>
        <div class="total">
          Total work experience
          <div class="amount">
            <span class="number">{JOB_TOTAL_EXPERIENCE}</span>
            <span class="postfix">years</span>
          </div>
        </div>
        <div class="list">
          <For each={JOB_HISTORY}>
            {JobItem}
          </For>
        </div>
      </div>
    </Section>
  );
};

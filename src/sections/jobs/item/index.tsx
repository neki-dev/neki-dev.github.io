import type { Job } from './types';
import type { Component } from 'solid-js';

import './styles.scss';

export const JobItem: Component<Job> = (props) => (
  <div class="job-item">
    <div class="period">
      <span>{props.period}</span>
    </div>
    <div class="organization">{props.organization}</div>
    <div class="position">{props.position}</div>
    <div class="description">{props.description}</div>
  </div>
);

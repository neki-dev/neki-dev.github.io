import { Job } from '~types';

import './styles.scss';

export default function JobItem({
  period, organization, position, description,
}: Job) {
  return (
    <div class="job-item">
      <div class="period">
        <span>{period}</span>
      </div>
      <div class="organization">{organization}</div>
      <div class="position">{position}</div>
      <div class="description">{description}</div>
    </div>
  );
}

import { Job } from '~components/JobHistory/types';

import './styles.scss';

export default function JobItem({
  period, organization, position, description,
}: Job) {
  return (
    <div className="job-item">
      <div className="period">
        <span>{period}</span>
      </div>
      <div className="organization">{organization}</div>
      <div className="position">{position}</div>
      <div className="description">{description}</div>
    </div>
  );
}

import { Job } from './types';

import './JobItem.scss';

function JobItem({
  period, organization, position, description,
}: Job) {
  return (
    <div className="job-item">
      <div className="period">{period}</div>
      <div className="organization">{organization}</div>
      <div className="position">{position}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default JobItem;

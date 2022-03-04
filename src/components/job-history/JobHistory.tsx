import useScrollProgress from "../../hooks/use-scroll-progress";
import { Job } from './types';
import { JOB_HISTORY } from './defines';

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
		<section ref={refSection} class="job-history" tabIndex="0">
			<div ref={refContent} class="wrapper">
				<div class="total">
					<div>
						Total work experience
						<span>
							<b>{((Date.now() / 1000 - JOB_START_TIMESTAMP) / 31536000).toFixed(1)}</b> years
						</span>
					</div>
				</div>
				<div class="list">
					{JOB_HISTORY.map((job: Job) => (
						<div class="job">
							<div class="period">{job.period}</div>
							<div class="organization">{job.organization}</div>
							<div class="position">{job.position}</div>
							<div class="description">{job.description}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default JobHistory;
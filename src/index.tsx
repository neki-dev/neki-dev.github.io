import { render } from 'solid-js/web';

import './index.scss';

import TravelMap from './components/travel-map';
import StackTimeline from './components/stack-timeline';
import PersonalInfo from './components/personal-info';
import JobHistory from './components/job-history';
import Repositories from './components/repositories';

function ApplicationWrapper() {
	const mode = location.hash.substring(1);

	return (mode === 'travel') ? (
		<TravelMap />
	) : (
		<>
			<PersonalInfo />
			<StackTimeline />
			<JobHistory />
			<Repositories />
		</>
	);
}

render(
	ApplicationWrapper,
	document.getElementById('root')
);

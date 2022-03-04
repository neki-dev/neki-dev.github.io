import { render } from 'solid-js/web';

import './index.scss';

import StackTimeline from './components/stack-timeline';
import PersonalInfo from './components/personal-info';
import JobHistory from './components/job-history';
import Repositories from './components/repositories';

function ApplicationWrapper() {
  return (
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
  document.getElementById('root'),
);

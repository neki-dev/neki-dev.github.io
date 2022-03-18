import { render } from 'solid-js/web';

import './index.scss';

import StackTimeline from './components/stack-timeline';
import PersonalInfo from './components/personal-info';
import JobHistory from './components/job-history';
import Repositories from './components/repositories';
import MerchGallery from './components/merch-gallery';

const SampleRouter = {
  '*': (
    <>
      <PersonalInfo />
      <StackTimeline />
      <JobHistory />
      <Repositories />
    </>
  ),
  'merch-gallery': (
    <MerchGallery />
  ),
};

function ApplicationWrapper() {
  const route = window.location.search.substring(1);
  return SampleRouter[route] || SampleRouter['*'];
}

render(
  ApplicationWrapper,
  document.getElementById('root'),
);

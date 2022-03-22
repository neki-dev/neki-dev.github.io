import { render } from 'solid-js/web';
import { JSX } from 'solid-js/jsx-runtime';

import './index.scss';

import StackTimeline from './components/stack-timeline';
import PersonalInfo from './components/personal-info';
import JobHistory from './components/job-history';
import Repositories from './components/repositories';
import MerchGallery from './components/merch-gallery';

const SampleRouter: {
  [key: string]: JSX.Element,
} = {
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
  const route = window.location.search.replace(/\?([a-z-]+).*/, '$1');
  return SampleRouter[route] || SampleRouter['*'];
}

render(
  ApplicationWrapper,
  document.getElementById('root'),
);

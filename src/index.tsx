import { render } from 'solid-js/web';
import { JSX } from 'solid-js/jsx-runtime';

import './index.scss';

import StackTimeline from './components/StackTimeline';
import PersonalInfo from './components/PersonalInfo';
import JobHistory from './components/JobHistory';
import Repositories from './components/Repositories';
import MerchGallery from './components/MerchGallery';
import DesignPortfolio from '~components/DesignPortfolio';

const SampleRouter: {
  [key: string]: JSX.Element
} = {
  '*': (
    <>
      <PersonalInfo />
      <StackTimeline />
      <JobHistory />
      <Repositories />
      <DesignPortfolio />
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

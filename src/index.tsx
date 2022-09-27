import { render } from 'solid-js/web';
import router from './utils/router';

import './index.scss';

import StackTimeline from './components/StackTimeline';
import PersonalInfo from './components/PersonalInfo';
import JobHistory from './components/JobHistory';
import Repositories from './components/Repositories';
import MerchGallery from './components/MerchGallery';
import DesignPortfolio from '~components/DesignPortfolio';

const application = router({
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
});

render(
  application,
  document.getElementById('root'),
);

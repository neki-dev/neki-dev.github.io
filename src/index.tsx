import { render } from 'solid-js/web';
import { router } from '~util/router';

import './index.scss';

import StackTimeline from '~component/StackTimeline';
import PersonalInfo from '~component/PersonalInfo';
import JobHistory from '~component/JobHistory';
import Repositories from '~component/Repositories';
import MerchGallery from '~component/MerchGallery';
import DesignPortfolio from '~component/DesignPortfolio';

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

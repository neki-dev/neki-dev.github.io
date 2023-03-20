import { render } from 'solid-js/web';

import '~style/index.scss';

import { DevelopmentStack } from './sections/DevelopmentStack';
import { PersonalInfo } from './sections/PersonalInfo';
import { JobHistory } from './sections/JobHistory';
import { Repositories } from './sections/Repositories';
import { DesignPortfolio } from './sections/DesignPortfolio';

const app = document.getElementById('root');

if (!app) {
  throw Error('Undefined App element');
}

render(() => (
  <>
    <PersonalInfo />
    <DevelopmentStack />
    <JobHistory />
    <Repositories />
    <DesignPortfolio />
  </>
), app);

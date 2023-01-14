import { render } from 'solid-js/web';

import '~style/index.scss';

import { DevelopmentStack } from './sections/DevelopmentStack';
import { PersonalInfo } from './sections/PersonalInfo';
import { JobHistory } from './sections/JobHistory';
import { Repositories } from './sections/Repositories';
import { DesignPortfolio } from './sections/DesignPortfolio';

const root = document.getElementById('root');

render(() => (
  <>
    <PersonalInfo />
    <DevelopmentStack />
    <JobHistory />
    <Repositories />
    <DesignPortfolio />
  </>
), root);

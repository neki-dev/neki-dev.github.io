import { render } from 'solid-js/web';

import '~style/index.scss';

import { SectionStack } from './sections/stack';
import { SectionHead } from './sections/head';
import { SectionJobs } from './sections/jobs';
import { SectionRepositories } from './sections/repositories';
import { SectionDesign } from './sections/design';

const app = document.getElementById('root');

if (!app) {
  throw Error('Undefined App element');
}

render(() => (
  <>
    <SectionHead />
    <SectionStack />
    <SectionJobs />
    <SectionRepositories />
    <SectionDesign />
  </>
), app);

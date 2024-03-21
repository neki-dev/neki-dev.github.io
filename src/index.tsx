import { render } from 'solid-js/web';

import { SectionDesign } from './sections/design';
import { SectionHead } from './sections/head';
import { SectionJobs } from './sections/jobs';
import { SectionRepositories } from './sections/repositories';
import { SectionStack } from './sections/stack';

import '~style/index.scss';

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

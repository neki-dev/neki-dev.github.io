import { Component } from 'solid-js';

import { DevelopmentStack } from './sections/DevelopmentStack';
import { PersonalInfo } from './sections/PersonalInfo';
import { JobHistory } from './sections/JobHistory';
import { Repositories } from './sections/Repositories';
import { DesignPortfolio } from './sections/DesignPortfolio';

export const Home: Component = () => (
    <>
      <PersonalInfo />
      <DevelopmentStack />
      <JobHistory />
      <Repositories />
      <DesignPortfolio />
    </>
);

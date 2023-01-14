import { Component, createResource, For } from 'solid-js';

import { Repository } from '~types';
import { fetchRepositories } from '~resources';
import { Section } from '~component/Section';
import { Skeleton } from '~component/Skeleton';
import { Grid } from '~component/Grid';
import { RepositoryItem } from './RepositoryItem';

import './styles.scss';

export const Repositories: Component = () => {
  const [repositories] = createResource<Repository[]>(fetchRepositories);

  return (
    <Section class="repositories" label="Public Repositories">
      <Grid large>
        { repositories() ? (
          <For each={repositories()}>
            {RepositoryItem}
          </For>
        ) : (
          <Skeleton repeat={9} height={177} />
        )}
      </Grid>
    </Section>
  );
};

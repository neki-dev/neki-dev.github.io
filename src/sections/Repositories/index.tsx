import { Component, createResource, For } from 'solid-js';

import { Repository } from '~types';
import { fetchRepositories } from '~resources';
import { Section } from '~component/section';
import { Skeleton } from '~component/skeleton';
import { Grid } from '~component/grid';
import { RepositoryItem } from './item';

import './styles.scss';

export const SectionRepositories: Component = () => {
  const [repositories] = createResource<Repository[]>(fetchRepositories);

  return (
    <Section class="repositories" label="Repositories">
      <Grid size='medium'>
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

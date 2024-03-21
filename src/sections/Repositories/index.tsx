import { createResource, For } from 'solid-js';

import { RepositoryItem } from './item';
import { fetchRepositories } from './resources';
import { Grid } from '../../components/grid';
import { Section } from '../../components/section';
import { Skeleton } from '../../components/skeleton';

import type { Repository } from './item/types';
import type { Component } from 'solid-js';

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

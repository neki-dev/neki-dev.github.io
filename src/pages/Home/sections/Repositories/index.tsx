import { Component, createResource, For } from 'solid-js';

import { Repository } from '~types';
import { fetchRepositories } from '~resources';
import { Section } from '~component/Section';
import { Skeleton } from '~component/Skeleton';
import { RepositoryItem } from './RepositoryItem';

import './styles.scss';

export const Repositories: Component = () => {
  const [repositories] = createResource<Repository[]>(fetchRepositories);

  return (
    <Section class="repositories" label="Public Repositories">
      <div class="grid large">
        { repositories() ? (
            <For each={repositories()}>
              {RepositoryItem}
            </For>
        ) : (
          <Skeleton repeat={6} height={160} />
        )}
      </div>
    </Section>
  );
};

import { createResource, For } from 'solid-js';
import { Repository } from '~types';
import { fetchRepositories } from '~resources';
import RepositoryItem from './RepositoryItem';

import './styles.scss';

export default function Repositories() {
  const [repositories] = createResource<Repository[]>(fetchRepositories);

  return (
    <section class="repositories">
      <div class="wrapper">
        <h4>Public Repositories</h4>
        { repositories() ? (
          <div class="grid large">
            <For each={repositories()}>
              {(repository) => (
                <RepositoryItem {...repository} />
              )}
            </For>
          </div>
        ) : (
          <div class="content-plug" />
        )}
      </div>
    </section>
  );
}

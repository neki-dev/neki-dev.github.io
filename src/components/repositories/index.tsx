import { createResource, For } from 'solid-js';
import { Repository } from './types';
import { fetchRepositories } from './resources';
import RepositoryItem from './RepositoryItem';

import './styles.scss';

export default function Repositories() {
  const [repositories] = createResource<Repository[]>(fetchRepositories, {
    initialValue: [],
  });

  return (
    <section class="repositories">
      <div class="wrapper">
        <h4>Public Repositories</h4>
        { (repositories().length > 0) ? (
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

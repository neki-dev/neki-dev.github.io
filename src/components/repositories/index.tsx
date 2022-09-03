import { createResource } from 'solid-js';
import { Repository } from './types';
import RepositoryItem from './RepositoryItem';
import { fetchRepositories } from './resources';

import './styles.scss';

export default function Repositories() {
  const [repositories] = createResource<Repository[]>(fetchRepositories, {
    initialValue: [],
  });

  return (
    <section className="repositories">
      <div className="wrapper">
        <h4>Public Repositories</h4>
        { (repositories().length > 0) ? (
          <div className="grid large">
            {repositories().map((repository) => (
              <RepositoryItem {...repository} />
            ))}
          </div>
        ) : (
          <div className="content-plug" />
        )}
      </div>
    </section>
  );
}

import { createResource } from 'solid-js';
import { Package } from './types';
import PackageItem from './PackageItem';
import { formatPackageList } from './helpers';
import { ACCOUNT_USERNAME } from './defines';

import './Repositories.scss';

const fetchRepositories = () => fetch(`https://api.github.com/users/${ACCOUNT_USERNAME}/repos`)
  .then((res) => res.json())
  .then(formatPackageList);

export default function Repositories() {
  const [packages] = createResource<Package[]>(fetchRepositories, {
    initialValue: [],
  });

  return (
    <section className="repositories">
      <div className="wrapper">
        <h4>Public Repositories</h4>
        <div className="grid large">
          {packages().map((pkg: Package) => (
            <PackageItem {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

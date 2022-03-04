import { PACKAGE_LIST } from './defines';
import { Package } from './types';
import PackageItem from './PackageItem';

import './Repositories.scss';

function Repositories() {
  return (
    <section className="packages" tabIndex="0">
      <div className="wrapper">
        <h4>Public Repositories</h4>
        <div className="grid">
          {PACKAGE_LIST.map((pkg: Package) => (
            <PackageItem {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Repositories;

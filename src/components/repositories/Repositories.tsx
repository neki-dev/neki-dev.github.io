import { PACKAGE_LIST } from './defines';

import './Repositories.scss';

const ACCOUNT_USERNAME = 'essle';

function Repositories() {
  return (
    <section className="packages" tabIndex="0">
      <div className="wrapper">
        <h4>Public Repositories</h4>
        <div className="grid">
          {PACKAGE_LIST.map((pkg) => (
            <div className="container">
              <a
                href={`https://github.com/${ACCOUNT_USERNAME}/${pkg.name}`} target="_blank" className="package"
                rel="noreferrer"
              >
                <div className="name">{pkg.name}</div>
                <div className="description">{pkg.description}</div>
                <div className="langs">
                  <span className={`type ${pkg.type}`}>{pkg.type}</span>
                  {pkg.langs.map((lang) => (
                    <span>{lang}</span>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Repositories;

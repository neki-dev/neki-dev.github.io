import { Package } from './types';

import './PackageItem.scss';

const ACCOUNT_USERNAME = 'essle';

function PackageItem({
  name, description, type, langs,
}: Package) {
  const link = `https://github.com/${ACCOUNT_USERNAME}/${name}`;

  return (
    <div className="package-item">
      <a
        href={link} target="_blank" className="container"
        rel="noreferrer"
      >
        <div className="name">{name}</div>
        <div className="description">{description}</div>
        <div className="langs">
          <span className={`type ${type}`}>{type}</span>
          {langs.map((lang) => (
            <span>{lang}</span>
          ))}
        </div>
      </a>
    </div>
  );
}

export default PackageItem;

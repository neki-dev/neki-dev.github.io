import { Repository } from '~components/Repositories/types';
import { ACCOUNT_USERNAME } from '~components/Repositories/defines';

import './RepositoryItem.scss';

export default function RepositoryItem({
  name, description, type, lang, forks, likes,
}: Repository) {
  const link = `https://github.com/${ACCOUNT_USERNAME}/${name}`;

  return (
    <div className="repository-item">
      <a
        href={link} target="_blank" className="container"
        rel="noreferrer"
      >
        <div className="name">{name}</div>
        <div className="description">
          {description}
        </div>
        <div className="meta">
          <div className="marks">
            <span className={`type ${type}`}>{type}</span>
            {lang && (
              <span>{lang}</span>
            )}
          </div>
          <div className="data">
            <div className="count forks">{forks}</div>
            <div className="count likes">{likes}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

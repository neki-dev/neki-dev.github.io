import { Repository } from '~components/Repositories/types';
import { ACCOUNT_USERNAME } from '~components/Repositories/defines';

import './RepositoryItem.scss';

export default function RepositoryItem({
  name, description, sign, lang, forks, likes, dateCreate,
}: Repository) {
  const link = `https://github.com/${ACCOUNT_USERNAME}/${name}`;
  const linkFork = `https://github.com/${ACCOUNT_USERNAME}/${name}/fork`;

  return (
    <div className="repository-item">
      <div className="container">
        <a
          href={link} target="_blank" rel="noreferrer"
          className="name" title="Open repository"
        >
          {sign}
          {' '}
          {name}
        </a>
        <div className="description">
          {description}
        </div>
        <div className="meta">
          <div className="lang">{lang}</div>
          <div className="date">{dateCreate}</div>
          <a
            href={linkFork} target="_blank" rel="noreferrer"
            className="count forks" title="Fork repository"
          >
            {forks}
          </a>
          <div className="count likes">{likes}</div>
        </div>
      </div>
    </div>
  );
}

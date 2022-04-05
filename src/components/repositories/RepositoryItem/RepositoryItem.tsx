import { Repository } from '~components/Repositories/types';
import { ACCOUNT_URL } from '~components/Repositories/defines';

import './RepositoryItem.scss';
import IconFork from './images/icons/fork.svg';
import IconLike from './images/icons/like.svg';

export default function RepositoryItem({
  name, description, sign, lang, forks, likes, dateCreate,
}: Repository) {
  const link = `${ACCOUNT_URL}/${name}`;
  const linkFork = `${ACCOUNT_URL}/${name}/fork`;

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
            <IconFork />
            {forks}
          </a>
          <div className="count likes">
            <IconLike />
            {likes}
          </div>
        </div>
      </div>
    </div>
  );
}

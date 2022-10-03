import { Repository } from '~components/Repositories/types';
import { ACCOUNT_URL } from '~components/Repositories/defines';

import './styles.scss';
import IconFork from './images/icons/fork.svg';
import IconLike from './images/icons/like.svg';
import IconDownload from './images/icons/download.svg';

export default function RepositoryItem({
  name, description, sign, lang, forks, likes, downloads, dateCreate,
}: Repository) {
  const link = `${ACCOUNT_URL}/${name}`;
  const linkFork = `${ACCOUNT_URL}/${name}/fork`;

  return (
    <div class="repository-item">
      <div class="container">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          class="name"
          title="Open repository"
        >
          {sign}
          {' '}
          {name}
        </a>
        <div class="description">
          {description}
        </div>
        <div class="meta">
          <div class="lang">{lang}</div>
          <div class="date">{dateCreate}</div>
          <a
            href={linkFork}
            target="_blank"
            rel="noreferrer"
            class="count forks"
            title="Fork repository"
          >
            <IconFork />
            {forks}
          </a>
          <div class="count likes">
            <IconLike />
            {likes}
          </div>
          { (downloads !== undefined) && (
            <div class="count downloads">
              <IconDownload />
              {downloads}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

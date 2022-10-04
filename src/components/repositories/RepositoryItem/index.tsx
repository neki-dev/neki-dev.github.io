import { Repository } from '~types';

import IconFork from './images/icons/fork.svg';
import IconLike from './images/icons/like.svg';
import IconDownload from './images/icons/download.svg';

import './styles.scss';

const ACCOUNT_USERNAME = 'neki-dev';

export default function RepositoryItem({
  name, description, sign, lang, forks, likes, downloads, dateCreate,
}: Repository) {
  const link = `https://github.com/${ACCOUNT_USERNAME}/${name}`;
  const linkFork = `https://github.com/${ACCOUNT_USERNAME}/${name}/fork`;

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
            title="Forks"
          >
            <IconFork />
            {forks}
          </a>
          <div class="count likes" title="Likes">
            <IconLike />
            {likes}
          </div>
          { (downloads !== undefined) && (
            <div class="count downloads" title="Downloads per last month">
              <IconDownload />
              {downloads}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

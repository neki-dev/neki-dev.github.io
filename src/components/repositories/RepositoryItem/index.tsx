import { Repository } from '~types';
import { ACCOUNT_USERNAME } from '~data';

import IconFork from './images/icons/fork.svg';
import IconLike from './images/icons/like.svg';
import IconDownload from './images/icons/download.svg';

import './styles.scss';

export default function RepositoryItem({
  name, description, sign, lang, forks, likes, downloads, dateCreate,
}: Repository) {
  return (
    <div class="repository-item">
      <div class="container">
        <a
          href={`https://github.com/${ACCOUNT_USERNAME}/${name}`}
          target="_blank"
          class="link"
          aria-label={name}
        />
        <div class="name">
          {sign}
          {' '}
          {name}
        </div>
        <div class="description">
          {description}
        </div>
        <div class="meta">
          <div class="lang">{lang}</div>
          <div class="date">{dateCreate}</div>
          <div class="count forks" title="Forks">
            <IconFork />
            {forks}
          </div>
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

import { Component } from 'solid-js';

import { Repository } from '~types';
import { ACCOUNT_USERNAME } from '~data';

import IconFork from './images/icons/fork.svg';
import IconLike from './images/icons/like.svg';
import IconDownload from './images/icons/download.svg';

import './styles.scss';

export const RepositoryItem: Component<Repository> = (props) => (
  <div class="repository-item">
    <div class="container">
      <a
        href={`https://github.com/${ACCOUNT_USERNAME}/${props.name}`}
        target="_blank"
        class="link"
        aria-label={props.name}
      />
      <div class="head">
        <div class="sign">{props.sign}</div>
        <div class="info">
          <div class="type">{props.type}</div>
          <div class="name">{props.name}</div>
        </div>
      </div>
      <div class="description">
        {props.description}
      </div>
      <div class="meta">
        <div class="lang">{props.lang}</div>
        <div class="date">{props.dateCreate}</div>
        <div class="count likes" title="Likes">
          <IconLike />
          {props.likes}
        </div>
        <div class="count forks" title="Forks">
          <IconFork />
          {props.forks}
        </div>
        {(props.downloads !== undefined) && (
          <div class="count downloads" title="Downloads per last month">
            <IconDownload />
            {props.downloads}
          </div>
        )}
      </div>
    </div>
  </div>
);

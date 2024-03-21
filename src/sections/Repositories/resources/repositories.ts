import emojiRegex from 'emoji-regex';

import { fetchPackagesDownloads } from './packages-downloads';

import type { UnformattedRepository } from './types';
import type { Repository } from '../item/types';

const ACCOUNT_USERNAME = 'neki-dev';
const EMOJI_IGNORE = ['🥷🏼', '⛔'];
const EMOJI_REGEX = emojiRegex();
const TYPE_BY_SIGN: Record<string, string> = {
  '🎲': 'Game',
  '🧩': 'Library',
  '⚙️': 'Utils',
  '📟': 'Server',
};

function parseDate(date: string): string {
  const [, month, , year] = new Date(date).toDateString().split(' ');

  return `${month} '${year.substring(2)}`;
}

function parseRepository(item: UnformattedRepository): Repository {
  const [sign] = item.description.match(EMOJI_REGEX) || [];
  const ignored = EMOJI_IGNORE.some((emoji) => item.description.includes(emoji));

  return {
    name: item.name,
    lang: item.language?.replace(/[a-z]+/g, ''),
    sign,
    description: item.description.replaceAll(EMOJI_REGEX, ''),
    forks: item.forks_count,
    likes: item.stargazers_count,
    dateCreate: parseDate(item.created_at),
    ignored,
    type: (sign && TYPE_BY_SIGN[sign]) ?? 'Untyped',
  };
}

export async function fetchRepositories(): Promise<Repository[]> {
  return fetch(`https://api.github.com/users/${ACCOUNT_USERNAME}/repos`)
    .then((res) => res.json())
    .then(async (res: UnformattedRepository[]) => {
      const repositories = res
        .filter((repository) => !repository.fork)
        .map(parseRepository)
        .filter((repository) => !repository.ignored)
        .sort((a, b) => (b.likes * 2 + b.forks) - (a.likes * 2 + a.forks));

      const downloads = await fetchPackagesDownloads(repositories);

      for (const repository of repositories) {
        if (downloads[repository.name] !== undefined) {
          repository.downloads = downloads[repository.name];
        }
      }

      return repositories;
    });
}

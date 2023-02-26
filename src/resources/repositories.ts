import emojiRegex from 'emoji-regex';
import { Repository, UnformattedRepository } from '~types';
import { fetchPackagesDownloads } from './packages-downloads';

const ACCOUNT_USERNAME = 'neki-dev';

const EMOJI_IGNORE = ['🥷🏼', '⛔'];
const EMOJI_REGEX = emojiRegex();

function parseDate(date: string): string {
  const [, month, , year] = new Date(date).toDateString().split(' ');

  return `${month} '${year.substring(2)}`;
}

function parseRepository(item: UnformattedRepository): Repository {
  const signs = item.description.match(EMOJI_REGEX) || [];

  return {
    name: item.name,
    lang: item.language?.replace(/[a-z]+/g, ''),
    sign: signs[0],
    description: item.description.replaceAll(EMOJI_REGEX, ''),
    forks: item.forks_count,
    likes: item.stargazers_count,
    dateCreate: parseDate(item.created_at),
    ignored: signs.some((sign) => EMOJI_IGNORE.includes(sign)),
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
        .sort((a, b) => ((b.likes * 2 + b.forks) - (a.likes * 2 + a.forks)));

      const downloads = await fetchPackagesDownloads(repositories);

      for (const repository of repositories) {
        if (downloads[repository.name] !== undefined) {
          repository.downloads = downloads[repository.name];
        }
      }

      return repositories;
    });
}

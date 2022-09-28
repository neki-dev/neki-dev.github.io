import emojiRegex from 'emoji-regex';
import { Repository } from './types';
import { ACCOUNT_USERNAME } from './defines';

type UnformattedRepository = {
  name: string
  language?: string
  description: string
  forks_count: number
  stargazers_count: number
  created_at: string
};

const IGNORED_SINGS = ['🥷🏼', '⛔'];

function parseDate(date: string): string {
  const [, month, , year] = new Date(date).toDateString().split(' ');
  return `${month} '${year.substring(2)}`;
}

function parseRepository(item: UnformattedRepository): Repository {
  const regex = emojiRegex();
  const signs = item.description.match(regex) || [];

  return {
    name: item.name,
    lang: item.language?.replace(/[a-z]+/g, ''),
    sign: signs[0],
    description: item.description.replaceAll(regex, ''),
    forks: item.forks_count,
    likes: item.stargazers_count,
    dateCreate: parseDate(item.created_at),
    ignored: signs.some((sign) => IGNORED_SINGS.includes(sign)),
  };
}

export async function fetchRepositories(): Promise<Repository[]> {
  return fetch(`https://api.github.com/users/${ACCOUNT_USERNAME}/repos`)
    .then((res) => res.json())
    .then((res) => {
      let repositories: Repository[] = res.map(parseRepository);
      repositories = repositories
        .filter((repository) => !repository.ignored)
        .sort((a, b) => (b.likes - a.likes));

      return repositories;
    });
}

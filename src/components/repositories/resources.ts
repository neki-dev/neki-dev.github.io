import emojiRegex from 'emoji-regex';
import { ACCOUNT_USERNAME } from './defines';
import { Repository } from './types';

type UnformattedRepository = {
  name: string
  language?: string
  description: string
  forks_count: number
  stargazers_count: number
  created_at: string
};

type UnformattedPackageDownloads = {
  package: string
  downloads: Array<{
    day: string
    downloads: number
  }>
};

type PackageDownloads = {
  [key in string]: number
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

async function fetchPackagesDownloads(repositories: Repository[]): Promise<PackageDownloads> {
  const allNames = repositories.map((repository) => repository.name).join(',');

  return fetch(`https://api.npmjs.org/downloads/range/last-month/${allNames}`)
    .then((res) => res.json())
    .then((res) => {
      const meta = Object.values(res).filter((data) => data) as UnformattedPackageDownloads[];

      return meta.reduce((curr, item) => ({
        ...curr,
        [item.package]: item.downloads.reduce((total, info) => (total + info.downloads), 0),
      }), {});
    });
}

export async function fetchRepositories(): Promise<Repository[]> {
  return fetch(`https://api.github.com/users/${ACCOUNT_USERNAME}/repos`)
    .then((res) => res.json())
    .then(async (res) => {
      let repositories: Repository[] = res.map(parseRepository);
      repositories = repositories
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

import { Repository, RepositoryType } from './types';
import { ACCOUNT_USERNAME } from './defines';

type UnformattedRepository = {
  name: string
  language?: string
  description: string
  forks_count: number
  stargazers_count: number
  created_at: string
};

const DEPRECATED_SIGN = '⛔ Deprecated';

function parseDate(date: string): string {
  const [, month, , year] = new Date(date).toDateString().split(' ');
  return `${month} '${year.substring(2)}`;
}

function parseRepository(item: UnformattedRepository): Repository {
  const repository: Repository = {
    name: item.name,
    lang: item.language,
    sign: RepositoryType.LIB,
    description: item.description,
    forks: item.forks_count,
    likes: item.stargazers_count,
    dateCreate: parseDate(item.created_at),
  };

  const signMatch = repository.description.match(/(^\W+)/);
  if (signMatch) {
    repository.sign = signMatch[0].trim();
    repository.description = repository.description.replace(signMatch[0], '');
  }

  if (repository.description.includes(DEPRECATED_SIGN)) {
    // @ts-ignore
    repository.description = (
      <>
        {repository.description.replace(DEPRECATED_SIGN, '')}
        <span>{DEPRECATED_SIGN}</span>
      </>
    );
  }

  return repository;
}

export function fetchRepositories(): Promise<Repository[]> {
  return fetch(`https://api.github.com/users/${ACCOUNT_USERNAME}/repos`)
    .then((res) => res.json())
    .then((res) => (
      res.map(parseRepository)
        .filter((repository: Repository) => (repository.sign !== RepositoryType.PRIVATE))
    ));
}

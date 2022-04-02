import { Repository, RepositoryType } from './types';
import { ACCOUNT_USERNAME } from './defines';

type UnformattedRepository = {
  name: string
  language?: string
  description: string
  forks_count: number
  stargazers_count: number
};

const DEPRECATED_SIGN = '⛔ Deprecated';
const TYPES_SIGN = {
  '🥷🏼': RepositoryType.PRIVATE,
  '🎲': RepositoryType.GAME,
  '⚡': RepositoryType.LIB,
  '🛠': RepositoryType.FRAMEWORK,
};

function parseRepository(item: UnformattedRepository): Repository {
  const repository: Repository = {
    name: item.name,
    lang: item.language,
    type: RepositoryType.LIB,
    description: item.description,
    forks: item.forks_count,
    likes: item.stargazers_count,
  };

  Object.entries(TYPES_SIGN).forEach(([sign, type]) => {
    if (repository.description.includes(sign)) {
      repository.type = type;
    }
  });

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
        .filter((repository: Repository) => (repository.type !== RepositoryType.PRIVATE))
    ));
}

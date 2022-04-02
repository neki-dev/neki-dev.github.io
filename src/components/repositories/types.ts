export enum RepositoryType {
  PRIVATE = 'private',
  FRAMEWORK = 'framework',
  LIB = 'lib',
  GAME = 'game',
}

export type Repository = {
  name: string
  description: string
  type: RepositoryType
  lang?: string
  forks: number
  likes: number
};

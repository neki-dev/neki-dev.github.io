export enum RepositoryType {
  PRIVATE = '🥷🏼',
  FRAMEWORK = '🛠',
  LIB = '⚡',
  GAME = '🎲',
}

export type Repository = {
  name: string
  description: string
  sign: string
  lang?: string
  forks: number
  likes: number
  dateCreate: string
};

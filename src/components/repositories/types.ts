export enum PackageType {
  PRIVATE = 'private',
  FRAMEWORK = 'framework',
  LIB = 'lib',
  GAME = 'game',
}

export type Package = {
  name: string
  description: string
  type: PackageType
  lang?: string
  forks: number
  likes: number
};

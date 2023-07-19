export type UnformattedRepository = {
  name: string
  fork: boolean
  language?: string
  description: string
  forks_count: number
  stargazers_count: number
  created_at: string
};

export type Repository = {
  name: string
  description: string
  sign?: string
  ignored?: boolean
  lang?: string
  downloads?: number
  forks: number
  likes: number
  dateCreate: string
  type: string
};

export type UnformattedPackageDownloads = {
  package: string
  downloads: Array<{
    day: string
    downloads: number
  }>
};

export type PackageDownloads = {
  [key in string]: number
};

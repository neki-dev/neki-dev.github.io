export type UnformattedRepository = {
  name: string
  fork: boolean
  language?: string
  description: string
  forks_count: number
  stargazers_count: number
  created_at: string
};

export type UnformattedPackageDownloads = {
  package: string
  downloads: Array<{
    day: string
    downloads: number
  }>
};


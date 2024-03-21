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

export type PackageDownloads = {
  [key in string]: number
};

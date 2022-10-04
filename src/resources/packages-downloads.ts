import { PackageDownloads, Repository, UnformattedPackageDownloads } from '~types';

export async function fetchPackagesDownloads(
  repositories: Repository[],
): Promise<PackageDownloads> {
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

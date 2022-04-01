import { Package, PackageType } from './types';

type UnformattedPackage = {
  name: string
  language?: string
  description: string
  forks_count: number
  stargazers_count: number
};

const DEPRECATED_SIGN = '⛔ Deprecated';
const TYPES_SIGN = {
  '🥷🏼': PackageType.PRIVATE,
  '🎲': PackageType.GAME,
  '⚡': PackageType.LIB,
  '🛠': PackageType.FRAMEWORK,
};

// eslint-disable-next-line import/prefer-default-export
export function formatPackageList(res: UnformattedPackage[]): Package[] {
  return res.map((repository) => {
    const pkg: Package = {
      name: repository.name,
      lang: repository.language,
      type: PackageType.LIB,
      description: repository.description,
      forks: repository.forks_count,
      likes: repository.stargazers_count,
    };

    Object.entries(TYPES_SIGN).forEach(([sign, type]) => {
      if (pkg.description.includes(sign)) {
        pkg.type = type;
      }
    });

    if (pkg.description.includes(DEPRECATED_SIGN)) {
      pkg.description = (
        <>
          {pkg.description.replace(DEPRECATED_SIGN, '')}
          <span>{DEPRECATED_SIGN}</span>
        </>
      );
    }

    return pkg;
  }).filter((pkg) => (pkg.type !== PackageType.PRIVATE));
}

import { Package } from './types';

export const getTypeFromIdentifier = (code: string) => {
	switch (code) {
		case '\u2B50': return 'framework';
		case '\u26A1': return 'lib';
		case '\uD83C\uDFB2': return 'game';
		default: return 'other';
	}
};

export const formatPackageList = (list: any[]): Package[] => {
	return list.map((item: any) => {
		const [identifier, ...description] = item.description.split(' ');
		return {
			name: item.name,
			description: description.join(' '),
			url: item.html_url,
			type: getTypeFromIdentifier(identifier),
		};
	});
};
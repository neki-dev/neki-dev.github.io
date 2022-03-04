import { PACKAGE_LIST } from './defines';

import './Repositories.scss';

const ACCOUNT_USERNAME = 'essle';

function Repositories() {
	return (
		<section class="packages" tabIndex="0">
			<div class="wrapper">
				<h4>Public Repositories</h4>
				<div class="grid">
					{PACKAGE_LIST.map((pkg) => (
						<div class="container">
							<a href={`https://github.com/${ACCOUNT_USERNAME}/${pkg.name}`} target="_blank" class="package">
								<div class="name">{pkg.name}</div>
								<div class="description">{pkg.description}</div>
								<div class="langs">
									<span class={`type ${pkg.type}`}>{pkg.type}</span>
									{pkg.langs.map((lang) => (
										<span>{lang}</span>
									))}
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Repositories;
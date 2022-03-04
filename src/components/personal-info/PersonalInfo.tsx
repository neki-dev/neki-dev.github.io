import useScrollProgress from "../../hooks/use-scroll-progress";
import { SOCIAL_CONTACTS } from "./defines";

import './PersonalInfo.scss';

function PersonalInfo() {
	let refSection: HTMLElement;
	let refContent: HTMLDivElement;

	useScrollProgress(() => refSection, (progress: number) => {
		refSection.style.backgroundPositionY = `${progress * 300}px`;
		refContent.style.transform = `translateY(${progress * 200}px)`;
	});

	return (
		<section ref={refSection} class="personal-info" tabIndex="0">
			<div class="wrapper">
				<div class="me"></div>
				<div ref={refContent} class="content">
					<div class="logotype"></div>
					<div class="name">
						<h1>Nikita Galadiy</h1>
						<h2>Full-Stack Developer</h2>
						<span class="location">Russia, Saint-Petersburg</span>
					</div>
					<div class="contacts">
						{SOCIAL_CONTACTS.map((contact) => (
							<a href={contact.link} target="_blank" class={contact.name.toLocaleLowerCase()} title={contact.name} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default PersonalInfo;
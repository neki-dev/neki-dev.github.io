import useScrollProgress from '../../hooks/use-scroll-progress';
import { SOCIAL_CONTACTS } from './defines';

import './PersonalInfo.scss';

function PersonalInfo() {
  let refSection: HTMLElement;
  let refContent: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refSection.style.backgroundPositionY = `${progress * 300}px`;
    refContent.style.transform = `translateY(${progress * 200}px)`;
  });

  return (
    <section ref={refSection} className="personal-info" tabIndex="0">
      <div className="wrapper">
        <div className="me" />
        <div ref={refContent} className="content">
          <div className="logotype" />
          <div className="name">
            <h1>Nikita Galadiy</h1>
            <h2>Full-Stack Developer</h2>
            <span className="location">Russia, Saint-Petersburg</span>
          </div>
          <div className="contacts">
            {SOCIAL_CONTACTS.map((contact) => (
              <a
                href={contact.link} target="_blank" className={contact.name.toLocaleLowerCase()}
                title={contact.name} rel="noreferrer" aria-label={contact.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;

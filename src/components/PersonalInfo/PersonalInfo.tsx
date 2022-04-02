import useScrollProgress from '../../hooks/use-scroll-progress';
import { SOCIAL_CONTACTS } from './defines';
import { SocialContact } from './types';
import ContactItem from './ContactItem';

import './PersonalInfo.scss';

export default function PersonalInfo() {
  let refSection: HTMLElement;
  let refContent: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refSection.style.backgroundPositionY = `${progress * 300}px`;
    refContent.style.transform = `translateY(${progress * 200}px)`;
  });

  return (
    <section ref={refSection} className="personal-info">
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
            {SOCIAL_CONTACTS.map((contact: SocialContact) => (
              <ContactItem {...contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

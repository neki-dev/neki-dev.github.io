import { For } from 'solid-js';
import { useScrollProgress } from '../../hooks/use-scroll-progress';
import { SOCIAL_CONTACTS } from './defines';
import ContactItem from './ContactItem';

import './styles.scss';

export default function PersonalInfo() {
  let refSection: HTMLElement;
  let refContent: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refSection.style.backgroundPositionY = `${progress * 300}px`;
    refContent.style.transform = `translateY(${progress * 200}px)`;
  });

  return (
    <section ref={refSection} class="personal-info">
      <div class="wrapper">
        <div class="me" />
        <div ref={refContent} class="content">
          <div class="logotype" />
          <div class="name">
            <h1>Nikita Galadiy</h1>
            <h2>Full-Stack Developer</h2>
            <span class="location">Russia, Saint-Petersburg</span>
          </div>
          <div class="contacts">
            <For each={SOCIAL_CONTACTS}>{(contact) => (
              <ContactItem {...contact} />
            )}</For>
          </div>
        </div>
      </div>
    </section>
  );
}

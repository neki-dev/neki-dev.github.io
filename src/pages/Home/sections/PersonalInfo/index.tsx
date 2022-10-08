import { Component, For } from 'solid-js';

import { useScrollProgress } from '~hooks';
import { SOCIAL_CONTACTS } from '~data';
import { Section } from '~component/Section';
import { ContactItem } from './ContactItem';

import './styles.scss';

export const PersonalInfo: Component = () => {
  let refSection: HTMLElement;
  let refContent: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refSection.style.backgroundPositionY = `${progress * 350}px`;
    refContent.style.transform = `translateY(${progress * 250}px)`;
  });

  return (
    <Section ref={refSection} class="personal-info">
      <div class="me" />
      <div ref={refContent} class="content">
        <div class="logotype" />
        <div class="name">
          <h1>Nikita Galadiy</h1>
          <h2>Web Developing &&nbsp;Design</h2>
        </div>
        <div class="contacts">
          <For each={SOCIAL_CONTACTS}>
              {ContactItem}
          </For>
        </div>
      </div>
    </Section>
  );
};

import { Component, For } from 'solid-js';
import cn from 'classnames';

import { useScrollProgress } from '~hooks';
import { SOCIAL_CONTACTS } from '~data';
import { Section } from '~component/Section';
import { ContactItem } from './ContactItem';

import './styles.scss';

const parallaxLayers = {
  'geom-a': 400,
  'geom-b': 300,
};

export const PersonalInfo: Component = () => {
  const refLayers: Record<string, HTMLElement> = {};
  let refSection!: HTMLElement;
  let refMe!: HTMLDivElement;
  let refContent!: HTMLDivElement;

  useScrollProgress(() => refSection, (progress: number) => {
    refMe.style.transform = `translateY(${progress * 150}px)`;
    refContent.style.transform = `translateY(${progress * 350}px)`;

    for (const [key, move] of Object.entries(parallaxLayers)) {
      refLayers[key].style.backgroundPositionY = `${progress * move}px`;
    }
  });

  return (
    <Section
      ref={refSection}
      class="personal-info"
      layers={
        <For each={Object.keys(parallaxLayers)}>
          {(key) => (
            <div
              class={cn('parallax-layer', key)}
              ref={(layer) => {
                refLayers[key] = layer;
              }}
            />
          )}
        </For>
      }
    >
      <div ref={refMe} class="me" />
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

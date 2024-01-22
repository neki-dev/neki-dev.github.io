import { Component, For } from 'solid-js';
import cn from 'classnames';

import { useScrollProgress } from '~hooks';
import { SOCIAL_CONTACTS } from '~data';
import { Section } from '~component/section';
import { ContactItem } from './contact';

import './styles.scss';

export const SectionHead: Component = () => {
  const refLayers: Record<string, HTMLElement> = {};
  let refSection!: HTMLElement;
  let refMe!: HTMLDivElement;
  let refContent!: HTMLDivElement;

  const parallaxLayers = [
    { key: 'geom-a', speed: 400 },
    { key: 'geom-b', speed: 300 },
  ];

  useScrollProgress(() => refSection, (progress: number) => {
    refMe.style.transform = `translateY(${progress * 150}px)`;
    refContent.style.transform = `translateY(${progress * 350}px)`;

    for (const { key, speed } of parallaxLayers) {
      refLayers[key].style.backgroundPositionY = `${progress * speed}px`;
    }
  });

  return (
    <Section
      ref={refSection}
      class="personal-info"
      layers={
        <For each={parallaxLayers}>
          {({ key }) => (
            <div
              class={cn('parallax-layer', key)}
              ref={(ref) => {
                refLayers[key] = ref;
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
          <h2>Senior&nbsp;Web&nbsp;Developer</h2>
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

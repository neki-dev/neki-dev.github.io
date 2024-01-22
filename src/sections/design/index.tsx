import { Component, createSignal, Index } from 'solid-js';

import { DESIGNS } from '~data';
import { Section } from '~component/section';
import { DesignItem } from './item';

import './styles.scss';

export const SectionDesign: Component = () => {
  const [currentImage, setCurrentImage] = createSignal<number>(0);

  return (
    <Section class="design-portfolio" label="Design portfolio">
      <div class="images">
        <div class="current">
          <div class="image-wrapper">
            <img src={DESIGNS[currentImage()][0]} alt="" />
          </div>
        </div>
        <div class="all">
          <Index each={DESIGNS}>
            { (item, index) => (
              <DesignItem
                image={item()[0]}
                name={item()[1]}
                isActive={index === currentImage()}
                onClick={() => setCurrentImage(index)}
              />
            ) }
          </Index>
        </div>
      </div>
    </Section>
  );
};

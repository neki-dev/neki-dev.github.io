import { Component, createSignal, Index } from 'solid-js';

import { DESIGNS } from '~data';
import { Section } from '~component/Section';
import { DesignItem } from './DesignItem';

import './styles.scss';

export const DesignPortfolio: Component = () => {
  let refSection: HTMLElement;

  const [currentImage, setCurrentImage] = createSignal<number>(0);

  return (
    <Section ref={refSection} class="design-portfolio" label="Design portfolio">
      <div class="images">
        <div class="current">
          <div class="image-wrapper">
            <img src={DESIGNS[currentImage()]} alt="" />
          </div>
        </div>
        <div class="all">
          <Index each={DESIGNS}>
            { (image, index) => (
              <DesignItem
                image={image()}
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

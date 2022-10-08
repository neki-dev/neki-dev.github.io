import { Component, createSignal, Index } from 'solid-js';

import { useCatchDisplay } from '~hooks';
import { DESIGNS } from '~data';
import { Section } from '~component/Section';
import { Skeleton } from '~component/Skeleton';
import { DesignItem } from './DesignItem';

import './styles.scss';

export const DesignPortfolio: Component = () => {
  let refSection: HTMLElement;

  const [currentImage, setCurrentImage] = createSignal<number>(0);
  const [isSectionVisible, setSectionVisible] = createSignal<boolean>(false);

  useCatchDisplay(() => refSection, () => {
    setSectionVisible(true);
  });

  return (
    <Section ref={refSection} class="design-portfolio" label="Design portfolio">
      <div class="images">
        <div class="current">
          { isSectionVisible() ? (
            <div class="image-wrapper">
              <img src={DESIGNS[currentImage()]} alt="" />
            </div>
          ) : (
            <Skeleton height={370} inverse />
          )}
        </div>
        <div class="all">
          { isSectionVisible() ? (
          <Index each={DESIGNS}>
            { (image, index) => (
              <DesignItem
                image={image()}
                isActive={index === currentImage()}
                onClick={() => setCurrentImage(index)}
              />
            ) }
          </Index>
          ) : (
            <Skeleton repeat={15} height={80} inverse />
          )}
        </div>
      </div>
    </Section>
  );
};

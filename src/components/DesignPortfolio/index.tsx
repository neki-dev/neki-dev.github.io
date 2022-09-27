import { createSignal, Index } from 'solid-js';
import { useCatchDisplay } from '~root/hooks/use-catch-display';
import DesignItem from './DesignItem';

import DESIGNS from './images/designs';

import './styles.scss';

export default function DesignPortfolio() {
  let refSection: HTMLElement;
  const [currentImage, setCurrentImage] = createSignal<number>(0);
  const [isSectionVisible, setSectionVisible] = createSignal<boolean>(false);

  useCatchDisplay(() => refSection, () => {
    setSectionVisible(true);
  });

  return (
    <section ref={refSection} class="design-portfolio">
      <div class="wrapper">
        <h4>Design portfolio</h4>
        { isSectionVisible() ? (
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
                    isActive={() => (index === currentImage())}
                    onClick={() => setCurrentImage(index)}
                  />
                ) }
              </Index>
            </div>
          </div>
        ) : (
          <div class="content-plug" />
        )}
      </div>
    </section>
  );
}

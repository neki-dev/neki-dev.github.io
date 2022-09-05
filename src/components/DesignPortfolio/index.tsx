import { createSignal } from 'solid-js';
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
    <section ref={refSection} className="design-portfolio">
      <div className="wrapper">
        <h4>Design portfolio</h4>
        { isSectionVisible() ? (
          <div className="images">
            <div className="current">
              <div className="image-wrapper">
                <img src={DESIGNS[currentImage()]} alt="" />
              </div>
            </div>
            <div className="all">
              { DESIGNS.map((image, index) => (
                <DesignItem
                  image={image}
                  isActive={() => (index === currentImage())}
                  onClick={() => setCurrentImage(index)}
                />
              )) }
            </div>
          </div>
        ) : (
          <div className="content-plug" />
        )}
      </div>
    </section>
  );
}

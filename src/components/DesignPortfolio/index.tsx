import { createSignal } from 'solid-js';
import useDisplayState from '~root/hooks/use-display-state';
import DesignItem from './DesignItem';

import DESIGNS from './images/designs';

import './styles.scss';

export default function DesignPortfolio() {
  let refSection: HTMLElement;
  const [currentImage, setCurrentImage] = createSignal<number>(0);
  const sectionIsVisible = useDisplayState(() => refSection);

  return (
    <section ref={refSection} className="design-portfolio">
      <div className="wrapper">
        <h4>Design portfolio</h4>
        { sectionIsVisible() ? (
          <div className="images">
            <div className="current">
              <img src={DESIGNS[currentImage()]} alt="" />
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

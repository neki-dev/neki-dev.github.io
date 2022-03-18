import { createSignal } from 'solid-js';

import { getPrintUUID } from './helpers';
import { PrintVariant } from './types';
import printList from './images/print';

import './MerchGallery.scss';

const printNames = Object.keys(printList);

export default function MerchGallery() {
  const [model, setModel] = createSignal<string>(printNames[0]);
  const [variant, setVariant] = createSignal<number>(0);

  const updateModel = (name: string) => {
    setVariant(0);
    setModel(name);
  };

  return (
    <section className="merch-gallery" tabIndex="0">
      <div className="selectors">
        <div className="model-selector">
          {printNames.map((name) => (
            <div className={`model ${(name === model()) ? 'active' : ''}`} onClick={() => updateModel(name)}>{name}</div>
          ))}
        </div>
        <div className="variant-selector">
          {printList[model()].map((type, index) => (
            <div className="variant" onClick={() => setVariant(index)}>
              <div className={`box ${(index === variant()) ? 'active' : ''}`}>
                <div style={{ 'background-color': type.base.hex }} />
                <div style={{ 'background-color': type.print.hex }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="base" style={{ 'background-image': `url(${printList[model()][variant()].base.url})` }}>
        <div className="print" style={{ 'background-image': `url(${printList[model()][variant()].print.url})` }} />
      </div>
      <div className="print-uuid">
        {getPrintUUID(model(), printList[model()][variant()])}
      </div>
    </section>
  );
}

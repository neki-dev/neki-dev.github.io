import { createSignal } from 'solid-js';

import { PrintVariant } from './types';
import prints from './images/print';

import './MerchGallery.scss';

export default function MerchGallery() {
  const [model, setModel] = createSignal<number>(0);
  const [variant, setVariant] = createSignal<number>(0);

  function changeModel(index: number) {
    setVariant(0);
    setModel(index);
  }

  function getSourceImage(type: keyof PrintVariant) {
    return prints[model()].variants[variant()][type].url;
  }

  function getPrintUUID() {
    const modelKey = prints[model()].name.toUpperCase().replace(/[\sEYUIOA]/g, '');
    const { base, print } = prints[model()].variants[variant()];
    return [modelKey, base.name, print.name].join('-');
  }

  return (
    <section className="merch-gallery">
      <div className="selectors">
        <div className="model-selector">
          {prints.map(({ name }, index) => (
            <div
              className={`model ${(index === model()) ? 'active' : ''}`}
              onClick={() => changeModel(index)}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="variant-selector">
          {prints[model()].variants.map(({ base, print }, index) => (
            <div className="variant" onClick={() => setVariant(index)}>
              <div className={`box ${(index === variant()) ? 'active' : ''}`}>
                <div style={{ 'background-color': base.hex }} />
                <div style={{ 'background-color': print.hex }} />
              </div>
            </div>
          ))}
        </div>
        <div className="print-uuid">
          {getPrintUUID()}
        </div>
      </div>
      <div className="base" style={{ 'background-image': `url(${getSourceImage('base')})` }}>
        <div className="print" style={{ 'background-image': `url(${getSourceImage('print')})` }} />
      </div>
    </section>
  );
}

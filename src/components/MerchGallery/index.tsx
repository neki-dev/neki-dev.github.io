import { createSignal, Index } from 'solid-js';
import { PrintVariant } from '~types';

import PRINTS from './images/print';

import './styles.scss';

export default function MerchGallery() {
  const [model, setModel] = createSignal<number>(0);
  const [variant, setVariant] = createSignal<number>(0);

  function changeModel(index: number) {
    setVariant(0);
    setModel(index);
  }

  function getSourceImage(type: keyof PrintVariant) {
    return PRINTS[model()]?.variants[variant()]?.[type].url;
  }

  function getPrintUUID() {
    const modelKey = PRINTS[model()].name.toUpperCase().replace(/[\sEYUIOA]/g, '');
    const { base, print } = PRINTS[model()].variants[variant()];
    return [modelKey, base.name, print.name].join('-');
  }

  return (
    <section class="merch-gallery">
      <div class="selectors">
        <div class="model-selector">
          <Index each={PRINTS}>
            {(item, index) => (
              <div
                class={`model ${(index === model()) ? 'active' : ''}`}
                onClick={() => changeModel(index)}
              >
                {item().name}
              </div>
            )}
          </Index>
        </div>
        <div class="variant-selector">
          <Index each={PRINTS[model()].variants}>
            {(item, index) => (
              <div
                class={`variant ${(index === variant()) ? 'active' : ''}`}
                onClick={() => setVariant(index)}
              >
                <div style={{ 'background-color': item().base.hex }} />
                <div style={{ 'background-color': item().print.hex }} />
              </div>
            )}
          </Index>
        </div>
        <div class="print-uuid">
          {getPrintUUID()}
        </div>
      </div>
      <div
        class="base"
        style={{ 'background-image': `url(${getSourceImage('base')})` }}
      >
        <div
          class="print"
          style={{ 'background-image': `url(${getSourceImage('print')})` }}
        />
      </div>
    </section>
  );
}

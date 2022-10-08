import { Component, createSignal, Index } from 'solid-js';

import { PrintVariant } from '~types';
import { MERCH } from '~data';
import { ModelItem } from './ModelItem';
import { VariantItem } from './VariantItem';

import './styles.scss';

export const MerchGallery: Component = () => {
  const [model, setModel] = createSignal<number>(0);
  const [variant, setVariant] = createSignal<number>(0);

  function changeModel(index: number) {
    setVariant(0);
    setModel(index);
  }

  function getSourceImage(type: keyof PrintVariant) {
    return MERCH[model()]?.variants[variant()]?.[type].url;
  }

  function getPrintUUID() {
    const modelKey = MERCH[model()].name.toUpperCase().replace(/[\sEYUIOA]/g, '');
    const { base, print } = MERCH[model()].variants[variant()];
    return [modelKey, base.name, print.name].join('-');
  }

  return (
    <section class="merch-gallery">
      <div class="selectors">
        <div class="model-selector">
          <Index each={MERCH}>
            {(item, index) => (
              <ModelItem
                name={item().name}
                isActive={index === model()}
                onClick={() => changeModel(index)}
              />
            )}
          </Index>
        </div>
        <div class="variant-selector">
          <Index each={MERCH[model()].variants}>
            {(item, index) => (
              <VariantItem
                base={item().base}
                print={item().print}
                isActive={index === variant()}
                onClick={() => setVariant(index)}
              />
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
};

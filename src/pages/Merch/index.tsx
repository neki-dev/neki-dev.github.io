import { Component, createSignal, Index } from 'solid-js';

import { MERCH } from '~data';
import { ModelItem } from './ModelItem';
import { VariantItem } from './VariantItem';

import './styles.scss';

export const Merch: Component = () => {
  const [model, setModel] = createSignal<number>(0);
  const [variant, setVariant] = createSignal<number>(0);

  function changeModel(index: number) {
    setVariant(0);
    setModel(index);
  }

  function getMeta() {
    return MERCH[model()]?.variants[variant()];
  }

  return (
    <section class="merch">
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
        <div class="variant">
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
          <div class="variant-meta">
            <div class="param">
              <div class="label">Width</div>
              <div class="value">{getMeta().print.size} <span>cm</span></div>
            </div>
            <div class="param">
              <div class="label">Offset</div>
              <div class="value">{getMeta().print.offset} <span>cm</span></div>
            </div>
          </div>
        </div>
        <div class="download-source">
          <a href={getMeta().print.source}>Download</a>
        </div>
      </div>
      <div class="preview">
        <div
          class="base"
          style={{ 'background-image': `url(${getMeta().base.url})` }}
        >
          <div
            class="print"
            style={{
              'background-image': `url(${getMeta().print.url})`,
              'background-position-y': `${16 + getMeta().print.offset}%`,
              'background-size': `${getMeta().print.size * 1.4}% auto`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

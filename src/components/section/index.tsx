import { useCatchDisplay } from '../../hooks';

import type { JSX, Component } from 'solid-js';

import './styles.scss';

type Props = {
  label?: string
  children: JSX.Element
  ref?: HTMLElement
  class: string
  layers?: JSX.Element
};

export const Section: Component<Props> = (props) => {
  let refLabel!: HTMLHeadingElement;

  useCatchDisplay(() => refLabel, () => {
    refLabel.classList.add('animate');
  });

  return (
    <section ref={props.ref} class={props.class}>
      {props.layers}

      <div class="wrapper">
        {props.label && (
          <div class="section-label">
            <h4 ref={refLabel}>{props.label}</h4>
          </div>
        )}

        {props.children}
      </div>
    </section>
  );
};

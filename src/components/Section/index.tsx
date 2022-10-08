import { JSX, Component } from 'solid-js';

import './styles.scss';

type Props = {
  label?: string;
  children: JSX.Element;
  ref?: HTMLElement;
  class: string;
};

export const Section: Component<Props> = (props) => (
  <section ref={props.ref} class={props.class}>
    <div class="wrapper">
      {props.label && (
        <h4>{props.label}</h4>
      )}
      {props.children}
    </div>
  </section>
);

import cn from 'classnames';

import type { Contact } from './types';
import type { Component } from 'solid-js';

import './styles.scss';

export const ContactItem: Component<Contact> = (props) => (
  <a
    href={props.link}
    target="_blank"
    class={cn('contact-item', props.name.toLocaleLowerCase())}
    title={props.name}
    rel="noreferrer"
    aria-label={props.name}
  />
);

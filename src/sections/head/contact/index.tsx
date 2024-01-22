import { Component } from 'solid-js';
import cn from 'classnames';

import { Contact } from '~types';

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

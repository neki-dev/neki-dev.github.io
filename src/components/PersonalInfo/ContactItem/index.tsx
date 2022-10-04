import { SocialContact } from '~types';

import './styles.scss';

export default function ContactItem(props: SocialContact) {
  return (
    <a
      href={props.link}
      target="_blank"
      class={`contact-item ${props.name.toLocaleLowerCase()}`}
      title={props.name}
      rel="noreferrer"
      aria-label={props.name}
    />
  );
}

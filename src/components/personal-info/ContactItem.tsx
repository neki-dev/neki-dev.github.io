import { SocialContact } from './types';

import './ContactItem.scss';

export default function ContactItem({
  name, link,
}: SocialContact) {
  return (
    <a
      href={link} target="_blank" className={`contact-item ${name.toLocaleLowerCase()}`}
      title={name} rel="noreferrer" aria-label={name}
    />
  );
}

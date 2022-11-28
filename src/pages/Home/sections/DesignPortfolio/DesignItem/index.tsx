import { Component, createSignal, onMount } from 'solid-js';
import cn from 'classnames';

import plug from './images/plug.png';

import './styles.scss';

type Props = {
  image: string
  isActive: boolean
  onClick: () => void
};

export const DesignItem: Component<Props> = (props) => {
  const [loaded, setLoaded] = createSignal<boolean>(false);

  onMount(() => {
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
      console.log('loaded', props.image);
    };
    image.src = props.image;
  });

  return (
    <div
      onClick={() => props.onClick()}
      class={cn('design-item', {
        active: props.isActive,
      })}
    >
      <img src={loaded() ? props.image : plug} alt="" />
    </div>
  );
};

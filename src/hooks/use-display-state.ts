import { createSignal, onCleanup, onMount } from 'solid-js';

export default function useDisplayState(
  sectionFn: () => HTMLElement,
) {
  const [isVisible, setVisible] = createSignal<boolean>(false);

  function onScroll() {
    const section = sectionFn();
    const offset = window.scrollY + window.innerHeight;
    if (offset >= section.offsetTop) {
      setVisible(true);
      document.removeEventListener('scroll', onScroll);
    }
  }

  onMount(() => {
    document.addEventListener('scroll', onScroll);
  });

  onCleanup(() => {
    document.removeEventListener('scroll', onScroll);
  });

  return isVisible;
}

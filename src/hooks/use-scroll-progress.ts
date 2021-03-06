import { onCleanup, onMount } from 'solid-js';

const MIN_WIDTH_FOR_DETECT = 561;

export default function useScrollProgress(
  sectionFn: () => HTMLElement,
  callback: (progress: number) => void,
) {
  if (window.innerWidth < MIN_WIDTH_FOR_DETECT) {
    return;
  }

  function onScroll() {
    const section = sectionFn();
    const offset = window.scrollY - section.offsetTop;
    const height = section.clientHeight;
    if (offset >= 0 && offset <= height) {
      callback(offset / height);
    }
  }

  onMount(() => {
    document.addEventListener('scroll', onScroll);
  });

  onCleanup(() => {
    document.removeEventListener('scroll', onScroll);
  });
}

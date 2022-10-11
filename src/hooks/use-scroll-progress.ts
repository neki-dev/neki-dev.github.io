import { onCleanup, onMount } from 'solid-js';

const MIN_WIDTH_FOR_DETECT = 560;

export function useScrollProgress(
  ref: () => HTMLElement,
  callback: (progress: number) => void,
) {
  function onScroll() {
    if (window.innerWidth <= MIN_WIDTH_FOR_DETECT) {
      return;
    }

    const element = ref();
    const offset = window.scrollY - element.offsetTop;
    const height = element.clientHeight;

    if (offset >= 0 && offset <= height) {
      const progress = offset / height;
      callback(progress);
    }
  }

  onMount(() => {
    document.addEventListener('scroll', onScroll);
  });

  onCleanup(() => {
    document.removeEventListener('scroll', onScroll);
  });
}

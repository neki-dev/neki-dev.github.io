import { onCleanup, onMount } from 'solid-js';

export function useCatchDisplay(
  ref: () => HTMLElement,
  callback: () => void,
) {
  function checkDisplay(): boolean {
    const element = ref();
    if (!element) {
      return false;
    }

    const bound = element.getBoundingClientRect();

    return (bound.top <= window.innerHeight);
  }

  function onScroll() {
    if (checkDisplay()) {
      callback();
      document.removeEventListener('scroll', onScroll);
    }
  }

  onMount(() => {
    // Promise is needed for waiting mount ref
    Promise.resolve().then(() => {
      if (checkDisplay()) {
        callback();
      } else {
        document.addEventListener('scroll', onScroll);
      }
    });
  });

  onCleanup(() => {
    document.removeEventListener('scroll', onScroll);
  });
}

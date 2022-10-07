import { onCleanup, onMount } from 'solid-js';

export function useCatchDisplay(
  sectionFn: () => HTMLElement,
  callback: () => void,
) {
  function checkDisplay(): boolean {
    const section = sectionFn();
    if (!section) {
      return false;
    }

    const bound = section.getBoundingClientRect();
    const offset = bound.top - window.innerHeight;

    return (offset <= 0);
  }

  function onScroll() {
    if (checkDisplay()) {
      callback();
      document.removeEventListener('scroll', onScroll);
    }
  }

  onMount(() => {
    if (checkDisplay()) {
      callback();
    } else {
      document.addEventListener('scroll', onScroll);
    }
  });

  onCleanup(() => {
    document.removeEventListener('scroll', onScroll);
  });
}

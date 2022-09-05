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

    const offset = window.scrollY + window.innerHeight;
    return (offset >= section.offsetTop);
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
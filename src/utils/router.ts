import { JSX } from 'solid-js/jsx-runtime';

type RouterMap = {
  [key: string]: JSX.Element
};

export default function router(map: RouterMap): () => JSX.Element {
  return () => {
    const route = window.location.search.replace(/\?([a-z-]+).*/, '$1');
    return map[route] || map['*'];
  };
}

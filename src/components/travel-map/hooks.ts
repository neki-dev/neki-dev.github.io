import { createEffect, createSignal } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";

export function createLocalStore<T>(key: string, initState: T) {
    const [state, setState] = createSignal<T>(initState);

    if (localStorage.getItem(key)) {
        setState(JSON.parse(localStorage.getItem(key)));
    }

    createEffect(() => {
        localStorage.setItem(key, JSON.stringify(state()));
    });

    return [state, setState];
}
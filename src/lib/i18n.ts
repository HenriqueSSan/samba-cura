import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const fallbackLocale = 'pt-br';

// prettier-ignore
(() => {
    register("en",    () => import("../core/locales/en.json"))
    register("pt-br", () => import("../core/locales/pt-br.json"))
    register("es",    () => import("../core/locales/es.json"))
})();

init({
	fallbackLocale,
	initialLocale: browser ? window.navigator.language : fallbackLocale
});

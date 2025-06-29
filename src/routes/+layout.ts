// +layout.ts
import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale as i18n_locale, waitLocale as get_locale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (request) => {
	const params = request.params;
	const locale = params.locale;

	if (browser) {
		i18n_locale.set(locale || window.navigator.language);
	}

	await get_locale();
};

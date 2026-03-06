<script>
	import Icon from '@iconify/svelte';

	import { page } from '$app/state';

	import { locale as i18n_locale } from 'svelte-i18n';

	let show = $state(false);

	let locale = $derived(page.params.locale || $i18n_locale);

	let locales = [
		{ locale: 'en', anchorTo: '/en', title: 'Inglês' },
		{ locale: 'es', anchorTo: '/es', title: 'Espanhol' },
		{ locale: 'pt-br', anchorTo: '/', title: 'Português' }
	];

	let localeItem = $derived(locales.find((item) => item.locale === locale?.toLowerCase()));
</script>

<div class="hidden items-center gap-2 rounded-full py-1 pr-3 pl-2 lg:flex">
	<div class="relative flex items-stretch gap-2" data-sveltekit-reload>
		{#if show}
			{#each locales as localeItem (localeItem.locale)}
				<a href={localeItem.anchorTo} class="px-2 py-1 font-medium text-white">
					<span>{localeItem.title}</span>
				</a>
			{/each}
		{/if}

		{#if !show}
			{#if localeItem}
				<a href={localeItem.anchorTo} class="px-2 py-1 font-bold text-white">
					<span>{localeItem.title}</span>
				</a>
			{/if}
		{/if}

		<button
			onclick={() => (show = !show)}
			class:absolute={!show}
			class:sr-only={show}
			class="top-0 left-0 h-full w-full"
		>
			<span class="sr-only">Abrir menu idiomas</span>
		</button>
	</div>

	<button onclick={() => (show = !show)} class="cursor-pointer text-white">
		<Icon class={`transition ${!show ? 'rotate-90' : 'rotate-0'}`} icon="ri:play-fill" />
		<span class="sr-only">Abrir menu idiomas</span>
	</button>
</div>

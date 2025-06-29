<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	import { page } from '$app/state';

	import { _, locale as i18n_locale } from 'svelte-i18n';

	let isHeaderScrollDown = $state(false);

	let show = $state(false);

	let locale = $derived(page.params.locale || $i18n_locale);

	let locales = [
		{ locale: 'en', anchorTo: '/en', title: 'Inglês' },
		{ locale: 'es', anchorTo: '/es', title: 'Espanhol' },
		{ locale: 'pt-br', anchorTo: '/', title: 'Português' }
	];

	let localeItem = $derived(locales.find((item) => item.locale === locale?.toLowerCase()));

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				if (window.scrollY > 80) isHeaderScrollDown = true;
				else isHeaderScrollDown = false;
			});
		}
	});
</script>

<header
	class="fixed top-0 left-0 z-[1000] flex min-h-[10vh] w-full items-center justify-center text-white lg:flex-row-reverse lg:justify-start"
	class:bg-black={isHeaderScrollDown}
>
	<div
		class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-8 lg:flex-row-reverse lg:items-start 2xl:px-0"
	>
		<div
			class="lg:text-md flex w-full flex-wrap items-center justify-center text-sm md:flex-row lg:w-auto lg:flex-row lg:flex-nowrap lg:items-start lg:gap-2"
		>
			<div
				class="flex items-center gap-2 rounded-full border border-amber-900/60 bg-amber-900/50 py-1 pr-3 pl-2"
			>
				<div class="relative flex items-stretch gap-2" data-sveltekit-reload>
					{#if show}
						{#each locales as localeItem}
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
				</button>
			</div>

			<div
				class="lg:text-md flex w-full flex-wrap items-center justify-center text-sm md:flex-row lg:w-auto lg:flex-col lg:flex-nowrap lg:items-start lg:gap-2"
			>
				<p class="inline grow px-1 text-center whitespace-nowrap lg:block lg:text-start">
					{$_('#common.contact')} | +55 11 94896-5261
				</p>
				<p class="inline grow px-1 text-center whitespace-nowrap lg:block lg:text-start">
					{$_('#common.email')} | luanamichelli07gmail.com
				</p>
			</div>
		</div>

		<nav
			class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-8 lg:flex-row lg:items-start 2xl:px-0"
		>
			<ul
				class="flex items-center gap-2 [&_a]:text-amber-300 [&_a]:transition-colors [&_a]:hover:text-amber-500 [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:after:block [&_li]:after:h-[12px] [&_li]:after:w-[2px] [&_li]:after:rounded-full [&_li]:after:border-none [&_li]:after:bg-white [&_li]:last:after:hidden"
			>
				<li><a href="/#about">{$_('#layout.header.a.item-1')}</a></li>

				<li>
					<a href="/#benefit">{$_('#layout.header.a.item-2')}</a>
				</li>

				<li>
					<a href="/#health">{$_('#layout.header.a.item-3')}</a>
				</li>

				<li>
					<a href="/#testimonials">{$_('#layout.header.a.item-4')}</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

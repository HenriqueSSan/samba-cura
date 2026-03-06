<script>
	import { onMount } from 'svelte';

	import { _ } from 'svelte-i18n';
	import Language from './language.svelte';

	let isHeaderScrollDown = $state(false);

	let show = $state(false);

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
	class="fixed top-0 left-0 z-[1000] flex h-[8dvh] w-full items-center justify-center text-white lg:h-[10dvh] lg:flex-row-reverse lg:justify-start"
	class:bg-black={isHeaderScrollDown || show}
>
	<div
		class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-8 lg:flex-row lg:items-start 2xl:px-0"
	>
		<nav
			class={[
				'mx-auto flex min-h-[48px] w-full max-w-[1280px] flex-col items-center gap-8 border-b border-black px-4 py-3 md:px-8 lg:flex-row lg:items-center lg:py-0 2xl:px-0',
				'!border-b !border-amber-400 lg:border-none'
			]}
		>
			<div class="flex w-full justify-between lg:block lg:w-auto">
				<a href="/" class="font-creative text-4xl font-bold text-amber-400 italic lg:text-4xl">
					Samba Cura
				</a>

				<button
					class="relative h-[32px] w-[32px] before:absolute before:top-[4px] before:left-0 before:h-[3px] before:w-[32px] before:rounded-xl before:bg-amber-400 after:absolute after:bottom-[4px] after:left-0 after:h-[3px] after:w-[32px] after:rounded-xl after:bg-amber-400 lg:hidden"
					onclick={() => (show = !show)}
				>
					<span
						class="absolute top-1/2 left-0 h-[3px] w-[32px] -translate-y-1/2 rounded-xl bg-amber-400"
					></span>
					<span class="sr-only">
						{show ? 'Fechar Menu Lateral' : 'Abrir Menu Lateral'}
					</span>
				</button>
			</div>

			<div
				class={[
					show
						? 'fixed top-[8dvh] flex h-[92dvh] w-full flex-col bg-black px-8 pt-8'
						: 'hidden lg:block'
				]}
			>
				<ul
					class="flex h-full flex-col gap-8 lg:flex lg:flex-row lg:items-center [&_a]:text-amber-300 [&_a]:transition-colors [&_a]:hover:text-amber-500 [&_li]:flex [&_li]:items-center [&_li]:gap-2"
				>
					<li>
						<a
							class="font-creative text-3xl font-bold text-white lg:font-sans lg:text-sm"
							href="/#about">{$_('#layout.header.a.item-1')}</a
						>
					</li>

					<li>
						<a
							class="font-creative text-3xl font-bold text-white lg:font-sans lg:text-sm"
							href="/#benefit">{$_('#layout.header.a.item-2')}</a
						>
					</li>

					<li>
						<a
							class="font-creative text-3xl font-bold text-white lg:font-sans lg:text-sm"
							href="/#health">{$_('#layout.header.a.item-3')}</a
						>
					</li>

					<li>
						<a
							class="font-creative text-3xl font-bold text-white lg:font-sans lg:text-sm"
							href="/#testimonials">{$_('#layout.header.a.item-4')}</a
						>
					</li>
				</ul>
			</div>
		</nav>

		<div
			class="lg:text-md flex w-full flex-wrap items-center justify-center text-sm md:flex-row lg:w-auto lg:flex-row lg:flex-nowrap lg:items-start lg:gap-2"
		>
			<Language />

			<div
				class="lg:text-md hidden w-full flex-wrap items-center justify-center text-sm md:flex-row lg:flex lg:w-auto lg:flex-col lg:flex-nowrap lg:items-start lg:gap-2"
			>
				<p class="inline grow px-1 text-center whitespace-nowrap lg:block lg:text-start">
					{$_('#common.contact')} | +55 11 94896-5261
				</p>
				<p class="inline grow px-1 text-center whitespace-nowrap lg:block lg:text-start">
					{$_('#common.email')} | luanamichelli07gmail.com
				</p>
			</div>
		</div>
	</div>
</header>

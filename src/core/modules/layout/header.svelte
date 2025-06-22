<script>
	import { onMount } from 'svelte';

	let solidColorInHeader = false;

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				if (window.scrollY > 80) solidColorInHeader = true;
				else solidColorInHeader = false;
			});
		}
	});
</script>

<header
	class="fixed top-0 left-0 z-[1000] flex min-h-[10vh] w-full items-center justify-center text-white lg:flex-row-reverse lg:justify-start"
	class:bg-black={solidColorInHeader}
>
	<div
		class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-8 lg:flex-row-reverse lg:items-start 2xl:px-0"
	>
		<div
			class="lg:text-md flex w-full flex-wrap items-center justify-center text-sm md:flex-row lg:w-auto lg:flex-col lg:flex-nowrap lg:items-start lg:gap-2"
		>
			<p class="inline grow px-1 text-center whitespace-nowrap lg:block lg:text-start">
				Contato | +55 11 94896-5261
			</p>
			<p class="inline grow px-1 text-center whitespace-nowrap lg:block lg:text-start">
				E-mail | luanamichelli07gmail.com
			</p>
		</div>

		<nav
			class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-8 lg:flex-row lg:items-start 2xl:px-0"
		>
			<ul
				class="flex items-center gap-2 [&_a]:text-amber-300 [&_a]:transition-colors [&_a]:hover:text-amber-500 [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:after:block [&_li]:after:h-[12px] [&_li]:after:w-[2px] [&_li]:after:rounded-full [&_li]:after:border-none [&_li]:after:bg-white [&_li]:last:after:hidden"
			>
				<li><a href="/#about">História</a></li>

				<li><a href="/#benefit">Benefícios</a></li>

				<li><a href="/#health">Samba cura</a></li>

				<li><a href="/#testimonials">Minhas alunas</a></li>
			</ul>
		</nav>
	</div>
</header>

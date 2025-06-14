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
			class="lg:text-md flex w-full flex-wrap items-center justify-center lg:flex-nowrap text-sm md:flex-row lg:w-auto lg:flex-col lg:gap-2 lg:items-start"
		>
			<p class="inline grow px-1 text-center lg:block whitespace-nowrap lg:text-start">Contato | +55 11 94896-5261</p>
			<p class="inline grow px-1 text-center lg:block whitespace-nowrap lg:text-start">E-mail | luanamichelli07gmail.com</p>
		</div>

		<nav
			class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-8 lg:flex-row lg:items-start 2xl:px-0"
		>
			<ul
				class="flex items-center gap-2 [&_a]:text-amber-300 [&_a]:transition-colors [&_a]:hover:text-amber-500 [&_hr]:block [&_hr]:h-[12px] [&_hr]:w-[2px] [&_hr]:rounded-full [&_hr]:border-none [&_hr]:bg-white"
			>
				<li><a href="/#about">História</a></li>
				<hr />
				<li><a href="/#benefit">Benefícios</a></li>
				<hr />
				<li><a href="/#health">Samba cura</a></li>
				<hr />
				<li><a href="/#testimonials">Minhas alunas</a></li>
			</ul>
		</nav>
	</div>
</header>

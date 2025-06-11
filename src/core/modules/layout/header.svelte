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

<header class="fixed top-0 left-0 z-[1000] w-full text-white" class:bg-black={solidColorInHeader}>
	<nav
		class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-8 lg:flex-row lg:items-start 2xl:px-0"
	>
		<ul
			class="flex items-center gap-2 [&_hr]:block [&_hr]:h-[12px] [&_hr]:w-[2px] [&_hr]:rounded-full [&_hr]:border-none [&_hr]:bg-white [&_a]:hover:text-amber-500 [&_a]:transition-colors"
		>
			<li><a href="/#about">História</a></li>
			<hr />
			<li><a href="/#benefit">Benefícios</a></li>
			<hr />
			<li><a href="/#health">Samba cura</a></li>
			<hr />
			<li><a href="/#testimonials">Minhas alunas</a></li>
		</ul>

		<div
			class="lg:text-md flex w-[30%] flex-row justify-center gap-3 text-sm lg:w-auto lg:flex-col lg:gap-0"
		>
			<p>Contato | +55 11 94896-5261</p>
		</div>
	</nav>
</header>

<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let showUpBtn = false;

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				if (window.scrollY > 80) showUpBtn = true;
				else showUpBtn = false;
			});
		}
	});
</script>

<footer class="bg-amber-400 py-[36px] text-black">
	<div class="fixed right-8 bottom-8 z-[2000] flex items-center gap-3">
		{#if showUpBtn}
			<button
				onclick={() =>
					typeof window !== 'undefined'
						? window.scrollTo({ top: 0, behavior: 'smooth' })
						: undefined}
				class="flex size-[56px] cursor-pointer items-center justify-center rounded-md bg-amber-600 text-black"
			>
				<Icon class="text-[32px]" icon="ic:round-arrow-upward" />
				<span class="sr-only">Subir</span>
			</button>
		{/if}

		<a
			target="_blank"
			href="https://api.whatsapp.com/send?phone=5511948965261"
			class="flex size-[56px] cursor-pointer items-center justify-center rounded-md bg-green-400 text-white"
		>
			<Icon class="text-[32px]" icon="ic:baseline-whatsapp" />
			<span class="sr-only">Whatsapp</span>
		</a>
	</div>

	<div class="mx-auto flex max-w-[1280px] flex-wrap justify-between px-4 lg:px-0">
		<p>© Copyright 2025 Luana Michelly. All rights reserved.</p>
		<p>
			Developed by <a
				target="_blank"
				href="https://lutruvials.vercel.app"
				class="font-bold underline">Lutruvials</a
			>
		</p>
	</div>
</footer>

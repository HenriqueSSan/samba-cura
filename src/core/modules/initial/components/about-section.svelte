<script>
	import { _ } from 'svelte-i18n';

	let columnImages = [
		{ h: 391, w: 249, alt: '', source: '/col-1.png', class: 'lg:min-h-[320px]' },
		{ h: 192, w: 192, alt: '', source: '/col-b-1.png', class: 'lg:min-h-[192px]' },
		{ h: 192, w: 192, alt: '', source: '/col-2.png', class: 'lg:min-h-[192px]' },
		{ h: 320, w: 197, alt: '', source: '/col-3.png', class: 'lg:min-h-[320px]' },
		{ h: 197, w: 192, alt: '', source: '/col-b-2.png', class: 'lg:min-h-[320px]' },
		{ h: 192, w: 192, alt: '', source: '/col-b-3.png', class: 'lg:min-h-[192px]' }
	];
</script>

<section id="about" class="bg-black py-[96px] text-white">
	<article
		class="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 px-4 md:px-8 lg:flex-row 2xl:px-0"
	>
		<div class="space-y-4 lg:w-1/2">
			<h2 class="font-creative text-3xl font-bold lg:text-5xl">{$_('#section.about.title')}</h2>
			<p class="text-md font-medium lg:text-xl">
				{$_('#section.about.description.item-1')}
			</p>
			<p class="text-md font-medium lg:text-xl">
				{$_('#section.about.description.item-2')}
			</p>
		</div>

		<div class="grow columns-3 gap-1 lg:h-[664px] lg:w-1/4">
			{#each columnImages as columnImage (columnImage.source)}
				<img
					alt={columnImage.alt}
					width={columnImage.w}
					height={columnImage.h}
					src={columnImage.source}
					class={['my-1 w-full object-cover', columnImage.class]}
				/>
			{/each}
		</div>
	</article>
</section>

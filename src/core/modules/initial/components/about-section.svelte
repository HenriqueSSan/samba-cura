<script>
	import { _ } from 'svelte-i18n';
</script>

<section id="about" class="bg-black py-[96px] text-white">
	<article
		class="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-10 px-4 md:px-8 lg:flex-row 2xl:px-0"
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
			<img
				class="my-1 aspect-[249/391] object-cover lg:min-h-[320px]"
				src="/col-1.png"
				height="391"
				width="249"
				alt=""
			/>
			<img
				class="my-1 object-cover lg:max-h-[192px]"
				src="/col-b-1.png"
				height="192"
				width="192"
				alt=""
			/>
			<img
				class="my-1 object-cover lg:max-h-[192px]"
				src="/col-2.png"
				height="192"
				width="192"
				alt=""
			/>
			<img
				class="my-1 object-cover lg:min-h-[320px]"
				src="/col-3.png"
				height="320"
				width="197"
				alt=""
			/>
			<img
				class="my-1 object-cover lg:min-h-[320px]"
				src="/col-b-2.png"
				height="197"
				width="192"
				alt=""
			/>
			<img
				class="my-1 object-cover lg:max-h-[192px]"
				src="/col-b-3.png"
				height="192"
				width="192"
				alt=""
			/>
		</div>
	</article>
</section>

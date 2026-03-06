<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section class="py-[96px] text-black" id="benefit">
	<div class="mx-auto max-w-[1280px] px-4 md:px-8 2xl:px-0">
		<h2
			class="font-creative mx-auto mb-7 max-w-[710px] text-center text-8xl font-bold lg:w-[43%] lg:text-5xl"
		>
			{$_('#section.benefit.title')}
		</h2>
		<p
			class="mx-auto mb-[72px] max-w-[710px] text-center text-lg font-medium lg:w-[43%] lg:text-2xl"
		>
			{$_('#section.benefit.description')}
		</p>

		<div class="flex w-full flex-col items-start gap-10 lg:flex-row">
			{@render articleSnippet('section.benefit.list.1', [
				'benefit.list.1.1',
				'benefit.list.1.2',
				'benefit.list.1.3',
				'benefit.list.1.4',
				'benefit.list.1.5'
			])}

			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div class="hidden h-[256px] w-1 self-center rounded-full bg-amber-400 lg:block" />

			{@render articleSnippet('section.benefit.list.2', [
				'benefit.list.2.1',
				'benefit.list.2.2',
				'benefit.list.2.3',
				'benefit.list.2.4'
			])}
		</div>
	</div>
</section>

{#snippet benefitItemSnippet(title: string, description: string)}
	<li class="flex items-start gap-2">
		<img class="size-[32px] lg:size-[48px]" width="64" height="64" src="/check.svg" alt="" />

		<div class="lg:pt-[6px]">
			<h4 class="mb-2 text-lg font-bold text-orange-600 lg:text-2xl">{title}</h4>
			<p class="text-md leading-[24px] lg:text-xl lg:leading-[32px]">{description}</p>
		</div>
	</li>
{/snippet}

{#snippet articleSnippet(i18nKeyTranslation: string, ids: string[])}
	<article class="grow lg:w-1/2">
		<h3 class=" font-creative mb-10 text-5xl font-bold">
			{$_(`#${i18nKeyTranslation}.title`)}
		</h3>

		<ul class="space-y-6">
			{#each ids as item, index (item)}
				{@render benefitItemSnippet(
					$_(`#${i18nKeyTranslation}.list.${index}.title`),
					$_(`#${i18nKeyTranslation}.list.${index}.description`)
				)}
			{/each}
		</ul>
	</article>
{/snippet}

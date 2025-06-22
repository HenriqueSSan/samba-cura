<script lang="ts">
	import { benefitArr } from './benefit-section.list';
</script>

<section class="py-[96px]" id="benefit">
	<div class="mx-auto max-w-[1280px] px-4 md:px-8 2xl:px-0">
		<h2 class="mx-auto mb-7 max-w-[710px] text-center text-3xl font-bold lg:w-[43%] lg:text-5xl">
			O que o samba vai trazer para sua vida!
		</h2>
		<p
			class="mx-auto mb-[72px] max-w-[710px] text-center text-lg font-medium lg:w-[43%] lg:text-2xl"
		>
			A música é contagiante e o movimento com a energia positiva tome conta do corpo e a mente.
		</p>

		<div class="flex w-full flex-col items-start gap-10 lg:flex-row">
			<article class="grow lg:w-1/2">
				<h3 class="mb-10 text-5xl font-bold">{benefitArr[0].title}</h3>

				<ul class="space-y-6">
					{#each benefitArr[0].list as benefitItem}
						{@render benefitItemSnippet(benefitItem.title, benefitItem.description)}
					{/each}
				</ul>
			</article>

			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div class="hidden h-[256px] w-1 self-center rounded-full bg-amber-400 lg:block" />

			<article class="grow lg:w-1/2">
				<h3 class="mb-10 text-5xl font-bold">{benefitArr[1].title}</h3>

				<ul class="space-y-6">
					{#each benefitArr[1].list as benefitItem}
						{@render benefitItemSnippet(benefitItem.title, benefitItem.description)}
					{/each}
				</ul>
			</article>
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

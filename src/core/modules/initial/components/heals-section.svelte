<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section id="health" class="bg-black py-[96px] text-white">
	<article class="mx-auto max-w-[1280px] px-4 text-center md:px-8 2xl:px-0">
		<h2 class="font-creative mb-6 text-7xl font-bold text-amber-400 italic lg:text-5xl">
			{$_('#section.heals.title')}
		</h2>

		<p class="mx-auto mb-[72px] max-w-[710px] text-lg lg:w-[53%] lg:text-2xl">
			{$_('#section.heals.description')}
		</p>

		<div class="[&_figure]:h-auto [&_figure]:grow [&_figure]:lg:w-1/3">
			<div class="mb-[72px] flex flex-col-reverse items-stretch gap-10 lg:flex-row">
				<ul
					class="flex w-full grow flex-col items-start gap-10 text-left lg:w-1/2 [&_h3]:mb-2 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-amber-400 [&_p]:text-lg [&_p]:leading-[32px]"
				>
					{#each ['heals.list.1.1', 'heals.list.1.2', 'heals.list.1.3', 'heals.list.1.4', 'heals.list.1.5'] as item, index (item)}
						{@render healthItemSnippet(
							$_(`#section.heals.list.1.${index}.title`),
							$_(`#section.heals.list.1.${index}.description`)
						)}
					{/each}
				</ul>

				<figure>
					<img class="w-full max-w-full object-cover" src="/health-samba-col-1.png" width="597" height="986" alt="" />
				</figure>
			</div>

			<div class="mb-[72px] flex flex-col-reverse items-stretch gap-10 lg:flex-row-reverse">
				<ul
					class="flex w-full grow flex-col items-start gap-10 text-left lg:w-1/2 [&_h3]:mb-2 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-amber-400 [&_p]:text-lg [&_p]:leading-[32px]"
				>
					{#each ['heals.list.2.1', 'heals.list.2.2', 'heals.list.2.3', 'heals.list.2.4', 'heals.list.2.5'] as item, index (item)}
						{@render healthItemSnippet(
							$_(`#section.heals.list.2.${index}.title`),
							$_(`#section.heals.list.2.${index}.description`)
						)}
					{/each}
				</ul>

				<figure>
					<img class="w-full max-w-full object-cover" src="/health-samba-col-2.png" width="597" height="940" alt="" />
				</figure>
			</div>
		</div>
	</article>
</section>

{#snippet healthItemSnippet(title: string, description: string)}
	<li class="space-y-2">
		<h3 class="font-creative">{title}</h3>
		<p>{description}</p>
	</li>
{/snippet}

<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { browser } from '$app/environment';

	let presentationRef: HTMLVideoElement | null = $state(null);

	let presentationPlayed: boolean = $state(false);

	const handleShowView = () => {
		if (presentationRef) {
			if (!presentationPlayed) {
				presentationPlayed = true;

				return presentationRef.play();
			}

			presentationPlayed = false;
			return presentationRef.pause();
		}
	};
</script>

<section class="3xl:h-[80vh] relative bg-black lg:h-[100vh] lg:overflow-hidden xl:pt-[10vh]">
	<article class="mx-auto flex h-full max-w-[1280px] items-center px-4 md:px-8 2xl:px-0">
		<!-- <img
			class="absolute top-0 left-0 z-20 -translate-y-1/2 lg:top-[332px] lg:z-10 lg:w-[312px]"
			width="532"
			height="1131"
			fetchpriority="low"
			decoding="sync"
			loading="lazy"
			src="/feather-left.png"
			alt=""
		/>
		<img
			class="absolute top-1/2 right-0 z-40 w-[332px] -translate-y-1/2 lg:top-[432px] lg:z-10 lg:w-[312px]"
			width="532"
			height="1131"
			fetchpriority="low"
			decoding="sync"
			loading="lazy"
			src="/feather-right.png"
			alt=""
		/> -->

		<div
			class="relative z-50 flex w-full flex-col items-center justify-between gap-3 px-4 pt-[50vh] text-white lg:flex-row lg:px-0 lg:pt-0"
		>
			<div class="text-center lg:w-[30%] lg:text-left">
				<h1
					class="font-creative mb-4 text-4xl font-bold text-white italic lg:text-5xl lg:text-amber-400"
				>
					{$_('#section.hero.title')}
				</h1>
				<p
					class="mx-auto max-w-[362px] rounded-xl p-2 text-sm lg:max-w-none lg:px-0 xl:bg-transparent"
				>
					{$_('#section.hero.description')}
				</p>
			</div>

			<div
				class="flex flex-col items-center self-end text-center lg:w-[30%] lg:items-start lg:text-left"
			>
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="relative mb-8 h-[482px] w-[90%] max-w-[296px] overflow-hidden rounded-3xl border-2 border-amber-900 bg-black sm:h-[602px] md:max-w-[362px] lg:h-[526px] lg:w-full lg:max-w-[296px]"
				>
					<!-- svelte-ignore a11y_media_has_caption -->
					{#if browser}
						<video
							bind:this={presentationRef}
							preload="none"
							poster="/presentation.png"
							src="/presentation.mp4"
							playsinline
							controls={false}
							class="h-full w-full object-fill [&::-webkit-media-controls-timeline]:hidden"
						>
						</video>
					{/if}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<div
						onclick={handleShowView}
						class={`absolute top-1/2 left-1/2 flex h-full w-full -translate-1/2 items-center justify-center rounded-xl ${!presentationPlayed ? 'cursor-pointer bg-black/50' : 'bg-black/0'}`}
					>
						<button
							class={`flex cursor-pointer items-center justify-center rounded-xl border border-amber-900/60 bg-amber-900/50 px-6 py-4 text-[20px] text-white/80 ${!presentationPlayed ? 'flex' : 'hidden'}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								><g fill="none" fill-rule="evenodd"
									><path
										d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
									/><path
										fill="currentColor"
										d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
									/></g
								></svg
							>
							<span class="sr-only"
								>{presentationPlayed
									? 'Pausar video de apresentação'
									: 'Iniciar/Recomeçar video de apresentação'}</span
							>
						</button>
					</div>
				</div>
				<p class="rounded-xl p-2 text-sm lg:px-0 xl:bg-transparent">
					{$_('#section.hero.catchphrase.title')}
				</p>
				<p class="font-creative text-2xl font-bold text-amber-400 italic">
					{$_('#section.hero.catchphrase.highlight')}
				</p>
			</div>
		</div>

		<div
			class="absolute top-[16vh] left-1/2 z-40 w-full -translate-x-1/2 md:top-[21vh] md:w-auto md:max-w-[404px] lg:top-0 lg:max-w-none"
		>
			<picture class="h-full">
				<source media="(min-width: 1024px)" srcset="/hero-highlight.png" width="594" height="868" />
				<img
					class="relative z-10"
					src="/hero-highlight-mobile.png"
					alt=""
					fetchpriority="high"
					width="1440"
					height="1800"
				/>
			</picture>

			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div
				class="absolute bottom-0 left-0 z-40 hidden min-h-[96px] w-full bg-linear-to-b from-transparent to-black to-50% lg:block"
			/>
		</div>
	</article>
</section>

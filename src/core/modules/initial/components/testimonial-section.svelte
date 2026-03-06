<script lang="ts">
	import { tick } from 'svelte';
	import { _ } from 'svelte-i18n';

	import Icon from '@iconify/svelte';

	import { Swiper } from 'swiper';
	import { Autoplay, Grid, Pagination } from 'swiper/modules';
	import { browser } from '$app/environment';

	const slides = $state([
		{ played: false, source: '/testimonial-1.mp4', poster: '/testimonial-1.png' },
		{ played: false, source: '/testimonial-2.mp4', poster: '/testimonial-2.png' },
		{ played: false, source: '/testimonial-3.mp4', poster: '/testimonial-3.png' },
		{ played: false, source: '/testimonial-4.mp4', poster: '/testimonial-4.png' },
		{ played: false, source: '/testimonial-5.mp4', poster: '/testimonial-5.png' }
	]);

	let slideListRef: HTMLVideoElement[] | null[] = $state([]);

	$effect.pre(() => {
		tick().then(() => {
			new Swiper('.swiper', {
				speed: 2000,
				modules: [Pagination, Autoplay, Grid],
				slidesPerView: 4,
				loop: true,
				spaceBetween: 12,

				pagination: {
					enabled: true,
					el: '.swiper-pagination',
					bulletClass: 'swiper-pagination-bullet',
					bulletActiveClass: 'swiper-pagination-bullet-activate !bg-brand !opacity-100'
				},

				breakpoints: {
					0: { slidesPerView: 1, loop: true, grid: { fill: 'row', rows: 1 } },
					780: { slidesPerView: 2, grid: { fill: 'row', rows: 1 } },
					1024: { slidesPerView: 4.5, grid: { fill: 'row', rows: 1 } },
					1280: { slidesPerView: 4, grid: { fill: 'row', rows: 1 } }
				},
				autoplay: { delay: 3000, pauseOnMouseEnter: true }
			});
		});
	});
</script>

<section class="py-[96px] text-black" id="testimonials">
	<article class="mx-auto max-w-[1280px] px-4 text-center md:px-8 xl:px-0">
		<h2 class="font-creative mb-6 text-5xl font-bold text-orange-700 italic">
			{$_('#section.testimonial.title')}
		</h2>

		<p class="mx-auto mb-6 max-w-[710px] text-2xl lg:w-[53%]">
			{$_('#section.testimonial.description')}
		</p>

		<!-- Slider main container -->
		<div class="swiper service-list">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper pb-[56px]">
				<!-- Slides -->

				{#each slides as slideItem, index (slideItem.source)}
					<div class="swiper-slide">
						<div class="relative min-h-[486px] w-full grow rounded-2xl bg-black">
							{#if browser}
								<!-- svelte-ignore a11y_media_has_caption -->
								<video
									bind:this={slideListRef[index]}
									class="h-full w-full rounded-xl object-fill [&::-webkit-media-controls-timeline]:hidden"
									loop
									poster={slideItem.poster}
									src={slideItem.source}
									playsinline
									controls={false}
									controlslist="noplay notimeline nodownload nofullscreen noremoteplayback noplaybackrate track"
									preload="none"
								></video>
							{/if}
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<div
								onclick={() => {
									if (slideListRef[index]) {
										if (!slideItem.played) {
											slideItem.played = true;

											return slideListRef[index].play();
										}

										slideItem.played = false;

										return slideListRef[index].pause();
									}
								}}
								class={`absolute top-1/2 left-1/2 flex h-full w-full -translate-1/2 items-center justify-center rounded-xl ${!slideItem.played ? 'cursor-pointer bg-black/50' : 'bg-black/0'}`}
							>
								{#if !slideItem.played}
									<button
										class="flex cursor-pointer items-center justify-center rounded-xl border border-amber-400/50 bg-amber-400/40 px-6 py-4 text-[20px] text-white/80 backdrop-blur-sm"
									>
										<Icon icon="mingcute:play-fill" />
										<span class="sr-only"
											>{slideItem.played
												? `Pausar video da aluna ${index + 1}`
												: `Iniciar/Recomeçar video da aluna ${index + 1}`}</span
										>
									</button>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev sr-only"></div>
			<div class="swiper-button-next sr-only"></div>
		</div>
	</article>
</section>

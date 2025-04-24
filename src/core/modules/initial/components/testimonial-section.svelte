<script>
	import { tick } from 'svelte';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/grid';

	import { Swiper } from 'swiper';
	import { Autoplay, Grid, Pagination } from 'swiper/modules';

	$effect.pre(() => {
		tick().then(() => {
			new Swiper('.swiper', {
				speed: 2000,
				modules: [Pagination, Autoplay, Grid],
				slidesPerView: 4,
				loop: true,
				autoHeight: true,
				spaceBetween: 12,

				pagination: {
					enabled: true,
					el: '.swiper-pagination',
					bulletClass: 'swiper-pagination-bullet',
					bulletActiveClass: 'swiper-pagination-bullet-activate !bg-brand !opacity-100'
				},

				breakpoints: {
					0: {
						slidesPerView: 1,
						loop: true,
						grid: {
							fill: 'row',
							rows: 1
						}
					},

					780: {
						slidesPerView: 2,
						grid: {
							fill: 'row',
							rows: 1
						}
					},

					1024: {
						slidesPerView: 4.5,
						grid: {
							fill: 'row',
							rows: 1
						}
					}
				},
				autoplay: { delay: 3000, pauseOnMouseEnter: true }
			});
		});
	});
</script>

<section class="py-[96px] px-4 lg:px-0 text-black">
	<div class="mx-auto max-w-[1280px] text-center">
		<h2 class="mb-6 text-5xl font-bold text-amber-400 italic">"Veja agora quem vai sambar"</h2>

		<p class="mx-auto mb-6 lg:w-[53%] max-w-[710px] text-2xl">
			Abaixo estão algumas de minhas alunas que fazem parte do meu método de ensino sobre o samba.
		</p>

		<!-- Slider main container -->
		<div class="swiper service-list">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper pb-[56px]">
				<!-- Slides -->

				<div class="swiper-slide">
					<div class="min-h-[468px] w-full grow rounded-xl border-2 border-amber-400 bg-black">
						<div class=""></div>
					</div>
				</div>

				<div class="swiper-slide">
					<div class="min-h-[468px] w-full grow rounded-xl border-2 border-amber-400 bg-black">
						<div class=""></div>
					</div>
				</div>

				<div class="swiper-slide">
					<div class="min-h-[468px] w-full grow rounded-xl border-2 border-amber-400 bg-black">
						<div class=""></div>
					</div>
				</div>

				<div class="swiper-slide">
					<div class="min-h-[468px] w-full grow rounded-xl border-2 border-amber-400 bg-black">
						<div class=""></div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="min-h-[468px] w-full grow rounded-xl border-2 border-amber-400 bg-black">
						<div class=""></div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="min-h-[468px] w-full grow rounded-xl border-2 border-amber-400 bg-black">
						<div class=""></div>
					</div>
				</div>
			</div>
			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev sr-only"></div>
			<div class="swiper-button-next sr-only"></div>
		</div>
	</div>
</section>

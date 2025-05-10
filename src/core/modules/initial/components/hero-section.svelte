<section class="relative bg-black lg:h-[100vh] lg:overflow-hidden">
	<div class="mx-auto flex h-full max-w-[1280px] items-center">
		<img
			class="absolute top-1/2 left-0 z-20 -translate-y-1/2 lg:z-10 lg:w-[312px]"
			width="532"
			height="1131"
			fetchpriority="low"
			decoding="sync"
			loading="lazy"
			src="/feather-left.png"
			alt=""
		/>
		<img
			class="absolute top-1/2 right-0 z-40 w-[156px] -translate-y-1/2 lg:z-10 lg:w-[312px]"
			width="532"
			height="1131"
			fetchpriority="low"
			decoding="sync"
			loading="lazy"
			src="/feather-right.png"
			alt=""
		/>

		<div
			class="relative z-50 flex w-full flex-col items-center justify-between gap-3 px-4 pt-[50vh] text-white lg:flex-row lg:px-0 lg:pt-0"
		>
			<div class="text-center lg:w-[30%] lg:text-left">
				<h1 class="mb-4 text-4xl font-bold text-white italic lg:text-5xl lg:text-amber-400">
					“Vem Sambar, O Samba Cura!”
				</h1>
				<p class="mx-auto max-w-[362px] rounded-xl bg-amber-950/50 p-2 text-sm lg:max-w-none">
					Eu sou Luana Micheli, a Musa da Escola de samba de Colorado do Bras do Carnaval São Paulo
					e Rainha de Bateria da Escola de samba Saudosa Maloca do grupo UESP.
				</p>
			</div>

			<div
				class="flex flex-col items-center self-end text-center lg:w-[30%] lg:items-start lg:text-left"
			>
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<div
					class="lg:max-w-[] mb-8 h-[502px] w-[80%] max-w-[362px] overflow-hidden rounded-3xl bg-black"
				>
					<!-- svelte-ignore a11y_media_has_caption -->
					<!-- <video
						class="h-full w-full object-fill [&::-webkit-media-controls-timeline]:hidden"
						loop
						src="/presentation.mp4"
						playsinline
						controls={false}
						controlslist="play notimeline nodownload nofullscreen noremoteplayback noplaybackrate track"
						preload="none"
					></video> -->
				</div>
				<p class="rounded-xl bg-amber-950/50 p-2 text-sm">
					Luana Michelly sambista desde 1990, é uma professora a mais de x anos na escola de samba,
					com seu método de ensino e com sua íncrivel frase:
				</p>
				<p class="text-2xl font-bold text-amber-400 italic">“Todas nós somos Rainha e Musas”</p>
			</div>
		</div>

		<img
			class="absolute top-0 left-1/2 z-30 max-w-[404px] -translate-x-1/2 lg:max-w-none"
			src="/hero-highlight.png"
			alt=""
			fetchpriority="high"
			width="594"
			height="868"
		/>

		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div
			class="absolute bottom-0 left-0 min-h-[96px] w-full bg-linear-to-b from-transparent to-black to-50% lg:z-40"
		/>
	</div>
</section>

<section class="relative bg-black lg:h-[100vh] lg:overflow-hidden">
	<div class="mx-auto flex h-full max-w-[1280px] items-center">
		<img
			class="absolute z-20 lg:z-10 top-1/2 left-0  -translate-y-1/2 lg:w-[312px]"
			width="532"
			height="1131"
			fetchpriority="low"
			decoding="sync"
			loading="lazy"
			src="/feather-left.png"
			alt=""
		/>
		<img
			class="absolute z-40 lg:z-10 top-1/2 right-0 w-[156px] -translate-y-1/2 lg:w-[312px]"
			width="532"
			height="1131"
			fetchpriority="low"
			decoding="sync"
			loading="lazy"
			src="/feather-right.png"
			alt=""
		/>

		<div
			class="relative px-4 gap-3 lg:px-0 pt-[50vh] lg:pt-0 z-50 flex w-full flex-col items-center justify-between text-white lg:flex-row"
		>
			<div class="text-center lg:text-left lg:w-[30%]">
				<h1 class="text-4xl lg:text-2xl font-bold mb-4">Luana Michelly a nova rainha do carnaval!</h1>
				<p class="text-sm p-2 max-w-[362px] mx-auto lg:max-w-none bg-amber-950/50 rounded-xl">
					Eu sou Luana Micheli, a Musa da Escola de samba de Colorado do Bras do Carnaval São Paulo
					e Rainha de Bateria da Escola de samba Saudosa Maloca do grupo UESP.
				</p>
			</div>

			<div class="flex flex-col items-center lg:items-start self-end text-center lg:w-[30%] lg:text-left">
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<div class="mb-8 h-[502px] w-[80%] max-w-[362px] lg:max-w-[] overflow-hidden rounded-3xl bg-black">
					<!-- svelte-ignore a11y_media_has_caption
                    <video
                        class="h-full w-full object-fill [&::-webkit-media-controls-timeline]:hidden"
                        autoplay
                        loop
                        src="/presentation.mp4"
                        playsinline
                        controls
                        controlslist="play notimeline nodownload nofullscreen noremoteplayback noplaybackrate track"
                        preload="none"
                    ></video> -->
				</div>
				<p class="text-sm p-2 bg-amber-950/50 rounded-xl">
					Luana Michelly sambista desde 1990, é uma professora a mais de x anos na escola de samba,
					com seu método de ensino e com sua íncrivel frase:
				</p>
				<p class="text-2xl font-bold text-amber-400 italic">"Todas nós somos Rainha e Musas"</p>
			</div>
		</div>

		<img
			class="absolute top-0 z-30 left-1/2 -translate-x-1/2"
			src="/hero-highlight.png"
			alt=""
			fetchpriority="high"
			width="594"
			height="868"
		/>

		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div
			class="absolute bottom-0 left-0 min-h-[96px] w-full bg-linear-to-b from-transparent to-black to-50%"
		/>
	</div>
</section>

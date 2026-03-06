<script lang="ts">
	/* eslint-disable @typescript-eslint/no-explicit-any */
	import 'swiper/css';
	import 'swiper/css/grid';
	import 'swiper/css/pagination';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import HeroSection from '../components/hero-section.svelte';
	import TestimonialSection from '../components/testimonial-section.svelte';
	import HealsSection from '../components/heals-section.svelte';
	import BenefitSection from '../components/benefit-section.svelte';
	import AboutSection from '../components/about-section.svelte';

	let AboutSectionLoaded: any;
	let BenefitSectionLoaded: any;
	let HealthSectionLoaded: any;
	let TestimonialSectionLoaded: any;

	onMount(async () => {
		if (browser) {
			AboutSectionLoaded = (await import('../components/about-section.svelte')).default;
			BenefitSectionLoaded = (await import('../components/benefit-section.svelte')).default;
			HealthSectionLoaded = (await import('../components/heals-section.svelte')).default;
			TestimonialSectionLoaded = (await import('../components/testimonial-section.svelte')).default;
		}
	});
</script>

<main>
	<HeroSection />

	{#if AboutSectionLoaded}
		<svelte:component this={AboutSectionLoaded} />
	{:else}
		<AboutSection />
	{/if}

	{#if BenefitSectionLoaded}
		<svelte:component this={BenefitSectionLoaded} />
	{:else}
		<BenefitSection />
	{/if}

	{#if HealthSectionLoaded}
		<svelte:component this={HealthSectionLoaded} />
	{:else}
		<HealsSection />
	{/if}

	{#if TestimonialSectionLoaded}
		<svelte:component this={TestimonialSectionLoaded} />
	{:else}
		<TestimonialSection />
	{/if}
</main>

<script>
	import Footer from './footer.svelte';
	import Header from './header.svelte';

	const { children } = $props();
</script>

<Header />

{@render children()}

<Footer />

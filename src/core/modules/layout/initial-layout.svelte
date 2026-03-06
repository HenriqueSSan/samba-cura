<script>
	import Footer from './footer.svelte';
	import Header from './header/header.root.svelte';

	const { children } = $props();
</script>

<Header />

{@render children()}

<Footer />

<script lang="ts">
	import '../app.css';
	import InitialLayout from '../core/modules/layout/initial-layout.svelte';

	let { children } = $props();
</script>

<InitialLayout>
	{@render children()}
</InitialLayout>

<script>
	import '../app.css';
	import { SvelteUIProvider, colorScheme } from '@svelteuidev/core';
	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';
</script>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
	<main>
		<Header />
		<main class="px-8 transition-colors">
				<slot />
		</main>
		<Footer />
	</main>
</SvelteUIProvider>

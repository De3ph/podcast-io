<script>
	import '../app.css';
	import { SvelteUIProvider, colorScheme } from '@svelteuidev/core';
	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';
</script>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
	<main class="min-h-screen flex flex-col">
		<header ><Header /></header>
		<main class="flex flex-col grow px-8 transition-colors">
			<slot />
		</main>
		<footer><Footer /></footer>
	</main>
</SvelteUIProvider>

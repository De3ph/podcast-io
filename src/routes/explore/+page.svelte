<script lang="ts">
	import PodcastCard from '$components/explore/PodcastCard.svelte';
	import { Center, SimpleGrid, colorScheme } from '@svelteuidev/core';
	import type { PageData } from './$types';
	import { twJoin } from 'tailwind-merge';

	export let data: PageData;
	const { podcasts } = data;
</script>

<main>
	<Center>
		<p class="text-3xl my-16 md:my-20 md:text-4xl lg:text-5xl lg:my-20">
			Explore the <span
				class={twJoin(
					"font-bold bg-clip-text text-transparent bg-gradient-to-r",
					$colorScheme === "dark" ? "from-slate-400 to-slate-800" : "from-slate-800 to-slate-500"
				)}
				>World</span
			> of podcasts
		</p>
	</Center>

	<SimpleGrid
		class="px-8 sm:px-16 md:px-16 xl:px-24"
		breakpoints={[
			{ minWidth: 1023, cols: 3, spacing: 52 },
			{ minWidth: 767, cols: 2 , spacing: 40},
			{ minWidth: 639, cols: 1}
		]}
	>
		{#each podcasts as podcast}
				<PodcastCard {podcast} />
		{/each}
	</SimpleGrid>
</main>

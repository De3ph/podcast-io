<script lang="ts">
	import PodcastCard from '$components/explore/PodcastCard.svelte';
	import { Center, SimpleGrid, Title, colorScheme } from '@svelteuidev/core';
	import type { PageData } from './$types';
	import { twJoin } from 'tailwind-merge';

	export let data: PageData;
	const { podcasts } = data;
</script>

<main class="space-y-16">
	<Center>
		<p class="text-3xl">
			Explore the <span
				class={twJoin(
					"font-semibold bg-clip-text text-transparent bg-gradient-to-r",
					$colorScheme === "dark" ? "from-slate-400 to-slate-800" : "from-slate-800 to-slate-400"
				)}
				>World</span
			> of podcasts
		</p>
	</Center>

	<SimpleGrid
		class="px-6 sm:px-8 md:px-12 xl:px-24 gap-16"
		breakpoints={[
			{ minWidth: 1536, cols: 4 },
			{ minWidth: 1023, cols: 3 },
			{ minWidth: 767, cols: 2 },
			{ minWidth: 639, cols: 1 }
		]}
	>
		{#each podcasts as podcast}
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
				<PodcastCard {podcast} />
		{/each}
	</SimpleGrid>
</main>

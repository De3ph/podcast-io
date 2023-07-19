<script lang="ts">
    import PodcastCard from '$components/explore/PodcastCard.svelte';
	import { SimpleGrid } from '@svelteuidev/core';
import type { PageData } from './$types';
    
    export let data: PageData;

    const {podcasts} = data;
</script>

<main>
    Explore

    <SimpleGrid class="px-6 sm:px-8 md:px-12 xl:px-24 gap-x-12 gap-y-16" breakpoints={[
        { minWidth: 1536, cols: 5 },
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
    {/each}
    </SimpleGrid>
</main>
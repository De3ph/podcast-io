<script lang="ts">
	import type { PageData } from '../$types';
	import { isUserLoggedIn, user } from '$stores/sessionStore';
	import { Flex, SimpleGrid, Title } from '@svelteuidev/core';
	import PodcastCard from '$components/explore/PodcastCard.svelte';

	export let data: PageData;
	const favs: [] = data?.favs;

</script>

{#if !$isUserLoggedIn}
	<div>Your session has expired. Please login again.</div>
{:else}
	<!-- User access granted -->

	<main class="mt-6">
		<SimpleGrid cols={1} class="space-y-9">
			<Flex gap="lg">
				<Title order={2}>
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
						>{$user?.email}'s
					</span>
					Dashboard</Title
				>
			</Flex>
			<section>
				<div>
					<Title order={3}>Favorite Podcasts</Title>
				</div>
			</section>
			<section>
				<SimpleGrid
					breakpoints={[
						{ minWidth: 1536, cols: 4 },
						{ minWidth: 1023, cols: 3 },
						{ minWidth: 767, cols: 2 },
						{ minWidth: 639, cols: 1 }
					]}
				>
					{#if favs.length === 0}
						<div>You have no favorite podcasts :/</div>
					{:else}
						{#each favs as fav}
							<PodcastCard podcast={fav} isFavorite={true} />
						{/each}
					{/if}
				</SimpleGrid>
			</section>
		</SimpleGrid>
	</main>
{/if}

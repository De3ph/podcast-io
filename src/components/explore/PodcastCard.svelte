<script lang="ts">
	import { user } from '$stores/sessionStore';
	import { colorScheme } from '@svelteuidev/core';
	import { twJoin } from 'tailwind-merge';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { Card, Group, Image, Stack, ActionIcon } from '@svelteuidev/core';
	import { Star, StarFilled } from 'radix-icons-svelte';
	import { removeFavourite, addToFavourites, isPodcastInFavourites } from '$lib/supabaseClient';
	import type { IPodcast } from '../../types';
	import { onMount } from 'svelte';

	export let podcast: IPodcast;
	let isFavorite: boolean = false;

	const checkIsFav = async () => {
		if (!$user) return;
		
		const isInFavourite = await isPodcastInFavourites(podcast.id, $user?.id as string);
		isFavorite = isInFavourite;
	};

	const handleClickFilledStar = async () => {
		const { error } = await removeFavourite(podcast.id, $user?.id as string);
		if (!error) {
			isFavorite = false;
		}
	};

	const handleClickStar = async () => {
		const res = await addToFavourites(podcast.id, $user?.id as string);
		if (!res) {
			isFavorite = true;
		}
	};

	onMount(checkIsFav);

	const href = `/podcast/${podcast.id}`;
</script>

<div>
	<FadeIn>
		<Card
			class={twJoin(
				'h-full shadow-sm hover:shadow-lg transition-all duration-200 border hover:scale-105',
				$colorScheme === 'dark'
					? 'border-gray-700 shadow-gray-700 hover:shadow-gray-600'
					: 'border-gray-300 shadow-gray-300'
			)}
		>
			<Card.Section>
				<a {href}>
					<Image
						src="/podcast_grid_1.jpg"
						height={150}
						alt="cover"
						usePlaceholder
						class="object-cover"
					/>
				</a>
			</Card.Section>

			<Card.Section>
				<Stack>
					<div class="py-3 pl-2">
						<p class="text-lg font-medium line-clamp-1">{podcast.name}</p>
					</div>

					<Group position={$user ? 'apart' : 'right'} class="pb-4 pr-3">
						{#if $user}
							<ActionIcon color="yellow" variant="transparent">
								{#if isFavorite}
									<button on:click={handleClickFilledStar}>
										<StarFilled size={18} />
									</button>
								{:else}
									<button on:click={handleClickStar}>
										<Star size={18} />
									</button>
								{/if}
							</ActionIcon>
						{/if}
						<p class="line-clamp-1 text-right">
							{podcast.author}
						</p>
					</Group>
				</Stack>
			</Card.Section>
		</Card>
	</FadeIn>
</div>

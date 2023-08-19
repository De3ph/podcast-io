<script lang="ts">
	import { user } from '$stores/sessionStore';
	import { colorScheme } from '@svelteuidev/core';
	import { twJoin } from 'tailwind-merge';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { Card, Group, Image, Stack, Text, Title, ActionIcon } from '@svelteuidev/core';
	import { Star, StarFilled } from 'radix-icons-svelte';
	import { supabase, removeFavourite, addToFavourites } from '$lib/supabaseClient';
	import type { IPodcast } from '../../types';

	export let podcast: IPodcast;
	export let isFavorite: boolean = false;

	const handleClickFilledStart = async () => {
		const { error } = await removeFavourite(podcast.id, $user?.id as string);
		if (!error) {
			isFavorite = false;
		}
	};

	const handleClickStart = async () => {
		const res = await addToFavourites(podcast.id, $user?.id as string);
		if (!res) {
			isFavorite = true;
		}
	};

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
			<Stack class="px-1 pt-2">
				<Title order={2}>{podcast.name}</Title>

				<Group class="px-4" position={$user ? 'apart' : 'right'}>
					{#if $user}
						<ActionIcon color="yellow" variant="transparent">
							{#if isFavorite}
								<button on:click={handleClickFilledStart}>
									<StarFilled size={18} />
								</button>
							{:else}
								<button on:click={handleClickStart}>
									<Star size={18} />
								</button>
							{/if}
						</ActionIcon>
					{/if}
					<Text>
						{podcast.author}
					</Text>
				</Group>
			</Stack>
		</Card>
	</FadeIn>
</div>

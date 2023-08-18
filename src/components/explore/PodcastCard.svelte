<script lang="ts">
	import { sessionStore } from '$stores/sessionStore';
	import { colorScheme } from '@svelteuidev/core';
	import { twJoin } from 'tailwind-merge';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { Card, Group, Image, Stack, Text, Title, ActionIcon } from '@svelteuidev/core';
	import { Star, StarFilled } from 'radix-icons-svelte';
	import { supabase } from '$lib/supabaseClient';
	import type { IPodcast } from '../../types';

	export let podcast: IPodcast;
	export let isFavorite: boolean = false;

	const removeFavourite = async () => {
		const { error } = await supabase
			.from('favourites')
			.delete()
			.match({ podcast_id: podcast.id, user_id: $sessionStore?.user.id });

		isFavorite = false;
	};

	const addToFavourites = async () => {
		const { data } = await supabase
			.from('favourites')
			.select()
			.match({ podcast_id: podcast.id, user_id: $sessionStore?.user.id });

		if (data?.length > 0) {
			return;
		}

		const { error } = await supabase.from('favourites').insert({
			podcast_id: podcast.id,
			user_id: $sessionStore?.user.id
		});
		isFavorite = true;
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

				<Group class="px-4" position={$sessionStore?.access_token ? 'apart' : 'right'}>
					{#if $sessionStore?.access_token}
						<ActionIcon color="yellow" variant="transparent">
							{#if isFavorite}
								<button on:click={removeFavourite}>
									<StarFilled size={18} />
								</button>
							{:else}
								<button on:click={addToFavourites}>
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

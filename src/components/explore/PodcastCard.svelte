<script lang="ts">
	import { colorScheme } from '@svelteuidev/core';
	import {twJoin} from "tailwind-merge"
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { Card, Group, Image, Stack, Text, Title } from '@svelteuidev/core';
	export let podcast: IPodcast;

	const href = `/podcast/${podcast.id}`;

</script>

<a {href}>
	<FadeIn>
		<Card
			class={twJoin("h-full space-y-3 shadow-sm hover:shadow-lg transition-shadow border",
			$colorScheme === "dark" ? "border-gray-700 shadow-gray-700 hover:shadow-gray-600" : "border-gray-300 shadow-gray-300",
			)}
		>
			<Card.Section padding="lg">
				<Image
					src="/podcast_grid_1.jpg"
					height={150}
					alt="cover"
					usePlaceholder
					class="object-cover"
				/>
			</Card.Section>

			<Stack class="px-1 pt-2">
				<Title order={2}>{podcast.name}</Title>

				<Group class="px-4" position="right">
					<Text>
						{podcast.author}
					</Text>
				</Group>
			</Stack>
		</Card>
	</FadeIn>
</a>

<script lang="ts">
	import { Card, Group, Image, Stack, Text, Title } from '@svelteuidev/core';
	export let podcast: IPodcast;

	const href = `/podcast/${podcast.id}`
</script>

<a {href}>
	<Card class="h-full space-y-3">
		<Card.Section padding="lg">
			<Image src="/podcast_grid_1.jpg" height={150} alt="cover" usePlaceholder class="object-cover" />
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
</a>

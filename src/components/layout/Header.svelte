<script>
	import { Container, Flex, Title, Group, Anchor } from '@svelteuidev/core';
	import ThemeToggle from '$components/layout/components/header/ThemeToggle.svelte';
</script>

<Container fluid class="p-8">
	<Flex justify="space-between">
		<Anchor href="/" class="no-underline hover:no-underline">
			<Title order={2} class="hover:text-slate-600">Podcast.io</Title>
		</Anchor>
		<Group>
			<ThemeToggle />
		</Group>
	</Flex>
</Container>

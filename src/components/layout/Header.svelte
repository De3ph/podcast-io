<script>
	import { Container, Flex, Title, Group } from '@svelteuidev/core';
	import ThemeToggle from '$components/layout/components/header/ThemeToggle.svelte';
</script>

<Container fluid class="p-8">
	<Flex justify="space-between">
		<a href="/" class="no-underline hover:no-underline">
			<Title order={1} class="hover:text-slate-600">Podcast.io</Title>
		</a>
		<Group>
			<ThemeToggle />
		</Group>
	</Flex>
</Container>

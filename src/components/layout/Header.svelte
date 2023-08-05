<script>
	import { Container, Flex, Title, Group } from '@svelteuidev/core';
	import ThemeToggle from '$components/layout/components/header/ThemeToggle.svelte';
	import AuthButton from '$components/auth/AuthButton.svelte';
	import { goto } from '$app/navigation';

	const redirectToLoginPage = () => {
		goto('/login');
	};

</script>

<Container fluid class="p-8">
	<Flex justify="space-between">
		<a href="/" class="no-underline hover:no-underline">
			<Title order={1} class="hover:text-slate-600">Podcast.io</Title>
		</a>
		<Group>
			<AuthButton type="Login" on:click={redirectToLoginPage} />
			<ThemeToggle /> 
		</Group>
	</Flex>
</Container>

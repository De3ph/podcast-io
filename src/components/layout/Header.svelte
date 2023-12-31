<script>
	import { tick } from 'svelte';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { sessionStore, resetStore } from '$stores/sessionStore';

	import { Container, Flex, Title, Group, Button, MediaQuery } from '@svelteuidev/core';
	import { useViewportSize } from '@svelteuidev/composables';
	import { Dashboard } from 'radix-icons-svelte';

	import ThemeToggle from '$components/layout/components/header/ThemeToggle.svelte';
	import AuthButton from '$components/auth/AuthButton.svelte';
	import Drawer from './Drawer.svelte';

	// eğer user undefiend ise => not logged in
	// eğer user varsa => logged in

	const viewport = useViewportSize();

	$: ({ width, height } = $viewport);

	$: isUserLoggedIn = $sessionStore?.user !== undefined ? true : false;

	$: dashboardRoute = `/dashboard/${$sessionStore?.user.email}`;

	const redirectToLoginPage = () => {
		goto('/login');
	};

	const redirectToDashboard = () => {
		goto(dashboardRoute);
	};

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		} else {
			resetStore();
			await tick();
			goto('/');
		}
	};
</script>

<Container fluid class="p-8">
	<Flex justify="space-between">
		<a href="/" class="no-underline hover:no-underline">
			<Title order={1} class="font-serif hover:text-slate-600">Podcast.io</Title>
		</a>

		{#if width > 640}
			<section>
				<Group>
					<AuthButton
						type={isUserLoggedIn ? 'Logout' : 'Login'}
						on:click={isUserLoggedIn ? logout : redirectToLoginPage}
					/>
					{#if isUserLoggedIn}
						<Button on:click={redirectToDashboard} ripple color="dark" class="md:group shadow-md">
							<Dashboard slot="leftIcon" class="text-white group-hover:text-slate-600" />
							Dashboard
						</Button>
					{/if}
					<ThemeToggle />
				</Group>
			</section>
		{:else}
			<Drawer
			{isUserLoggedIn}
			{logout}
			{redirectToLoginPage}
			{redirectToDashboard}
			/>
		{/if}
	</Flex>
</Container>

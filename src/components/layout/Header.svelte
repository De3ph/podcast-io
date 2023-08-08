<script>
	import { Container, Flex, Title, Group } from '@svelteuidev/core';
	import ThemeToggle from '$components/layout/components/header/ThemeToggle.svelte';
	import AuthButton from '$components/auth/AuthButton.svelte';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { sessionStore, resetStore } from '$stores/sessionStore';
	import { tick } from 'svelte';

	// eğer user undefiend ise => not logged in 
	// eğer user varsa => logged in

	$: isUserLoggedIn = $sessionStore?.user !== undefined ? true : false;

	const redirectToLoginPage = () => {
		goto('/login');
	};

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if(error){
			console.log(error);
		}else{
			resetStore();
			await tick();
			goto('/');
		}
	};
</script>

<Container fluid class="p-8">
	<Flex justify="space-between">
		<a href="/" class="no-underline hover:no-underline">
			<Title order={1} class="hover:text-slate-600">Podcast.io</Title>
		</a>
		<Group>
			<AuthButton
				type={isUserLoggedIn ? 'Logout' : 'Login'}
				on:click={isUserLoggedIn ? logout : redirectToLoginPage}
			/>
			<ThemeToggle />
		</Group>
	</Flex>
</Container>

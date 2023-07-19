<script lang="ts">
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { supabase } from '$lib/supabaseClient';
	import { Button, Stack, TextInput, Container } from '@svelteuidev/core';
	let email: string;
	let password: string;

	const handleClick = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (data?.session?.access_token) {
			alert('logged');
		}
	};
</script>

<FadeIn>
	<Container size="sm">
		<Stack>
			<TextInput placeholder="johndoe@gmail.com" label="Email" required bind:value={email} />

			<TextInput
				type="password"
				placeholder="********"
				label="Password"
				required
				bind:value={password}
			/>

			<Button color="dark" on:click={handleClick}>Login</Button>
		</Stack>
	</Container>
</FadeIn>

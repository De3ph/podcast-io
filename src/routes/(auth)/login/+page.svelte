<script lang="ts">
	import {goto} from "$app/navigation"
	import { supabase } from '$lib/supabaseClient';
	import {sessionStore} from "$stores/sessionStore"
	import loginSchema from '../../../schemas/LoginSchema';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import {Stack, TextInput, Container } from '@svelteuidev/core';
	import AuthButton from '$components/auth/AuthButton.svelte';
	import { tick } from "svelte";
	
	let email: string;
	let password: string;

	const handleClick = async () => {
		const credentials = { email, password };
		const zodResult = loginSchema.safeParse(credentials)
		if (zodResult.success) {
			const { data:{session}, error } = await supabase.auth.signInWithPassword({
				email,
				password
			});

			if (session?.access_token) {
				sessionStore.set(session)
				await tick()
				goto(`/dashboard/${session.user.email}`)
				
			}else{
				console.log("🚀 ~ file: +page.svelte:21 ~ handleClick ~ error:", error)
			}
		}else{
			alert(zodResult.error)
		}
		
	};
</script>

<FadeIn>
	<Container size="sm" class="min-h-screen">
		<Stack>
			<TextInput placeholder="johndoe@gmail.com" label="Email" required bind:value={email} />

			<TextInput
				type="password"
				placeholder="********"
				label="Password"
				required
				bind:value={password}
			/>

			<AuthButton type="Login" on:click={handleClick} />
		</Stack>
	</Container>
</FadeIn>

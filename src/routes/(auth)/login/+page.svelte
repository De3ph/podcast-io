<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { sessionStore } from '$stores/sessionStore';
	import loginSchema from '../../../schemas/LoginSchema';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { ActionIcon, Stack, TextInput } from '@svelteuidev/core';
	import AuthButton from '$components/auth/AuthButton.svelte';
	import { tick } from 'svelte';
	import { EnvelopeClosed, EyeOpen, EyeNone, LockClosed } from 'radix-icons-svelte';

	let email: string;
	let password: string;

	const handleClick = async () => {
		const credentials = { email, password };
		const zodResult = loginSchema.safeParse(credentials);
		if (zodResult.success) {
			const {
				data: { session },
				error
			} = await supabase.auth.signInWithPassword({
				email,
				password
			});

			if (session?.access_token) {
				sessionStore.set(session);
				await tick();
				goto(`/dashboard/${session.user.email}`);
			} else {
				console.log('🚀 ~ file: +page.svelte:21 ~ handleClick ~ error:', error);
			}
		} else {
			alert(zodResult.error);
		}
	};
	let isPasswordShouldBeVisible = false;
	$: passwordInputType = isPasswordShouldBeVisible ? 'text' : 'password';

	const handleActionClick = () => {
		isPasswordShouldBeVisible = !isPasswordShouldBeVisible;
		console.log(
			'🚀 ~ file: +page.svelte:43 ~ handleActionClick ~ isPasswordShouldBeVisible:',
			isPasswordShouldBeVisible
		);
	};
</script>

<FadeIn>
	<Stack class="mt-8 md:mx-auto md:w-3/5 xl:w-2/5">
		<TextInput
			placeholder="johndoe@gmail.com"
			label="Email"
			icon={EnvelopeClosed}
			required
			bind:value={email}
		>
	
	</TextInput>
		<!-- TODO - Add Forgot Password -->
		<TextInput
			type={passwordInputType}
			placeholder="********"
			label="Password"
			icon={LockClosed}
			required
			bind:value={password}
		>
			<svelte:fragment slot="rightSection">
				<ActionIcon variant="transparent" class="group" on:click={handleActionClick}>
					{#if isPasswordShouldBeVisible}
						<EyeNone class="text-black group-hover:text-slate-600" />
					{:else}
						<EyeOpen class="text-black group-hover:text-slate-600" />
					{/if}
				</ActionIcon>
			</svelte:fragment>
		</TextInput>
		<div class="mx-auto mt-3">
			<AuthButton type="Login" on:click={handleClick} />
		</div>
	</Stack>
</FadeIn>

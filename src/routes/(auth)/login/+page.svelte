<script lang="ts">
	import { handleLogin } from '$lib/supabaseClient';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { ActionIcon, Alert, Stack, TextInput } from '@svelteuidev/core';
	import AuthButton from '$components/auth/AuthButton.svelte';
	import { EnvelopeClosed, EyeOpen, EyeNone, LockClosed } from 'radix-icons-svelte';
	import { validateLoginSchema } from '$utils/parseZodResult';
	import Dialog, { openDialog } from '$components/Dialog.svelte';

	let email: string;
	let password: string;

	let loginSchemaError: { email: string[]; password: string[] } = {
		email: [],
		password: []
	};
	let loginError;

	let isPasswordShouldBeVisible = false;
	$: passwordInputType = isPasswordShouldBeVisible ? 'text' : 'password';
	const togglePasswordVisibility = () => {
		isPasswordShouldBeVisible = !isPasswordShouldBeVisible;
	};

	const checkCredentials = () => {
		const credentials = { email, password };
		const isAnyError = validateLoginSchema(credentials);
		return isAnyError;
	};

	const onClick = async () => {
		const isAnyError = checkCredentials();
		if (!isAnyError) {
			const res = await handleLogin(email, password);
			if (res) {
				loginError = res.message;
				openDialog();
			}
		} else {
			loginSchemaError = isAnyError;
		}
	};
</script>

<FadeIn>
	<Dialog>
		{loginError}
	</Dialog>
	<Stack class="mt-8 md:mx-auto md:w-3/5 xl:w-2/5">
		<TextInput
			placeholder="johndoe@gmail.com"
			label="Email"
			icon={EnvelopeClosed}
			required
			error={loginSchemaError?.email[0]}
			bind:value={email}
		/>
		<!-- TODO - Add Forgot Password -->
		<TextInput
			type={passwordInputType}
			placeholder="********"
			label="Password"
			icon={LockClosed}
			required
			error={loginSchemaError?.password[0]}
			bind:value={password}
		>
			<svelte:fragment slot="rightSection">
				<ActionIcon variant="transparent" class="group" on:click={togglePasswordVisibility}>
					{#if isPasswordShouldBeVisible}
						<EyeNone class="text-black group-hover:text-slate-600" />
					{:else}
						<EyeOpen class="text-black group-hover:text-slate-600" />
					{/if}
				</ActionIcon>
			</svelte:fragment>
		</TextInput>
		<div class="mx-auto mt-3">
			<AuthButton type="Login" on:click={onClick} />
		</div>
	</Stack>
</FadeIn>

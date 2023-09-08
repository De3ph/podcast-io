<script lang="ts">
	import { ActionIcon, Burger, Group, Menu, Stack } from '@svelteuidev/core';
	import { Button, Dashboard, HamburgerMenu } from 'radix-icons-svelte';
	import AuthButton from '$components/auth/AuthButton.svelte';
	import ThemeToggle from '$components/layout/components/header/ThemeToggle.svelte';

	let opened = false;

	const handleClick = () => {
		opened = !opened;
	};

	export let isUserLoggedIn = false;
	export let logout = () => {};
	export let redirectToLoginPage = () => {};
	export let redirectToDashboard = () => {};
</script>

<main>
	<Group class="flex items-center justify-end">
		<ThemeToggle />
		<Menu
		>
			<ActionIcon slot="control">
				<HamburgerMenu size={30} />
			</ActionIcon>
			<Menu.Item>
				<AuthButton
					type={isUserLoggedIn ? 'Logout' : 'Login'}
					on:click={isUserLoggedIn ? logout : redirectToLoginPage}
				/>
				{#if isUserLoggedIn}
					<Button on:click={redirectToDashboard} ripple color="dark" class="group shadow-md">
						<Dashboard slot="leftIcon" class="text-white" />
						Dashboard
					</Button>
				{/if}
			</Menu.Item>
		</Menu>
	</Group>
</main>

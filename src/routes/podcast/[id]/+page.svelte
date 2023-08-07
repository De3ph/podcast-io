<script lang="ts">
	import type { PageData } from './$types';
	import { Button, Center, Stack } from '@svelteuidev/core';

	export let data = {} as PageData;
	const { podcast, error } = data;
</script>

<main>
	{#if error}
		<Center>
			<Stack align="center">
				<h1 class="text-3xl">Ooops! Error occured.</h1>
				<Button size="lg" color="dark" on:click={() => location.reload()}>Reload</Button>
			</Stack>
		</Center>
	{:else if !podcast}
		<Center>
			<Stack align="center">
					<h1 class="text-3xl text-center">No podcast :/</h1>
					<Button size="lg" color="dark" on:click={() => location.reload()}>Reload</Button>
			</Stack>
		</Center>
	{:else}
		<h1>{podcast?.name}</h1>
	{/if}
</main>

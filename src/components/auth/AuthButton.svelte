<script lang="ts">
	import { Button, colorScheme, type ButtonVariant } from '@svelteuidev/core';

	export let type: 'Login' | 'Logout';

	$: variant = $colorScheme === 'dark' ? 'white' : 'filled' as ButtonVariant;
</script>

{#if type === 'Login'}
	<Button color="dark" {variant} on:click>
		{type}
	</Button>
{:else}
	<Button color="dark">
		{type}
	</Button>
{/if}

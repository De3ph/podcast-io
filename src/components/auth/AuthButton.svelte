<script lang="ts">
	import { Button } from '@svelteuidev/core';

	export let type: 'Login' | 'Logout';
	
</script>

{#if type === 'Login'}
	<Button color="dark" on:click>
		Login
	</Button>
{:else}
	<Button color="dark" on:click>
		Logout
	</Button>
{/if}

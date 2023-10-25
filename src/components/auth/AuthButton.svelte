<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import { Enter, Exit } from 'radix-icons-svelte';

	export let type: 'Login' | 'Logout';
</script>

{#if type === 'Login'}
	<Button color="dark" on:click class="group">
		Login
		<Enter slot="rightIcon" class="text-white group-hover:text-slate-600" />
	</Button>
{:else}
	<Button color="dark" on:click class="group">
		Logout
		<Exit slot="rightIcon" class="text-white group-hover:text-slate-600" />
	</Button>
{/if}

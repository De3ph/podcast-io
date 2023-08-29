<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import { Enter, Exit } from 'radix-icons-svelte';

	export let type: 'Login' | 'Logout';
	
</script>

{#if type === 'Login'}
	<Button color="dark" on:click class="group" >
		<Enter slot="leftIcon" class="text-white group-hover:text-slate-600" />
		Login
	</Button>
{:else}
	<Button color="dark" on:click class="group">
		
		<Exit slot="leftIcon" class="text-white group-hover:text-slate-600" />
		Logout
	</Button>
{/if}

<script>
	import { ActionIcon, colorScheme } from '@svelteuidev/core';
	import { Moon, Sun } from 'radix-icons-svelte';
	import toggleTheme from '../../../../utils/toggleTheme';
	
	const size = 30

</script>

<section>
	<ActionIcon variant="transparent" on:click={toggleTheme}>
		{#if $colorScheme === 'light'}
			<Moon {size} color="black" />
		{:else}
			<Sun {size} color="white" />
		{/if}
	</ActionIcon>
</section>

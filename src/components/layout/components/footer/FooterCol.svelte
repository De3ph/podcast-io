<script lang="ts">
	import { Box, Stack, Anchor } from '@svelteuidev/core';
	export let items: IFooterLink[];
</script>

<Box>
	<Stack align="center">
		{#each items as item (item.url)}
			<span class="no-underline text-lg text-neutral-100 hover:text-neutral-300">
                <a href={item.url}>{item.name}</a>
            </span>
		{/each}
	</Stack>
</Box>

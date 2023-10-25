<script lang="ts">
	import { Box, Stack } from '@svelteuidev/core';
	import type { IFooterLink } from "../../../../types"
	export let items: IFooterLink[];
</script>

<Box>
	<Stack align="center" class="">
		{#each items as item (item.url)}
			<span class="no-underline text-lg font-semibold text-neutral-100 hover:text-neutral-300">
                <a href={item.url}>{item.name}</a>
            </span>
		{/each}
	</Stack>
</Box>

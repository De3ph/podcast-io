<script lang="ts">
	import { Box, Stack, Anchor } from '@svelteuidev/core';
	export let items: IFooterLink[];
</script>

<Box>
    <Stack align="center">
    {#each items as item (item.url)}
            <Anchor href={item.url} color="dimmed">
                <span class="text-lg">{item.name}</span>
            </Anchor>
        {/each}
    </Stack>
</Box>

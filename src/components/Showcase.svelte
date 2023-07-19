<script lang="js">
	import { Grid, Box } from '@svelteuidev/core';
	import ScItem from './showcase/ScItem.svelte';
</script>

<Box class="w-full sm:w-2/3 md:w-3/5 lg:w-1/2 mx-auto mb-15">
	<Grid
		class="font-serif font-medium md:text-2xl lg:text-4xl space-y-7
        "
	>
		<ScItem img="/podcast_grid_1.jpg" text="Lorem ipsum dolor sit amet consectetur." />

		<ScItem reverse={true} img="/podcast_grid_2.jpg" text="Lorem ipsum dolor sit amet consectetur." />
	</Grid>
</Box>

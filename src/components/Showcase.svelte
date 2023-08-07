<script lang="js">
	import { Grid, Box } from '@svelteuidev/core';
	import ScItem from './showcase/ScItem.svelte';
</script>

<Box class="w-full mx-auto sm:w-2/3 md:w-3/5 lg:w-1/2 mb-15">
	<Grid
		justify="center"
		class="font-serif font-medium md:text-2xl lg:text-4xl space-y-20
        "
	>
		<ScItem img="/podcast_grid_1.jpg" text="Lorem ipsum dolor sit amet consectetur." />

		<ScItem reverse={true} isVertical img="/podcast_grid_2.jpg" text="Lorem ipsum dolor sit amet consectetur." />

		<ScItem img="/podcast_grid_1.jpg" text="Lorem ipsum dolor sit amet consectetur." />

		<ScItem reverse img="/podcast_grid_1.jpg" text="Lorem ipsum dolor sit amet consectetur." />
		
		<ScItem img="/podcast_grid_1.jpg" text="Lorem ipsum dolor sit amet consectetur." />
		
		<ScItem reverse isVertical img="/podcast_grid_2.jpg" text="Lorem ipsum dolor sit amet consectetur." />
	</Grid>
</Box>

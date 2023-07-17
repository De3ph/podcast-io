<script lang="js">
	import { AspectRatio, Grid, Image, Box } from '@svelteuidev/core';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	
	const gridDescCol = 'flex justify-center items-center text-center';
</script>

<Box class=" w-2/3 mx-auto mb-15">
	<Grid
		class="font-serif font-medium md:text-2xl lg:text-4xl
        "
	>
		<Grid.Col span={8}>
			<FadeIn>
				<AspectRatio ratio={16 / 9}>
					<Image src={'/podcast_grid_1.jpg'} fit="cover" />
				</AspectRatio>
			</FadeIn>
		</Grid.Col>
		<Grid.Col span={4} class={gridDescCol}>
			<FadeIn>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</FadeIn>
		</Grid.Col>

		<Grid.Col span={8} class={gridDescCol}>
			<FadeIn>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</FadeIn>
		</Grid.Col>
		<Grid.Col span={4}>
			<FadeIn>
				<AspectRatio ratio={3 / 4}>
					<Image src={'/podcast_grid_2.jpg'} fit="cover" />
				</AspectRatio>
			</FadeIn>
		</Grid.Col>
	</Grid>
</Box>

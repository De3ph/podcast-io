<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Center, Container, Stack } from '@svelteuidev/core';
	import { ArrowRight } from 'radix-icons-svelte';
	import Rellax from 'rellax';
	import { onMount } from 'svelte';

	onMount(() => {
		const rellax = new Rellax('.rellax', {
			speed: 1,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false
		});
	});

	const handleClick = () => {
		// navigate explorer page
		goto('/explore');
	};
</script>

<Container fluid class="font-serif font-medium text-center my-48">
	<Center>
		<Stack align="center" class="space-y-14">
			<p class="rellax text-5xl font-semibold max-w-[25ch]" data-rellax-speed="4">
				Tune In: Exploring Infinite Stories through Soundscapes
			</p>
			<p class="rellax text-3xl max-w-[65ch]">
				Unleashing the World of Podcasts - Dive into Captivating Narratives, Riveting Conversations,
				and Mind-Expanding Ideas.
			</p>

			<Button on:click={handleClick} ripple size="lg" color="dark" class="group shadow-md">
				Explore
				<ArrowRight size={20} slot="rightIcon" />
			</Button>
		</Stack>
	</Center>
</Container>

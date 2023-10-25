<script lang="ts">
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { Button, colorScheme } from '@svelteuidev/core';
	import { DoubleArrowRight } from 'radix-icons-svelte';
	import { twMerge } from 'tailwind-merge';
	import type { PodcastPlan } from '../../types';

	export let plan: PodcastPlan;
	const lightBg = 'text-white bg-black';
</script>

<FadeIn>
	<main
		class={twMerge(
			'grid h-full shadow-lg md:shadow-xl pt-3 pb-12 px-8 rounded-lg space-y-12 ',
			$colorScheme === 'light' ? '' : lightBg
		)}
	>
		<div>
			<h1 class="text-5xl font-bold text-center mt-4">{plan.name}</h1>
			<h1 class="text-3xl font-bold text-center mt-4">{plan.price}/month</h1>
		</div>
		<div>
			<ul class="space-y-3 text-center">
				{#each plan.advantages as item}
					<li class="text-md">{item}</li>
				{/each}
			</ul>
		</div>
		<div class="flex justify-center">
			<Button ripple size="sm" color="dark" class="shadow-md">
				Buy Plan
				<DoubleArrowRight size={16} slot="rightIcon" />
			</Button>
		</div>
	</main>
</FadeIn>

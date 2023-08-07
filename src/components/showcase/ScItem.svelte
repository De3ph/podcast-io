<script lang="ts">
	import ScImage from './ScImage.svelte';
	import ScDesc from './ScDesc.svelte';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { Flex, Group } from '@svelteuidev/core';

	export let img: string = '';
	export let text: string = '';
	export let reverse: boolean = false;
	export let isVertical: boolean = false;
</script>

{#if reverse}
	<FadeIn>
		<Flex>
			<ScDesc {text} />
			<ScImage {img} {isVertical} />
		</Flex>
	</FadeIn>
{:else}
	<FadeIn>
		<Flex>
			<ScImage {img} {isVertical} />
			<ScDesc {text} />
		</Flex>
	</FadeIn>
{/if}

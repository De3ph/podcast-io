<script lang="ts">
	import ScImage from './ScImage.svelte';
	import ScDesc from './ScDesc.svelte';
	import FadeIn from '$components/wrappers/FadeIn.svelte';
	import { Flex} from '@svelteuidev/core';

	export let img: string = '';
	export let text: string = '';
	export let reverse: boolean = false;
	export let isVertical: boolean = false;
</script>

{#if reverse}
	<FadeIn>
		<Flex class="sc-item">
			<ScDesc {text} textRight={false} />
			<ScImage {img} {isVertical} />
		</Flex>
	</FadeIn>
{:else}
	<FadeIn>
		<Flex class="sc-item">
			<ScImage {img} {isVertical} />
			<ScDesc {text} textRight={true} />
		</Flex>
	</FadeIn>
{/if}

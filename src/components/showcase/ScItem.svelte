<script lang="ts">
	import ScImage from './ScImage.svelte';
	import ScDesc from './ScDesc.svelte';

	export let img: string = '';
	export let text: string = '';
	export let reverse:boolean = false
</script>

{#if reverse}
<ScDesc {text} />
<ScImage {img} />
{:else}
<ScImage {img} />
<ScDesc {text} />
{/if}

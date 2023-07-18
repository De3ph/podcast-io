<script lang="ts">
	import ScImage from './ScImage.svelte';
	import ScDesc from './ScDesc.svelte';

	export let img: string = '';
	export let text: string = '';
</script>

<ScImage {img} />
<ScDesc {text} />

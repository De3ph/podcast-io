<script lang="ts">
	import Showcase from '$components/Showcase.svelte';
	import Hero from '$components/Hero.svelte';
	import { fade } from 'svelte/transition';
</script>

<section in:fade>
	<Hero />
	<Showcase />
</section>

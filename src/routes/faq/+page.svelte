<script>
    import Faq from "$components/FAQ.svelte";
	import { fade } from "svelte/transition";
</script>

<section in:fade>
    <Faq />
</section>
<script>
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init({
			delay:30
		});
	});
</script>

<section data-aos="fade-in" class="h-full">
	<slot />
</section>

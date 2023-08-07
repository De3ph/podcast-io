<script lang="ts">
	import { SimpleGrid, colorScheme } from '@svelteuidev/core';
	import FooterCol from '$components/layout/components/footer/FooterCol.svelte';

	const cols = 2;

	const col1Items: IFooterLink[] = [
		{ name: 'About', url: '/about' },
		{ name: 'Carrers', url: '/carrers' },
		{ name: 'FAQ', url: '/faq' }
	];

	const col2Items: IFooterLink[] = [
		{ name: 'Contact', url: '/contact' },
		{ name: 'Partnership', url: '/partnership' },
		{ name: 'Pricing', url: '/pricing' }
	];

	$: borderColor = $colorScheme === 'light' ? 'border-t-neutral-200' : 'border-t-neutral-700';
</script>

<section class={`mt-8 border-t py-12 px-20 md:px-24 ${borderColor}`}>
	<SimpleGrid {cols}>
		<FooterCol items={col1Items} />
		<FooterCol items={col2Items} />
	</SimpleGrid>
</section>

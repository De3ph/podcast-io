<script lang="ts">
	import { Flex, SimpleGrid, colorScheme } from '@svelteuidev/core';
	import FooterCol from '$components/layout/components/footer/FooterCol.svelte';
	import { twJoin } from 'tailwind-merge';

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

<section
	class={twJoin(
		'grid grid-rows-2 bg-neutral-900 mt-32 border-t pt-24 pb-8 space-y-16 px-20 md:px-24',
		borderColor
	)}
>
	<div>
		<SimpleGrid {cols}>
			<FooterCol items={col1Items} />
			<FooterCol items={col2Items} />
		</SimpleGrid>
	</div>
	<div class="flex justify-center items-end">
		<span class="text-neutral-100 text-lg"
			>© 2023 developed by <a class="transition-all duration-500 bg-gradient-to-r from-orange-400 to-indigo-400 text-transparent bg-clip-text hover:from-indigo-400 hover:to-orange-400" href="https://github.com/De3ph">De3ph</a>
		</span>
	</div>
</section>

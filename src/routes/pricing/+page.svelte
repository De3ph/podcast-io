<script lang="ts">
	import PriceCard from '$components/pricing/PriceCard.svelte';
	import type { PodcastPlan } from '../../types';

	const plans: PodcastPlan[] = [
		{
			name: 'Free',
			price: '$0',
			advantages: ['Basic Podcast Hosting', 'Limited Analytics', 'Community Support']
		},
		{
			name: 'Starter',
			price: '$4.99',
			advantages: [
				'Advanced Analytics',
				'Custom Branding',
				'Monetization Tools',
				'Priority Customer Support',
				'Early Access to Features'
			]
		},
		{
			name: 'Professional',
			price: '$14.99',
			advantages: [
				'Unlimited Storage and Bandwidth',
				'Advanced Monetization Options',
				'Dedicated Marketing Assistance',
				'Transcription Services',
				'Priority Access to New Features',
				'Exclusive Workshops and Webinars'
			]
		}
	];
</script>

<main class="w-full mb-5">
	<h1 class="text-center text-3xl font-bold mt-6">Pricing</h1>
	
    <section class="mt-8 
    grid gap-y-12 place-content-center
    md:grid-cols-2 md:grid-rows-2 md:gap-x-6 md:gap-y-12 md:space-y-0
    lg:grid-rows-1 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12
    ">
		{#each plans as plan}
            <PriceCard plan={plan} />
        {/each}
	</section>
</main>

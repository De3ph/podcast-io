<script lang="ts">
	import { Accordion, Box } from '@svelteuidev/core';
	import AccordionItem from './faq/AccordionItem.svelte';

	const props: IAccordionItemProps[] = [
		{
			value: 'q1',
			title: 'What is Podcast.io?',
			desc: 'Podcast.io is a comprehensive podcast website that offers a wide range of podcasts on various topics, including news, entertainment, education, technology, and more. It serves as a platform where podcast creators can host and share their content with a global audience. Additionally, listeners can discover, subscribe, and enjoy their favorite podcasts conveniently.'
		},
		{
			value: 'q2',
			title: 'Is Podcast.io free to use?',
			desc: 'Yes, Podcast.io is completely free to use for both podcast creators and listeners. You can browse, search, and listen to podcasts without any cost. However, some podcasts may offer premium content or additional features that might require a subscription or one-time payment, but the majority of content is available for free.'
		},
		{
			value: 'q3',
			title: 'Can I download podcasts for offline listening?',
			desc: 'Yes, you can download episodes on Podcast.io for offline listening. Many podcasts offer this feature to their listeners. Once you download an episode, you can enjoy it without an internet connection, making it convenient for traveling or areas with limited internet access.'
		},
		{
			value: 'q4',
			title: 'How can I submit my podcast to be featured on Podcast.io?',
			desc: 'If you\'re a podcast creator and want to share your content with the Podcast.io community, you can submit your podcast for consideration. Simply go to the "Submit Your Podcast" page on the website and provide the necessary information, such as your podcast\'s title, description, genre, and hosting details. The Podcast.io team will review your submission, and if it meets the guidelines, it may be featured on the platform.'
		},
		{
			value: 'q5',
			title: 'Are podcasts on Podcast.io available in different languages?',
			desc: 'Yes, Podcast.io offers podcasts in multiple languages, catering to a global audience. You can find podcasts in various languages, ensuring that listeners from different regions can enjoy content that matches their preferences and interests.'
		},
		{
			value: 'q6',
			title: 'Is there a mobile app for Podcast.io?',
			desc: 'Yes, Podcast.io offers a mobile app available for both Android and iOS devices. You can download the app from the respective app stores and enjoy podcasts on the go. The app provides a smooth and intuitive listening experience, allowing you to manage subscriptions and download episodes for offline listening.'
		}
	];
</script>

<Box px="lg">
	<Accordion variant="filled" class="space-y-3">
		{#each props as prop}
			<AccordionItem {...prop} />
		{/each}
	</Accordion>
</Box>

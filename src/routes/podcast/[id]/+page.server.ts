import { getPodcast } from '$lib/supabaseClient.js';
export const load = async ({ params }) => {
	const { podcast, error } = await getPodcast(parseInt(params.id));

	return {
		podcast,
		error
	};
};

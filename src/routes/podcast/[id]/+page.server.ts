import { isUserLoggedIn } from '$stores/sessionStore.js';
import { getPodcast } from '$lib/supabaseClient.js';
export const load = async ({ params }) => {
	if (!isUserLoggedIn) {
		console.log('🚀 ~ file: +page.server.ts:5 ~ load ~ isUserLoggedIn:', isUserLoggedIn);
	}
	const { podcast, error } = await getPodcast(parseInt(params.id));

	return {
		podcast,
		error
	};
};

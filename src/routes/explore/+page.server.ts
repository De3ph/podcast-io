import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load = (async () => {
	const { data: podcasts } = await supabase.from('podcasts').select('*');

	return {
		podcasts: podcasts ?? []
	};
}) satisfies PageServerLoad;

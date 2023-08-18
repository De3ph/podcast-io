import { supabase } from '$lib/supabaseClient';
import { sessionStore } from '$stores/sessionStore';

export const load = async () => {
	const favs = [];

	let { data, error } = await supabase.from('favourites').select(`
  podcast_id,
  podcasts (
	*
  )
`);

	if (!error) {
		data?.forEach((row) => { 
			favs.push(row?.podcasts)
		 })
	}

	return {
		favs
	};
};

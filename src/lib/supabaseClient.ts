import { createClient } from '@supabase/supabase-js';
import type { PostgrestError } from '@supabase/supabase-js';

const supabase = createClient(
	import.meta.env.VITE_PUBLIC_SUPABASE_URL,
	import.meta.env.VITE_PUBLIC_SUPABASE_API_KEY,
	{
		auth: {
			persistSession: false
		},
		db: {
			schema: 'public'
		}
	}
);

const getPodcast = async (
	id: number
): Promise<{ podcast: IPodcast | null; error: PostgrestError | null }> => {
	const { data, error } = await supabase.from('podcasts').select().eq('id', id);

	const podcast = data ? data[0] : null;

	return { podcast, error };
};

const isPodcastInFavourites = async (podcast_id:number, user_id: string ) => { 
	const { data } = await supabase
		.from('favourites')
		.select()
		.match({ podcast_id: podcast_id, user_id: user_id });

	return data?.length !== 0
 }

const removeFavourite = async (podcast_id: number, user_id: string) => {
	const { error } = await supabase
		.from('favourites')
		.delete()
		.match({ podcast_id: podcast_id, user_id: user_id });

	return { error };
};

const addToFavourites = async (podcast_id:number,user_id:string) => {
	const isAlreadyExist = await isPodcastInFavourites(podcast_id,user_id)

	if (isAlreadyExist) {
		return
	}

	const { error } = await supabase.from('favourites').insert({
		podcast_id: podcast_id,
		user_id: user_id
	});

	return error
};

export { supabase, getPodcast, removeFavourite, addToFavourites };

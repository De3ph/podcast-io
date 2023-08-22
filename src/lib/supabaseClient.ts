import { createClient } from '@supabase/supabase-js';
import type { PostgrestError } from '@supabase/supabase-js';
import type { IPodcast } from '../types';

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

const isPodcastInFavourites = async (podcast_id: number, user_id: string) => {
	const { data } = await supabase
		.from('favourites')
		.select()
		.match({ podcast_id: podcast_id, user_id: user_id });

	return data?.length !== 0;
};

const updateTimesStarred = async (actionType: 'inc' | 'dec', podcast_id: number) => {
	const { data, error } = await supabase
		.from('podcasts')
		.select('times_starred')
		.eq('id', podcast_id);

	if (error) {
		return error;
	}

	const updateValue =
		actionType === 'inc' ? data?.[0]?.['times_starred'] + 1 : data?.[0]?.['times_starred'] - 1;

	return await supabase
		.from('podcasts')
		.update({ times_starred: updateValue })
		.eq('id', podcast_id);
};

const removeFavourite = async (podcast_id: number, user_id: string) => {
	const { error } = await supabase
		.from('favourites')
		.delete()
		.match({ podcast_id: podcast_id, user_id: user_id });

	await updateTimesStarred('dec', podcast_id);

	return { error };
};

const addToFavourites = async (podcast_id: number, user_id: string) => {
	const isAlreadyExist = await isPodcastInFavourites(podcast_id, user_id);

	if (isAlreadyExist) {
		return;
	}

	const { error } = await supabase.from('favourites').insert({
		podcast_id: podcast_id,
		user_id: user_id
	});

	await updateTimesStarred('inc', podcast_id);

	return error;
};

export { supabase, getPodcast, removeFavourite, addToFavourites, isPodcastInFavourites };

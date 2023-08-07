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

export { supabase, getPodcast };

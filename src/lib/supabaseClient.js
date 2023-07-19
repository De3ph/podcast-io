import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process.env.VITE_PRIVATE_SUPABASE_URL,
	process.env.VITE_PRIVATE_SUPABASE_API_KEY,
	{
		auth: {
			persistSession: false
		},
		db: {
			schema: 'public'
		}
	}
);

export { supabase };

import { createClient } from '@supabase/supabase-js';

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

export { supabase };

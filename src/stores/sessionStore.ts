import { writable, get } from 'svelte/store';
import type { Session } from '@supabase/supabase-js';

const sessionStore = writable<Session | null>();

const resetStore = () => {
	sessionStore.set(null);
};

const getExpiresAt = () => {
	return get(sessionStore)?.expires_at || 0;
};

export { sessionStore, resetStore, getExpiresAt };

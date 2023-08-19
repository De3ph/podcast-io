import { writable, get, derived } from 'svelte/store';
import type { Session } from '@supabase/supabase-js';

const sessionStore = writable<Session | null>();

const resetStore = () => {
	sessionStore.set(null);
};

const getExpiresAt = () => {
	return get(sessionStore)?.expires_at || 0;
};

const user = derived(sessionStore, (session) => { 
	return session?.user
 })

const isUserLoggedIn = derived(sessionStore, (session) => {
	return session?.user !== undefined;
});

export { sessionStore, resetStore, getExpiresAt, isUserLoggedIn, user };

import moment from 'moment';
import { sessionStore } from '$stores/sessionStore';

export const load = async () => {
	sessionStore.subscribe((session) => {
		// TODO : fetch users favourite podcasts

		console.log('🚀 ~ file: +page.ts:20 ~ sessionStore.subscribe ~ session:', session);
	});
};

import { goto } from '$app/navigation';
import { authStore } from '$lib/stores/authStore';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	authStore.subscribe((value) => {
		if (!value.isLoading) {
			const user = value.currentUser;
			if (!user) {
				goto('/');
			}
		}
	});
	return {};
}

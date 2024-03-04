import { goto } from '$app/navigation';
import { authStore } from '$lib/stores/authStore';
import { browser } from '$app/environment';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	authStore.subscribe((value) => {
		if (!value.isLoading) {
			const user = value.currentUser;
			if (!user && browser) {
				goto('/');
			}
		}
	});
	return {};
}

<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase.client';
	import { doc, getDoc } from "firebase/firestore";
	import { authStore } from '$lib/stores/authStore';
	import { firestore } from '$lib/firebase/firebase.client';

	onMount(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				const profile = await getDoc(doc(firestore, "UserProfile", user.uid));
				authStore.update((curr) => {
					return { ...curr, isLoading: false, currentUser: user, profile: profile.data()};
				});
			} else {
				authStore.update((curr) => {
					return { ...curr, isLoading: false, currentUser: null, profile: null };
				});
			}
		});
	});
</script>

<slot />

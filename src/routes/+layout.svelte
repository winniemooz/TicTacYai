<script>
	import '../app.pcss';
	import { onMount } from 'svelte'
	import { auth } from '../lib/firebase/firebase.client'
	import { authStore } from '../stores/authStore'

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user)
			authStore.update((curr) => {
				return {...curr, isLoading: false, currentUser:user}
			});

			if (browser) {
				if (!authStore.currentUser && !authStore.isLoading && window.location.href !== '/') {
					window.location.href = '/';
					console.log('Logout Complete')
				}
			}
		})
	})
</script>
<slot />

<script>
	import { authHandlers } from '$lib/stores/authStore';
	import { db } from '$lib/firebase/firebase.client';
	import { ref, set } from 'firebase/database';
	import { authStore } from '$lib/stores/authStore';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { fade, scale } from 'svelte/transition';

	$: uid = $authStore.currentUser?.uid;

	let logoutModal = false;

	const createRoom = async () => {
		const roomCode = Math.floor(100000 + Math.random() * 900000);
		const roomRef = ref(db, `rooms/${roomCode}`);
		try {
			await set(roomRef, {
				host: uid,
				phrase: '0'
			});
			if (browser) {
				goto(`/lobby/${roomCode}`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const openLogoutModal = () => {
		logoutModal = !logoutModal;
	};

	function logout() {
		authHandlers.logout();
	}
</script>

<div class="bg-f4f4f4 flex h-screen flex-col items-center bg-[#f2ece2] font-fredoka">
	<div
		class="flex h-full w-full flex-col items-center justify-start rounded-lg bg-[#f2ece2] text-center shadow-md"
	>
		<img class="w-[100%] py-10 sm:w-[65%] lg:w-[50%]" src="/logo2.png" alt="" srcset="" />
		<div class="middle-content flex w-[50%] flex-col gap-3 lg:w-[35%]">
			<button
				class="button mx-auto h-16 w-full rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800 sm:h-20"
				on:click={createRoom}
			>
				Create Room</button
			>
			<a href="/joincode"
				><button
					class="button mx-auto h-16 w-full rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800 sm:h-20"
					>Join with Code</button
				>
			</a>
			<a href="/leaderboard"
				><button
					class="button mx-auto h-16 w-full rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800 sm:h-20"
				>
					Leaderboards</button
				></a
			>
			<button
				class="button logout mx-auto h-16 w-full rounded-full bg-[#5a4134] px-4 text-4xl font-medium text-[#f2ece2] sm:h-20"
				on:click={openLogoutModal}
				>Logout</button
			>
		</div>
		<div class="fixed bottom-0 flex w-full flex-row justify-between">
			<a href="/profile"
				><button
					class="button lek mx-auto flex items-center gap-2 rounded-full bg-[#5a4134] px-6 py-4 text-2xl text-[#f2ece2]"
				>
					<img src="/human-icon.png" alt="" />View Profile</button
				>
			</a>
			<a
				href="/tutorial
			"
			>
				<button
					class="button lek mx-auto flex items-center gap-2 rounded-full bg-[#5a4134] px-6 py-4 text-2xl text-[#f2ece2]"
					><img src="/tutorial-icon.png" alt="" />Tutorial</button
				></a
			>
		</div>
	</div>
</div>
{#if logoutModal}
	<div
		transition:fade={{ duration: 100 }}
		class="absolute inset-0 left-0 top-0 flex h-full w-full items-center justify-center bg-black/30 p-4 font-fredoka"
	>
		<div
			class="flex w-full flex-col gap-5 rounded-2xl bg-mongoose-100 p-10 font-medium text-mongoose-800 sm:w-auto"
			transition:scale={{ duration: 175 }}
		>
			<div class=" flex flex-col items-center gap-6">
				<img class="w-[25%]" src="/Logout.png" alt="">
				<p class="text-xl sm:text-4xl text-center">Are you sure you want to logout?</p>
			</div>
			<div class="flex flex-row gap-5">
				<button
					class="button mx-auto h-12 sm:h-16 w-full rounded-full bg-mongoose-400 text-2xl sm:text-4xl font-medium text-mongoose-100"
					on:click={logout}
				>
					Logout</button
				>
				<button
					class="button mx-auto h-12 sm:h-16 w-full rounded-full bg-mongoose-700 text-2xl sm:text-4xl font-medium text-mongoose-100"
					on:click={openLogoutModal}
				>
					Cancel</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.button {
		margin: 5px;
		cursor: pointer;
		border: none;
		text-align: center;
	}
	.button.lek {
		width: 250px;
		margin: 15px;
		cursor: pointer;
		border: none;
		text-align: center;
		justify-content: center;
	}

	@media (max-width: 640px) {
		.button {
			margin: 0;
			padding: 10px 10px;
			font-size: 1.3rem;
		}
		.button.lek {
			font-size: 1.1rem;
			width: 150px;
		}
	}
</style>

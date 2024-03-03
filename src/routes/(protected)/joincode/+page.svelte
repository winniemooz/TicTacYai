<script>
	import { ref, onValue, get, child, update } from 'firebase/database';
	import { db, firestore } from '$lib/firebase/firebase.client';
	import { doc, getDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/authStore';
	import { goto } from '$app/navigation';

	let code = '';

	const joinRoom = async () => {
		const roomRef = ref(db, `rooms/${code}`);
		const room = (await get(roomRef)).val();
		if (room) {
			try {
				const host = room.host;
				const challenger = room.challenger;

				if (host === $authStore.currentUser.uid) {
					goto(`/lobby/${code}`);
					return;
				}

				if (challenger && challenger !== $authStore.currentUser.uid) {
					alert('Room is full');
				} else {
					update(roomRef, {
						challenger: $authStore.currentUser.uid
					});
					goto(`/lobby/${code}`);
				}
			} catch (error) {
				console.log(error);
				alert('Failed to join room');
			}
		} else {
			alert('Room not found');
		}
	};
</script>

<div class="body flex min-h-dvh w-full flex-col bg-mongoose-100 font-fredoka">
	<div class="my-16 flex flex-col items-center sm:my-6">
		<img src="/logo2.png" alt="" class=" mb-12 mt-12 sm:w-[65%]" />
		<div class="flex w-full flex-col items-center justify-center sm:flex-row">
			<input
				class="m-3 h-[8vh] w-[80%] rounded-full bg-mongoose-200 px-10 py-2 text-center text-3xl font-medium text-mongoose-700 placeholder-mongoose-400 focus:outline-none focus:ring-2 focus:ring-mongoose-300 sm:w-[30%] sm:px-20 sm:text-start"
				type="text"
				placeholder="Enter Code here"
				bind:value={code}
			/>
			<button
				class="m-3 h-[8vh] w-[80%] rounded-full bg-mongoose-700 text-3xl font-medium text-white sm:w-[13%]"
				on:click={joinRoom}>Join Game</button
			>
		</div>
	</div>
	<a href="/home"
		><button
			class="absolute bottom-0 left-0 m-6 h-[5vh] w-[30%] rounded-full bg-mongoose-900 text-2xl font-medium text-white sm:h-[8vh] sm:w-[10%] sm:text-3xl"
			>Back</button
		>
	</a>
</div>

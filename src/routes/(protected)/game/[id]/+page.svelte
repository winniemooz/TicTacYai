<script>
	import Tictac from '$lib/Components/Tictac.svelte';
	import { boardYai } from '$lib/stores/boardYai.js';
	import { checkWinner } from '$lib/utils/checkWinner.js';
	import { turn } from '$lib/stores/turn.js';
	import { page } from '$app/stores';
	import { ref, onValue, update, remove } from 'firebase/database';
	import { db, firestore } from '$lib/firebase/firebase.client';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/authStore';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';

	const roomId = $page.params.id;
	let isHost = false;
	let isChallenger = false;
	let player1;
	let player2;

	const getProfile = async (uid) => {
		try {
			return (await getDoc(doc(firestore, 'UserProfile', uid))).data();
		} catch (error) {
			return null;
		}
	};

	onValue(ref(db, `rooms/${roomId}/board`), (snapshot) => {
		const data = snapshot.val();
		if (data) {
			$boardYai = data.map((cell) => {
				return checkWinner(cell);
			});
		}
	});

	onValue(ref(db, `rooms/${roomId}`), async (snapshot) => {
		const data = snapshot.val();
		if (data) {
			player1 = await getProfile(data.host);
			player2 = await getProfile(data.challenger);
			if ($authStore.currentUser?.uid) {
				isHost = data.host === $authStore.currentUser.uid;
			}
			if ($authStore.currentUser?.uid) {
				isChallenger = data.challenger === $authStore.currentUser.uid;
			}
			if (data.winner && data.phrase != '4' && isHost) {
				if (data.winner === 'X') {
					await updateDoc(doc(firestore, 'UserProfile', data.host), {
						win: player1.win + 1
					});
					await updateDoc(doc(firestore, 'UserProfile', data.challenger), {
						lose: player2.lose + 1
					});
				} else if (data.winner === 'O') {
					await updateDoc(doc(firestore, 'UserProfile', data.challenger), {
						win: player2.win + 1
					});
					await updateDoc(doc(firestore, 'UserProfile', data.host), {
						lose: player1.lose + 1
					});
				} else if (data.winner === 'draw') {
					await updateDoc(doc(firestore, 'UserProfile', data.host), {
						draw: player1.draw + 1
					});
					await updateDoc(doc(firestore, 'UserProfile', data.challenger), {
						draw: player2.draw + 1
					});
				}
				await update(ref(db, `rooms/${roomId}`), {
					phrase: '4'
				});
			}
		} else {
			if (browser) {
				goto('/home');
			}
		}
	});

	const playAgain = async () => {
		if (isHost) {
			await update(ref(db, `rooms/${roomId}`), {
				phrase: '0',
				board: null,
				turn: null,
				challengerCharacter: null,
				hostCharacter: null,
				challenger: null
			});
			if (browser) {
				goto(`/lobby/${roomId}`);
			}
		} else {
			await update(ref(db, `rooms/${roomId}`), {
				challenger: $authStore.currentUser.uid
			});
			if (browser) {
				goto(`/lobby/${roomId}`);
			}
		}
	};

	const backToMain = async () => {
		if (isHost) {
			await remove(ref(db, `rooms/${roomId}`));
		} else {
			await update(ref(db, `rooms/${roomId}`), {
				challenger: null,
				challengerCharacter: null
			});
		}
		if (browser) {
			goto('/home');
		}
	};

	const setWinner = async (winner) => {
		await update(ref(db, `rooms/${roomId}`), {
			winner
		});
	};

	let winner = null;
	let isDraw = false;
	$: winner = checkWinner($boardYai);
	$: if (winner) {
		setWinner(winner);
	}
	$: isDraw = $boardYai.every((cell) => cell !== '' && cell !== null);
	$: if (isDraw) {
		setWinner('draw');
	}
	const board = Array(9).fill('');
</script>

<div class=" grid min-h-screen w-full grid-cols-2 bg-[#FFEDDA] font-fredoka lg:grid-cols-4">
	<div class="order-2 space-y-5 p-10 lg:order-1">
		<p class="text-3xl font-bold">{player1?.username || 'Loading..'}</p>
		<div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
			<img
				src="https://via.placeholder.com/150"
				alt="player 1"
				class="order-2 aspect-square w-28 rounded-2xl sm:order-1 sm:w-40"
			/>
			<p
				class="order-1 text-5xl font-bold text-[#7F8CAE] transition duration-100 sm:order-2 sm:text-8xl"
				class:text-opacity-50={$turn != 'X'}
			>
				X
			</p>
		</div>
	</div>
	<div
		class="order-1 col-span-2 flex h-full w-full flex-col items-center justify-start gap-6 pt-8 lg:order-2"
	>
		<p class="text-xl text-mongoose-600 lg:text-3xl">ROOM CODE</p>
		<p class=" text-4xl font-bold text-mongoose-800 lg:text-6xl">{roomId}</p>
		<div
			class="grid aspect-square w-10/12 grid-cols-3 gap-1 rounded-lg bg-[#73593B] outline outline-4 outline-[#73593B] sm:w-8/12"
		>
			{#each board as _, i}
				<Tictac boardCell={i} {roomId} />
			{/each}
		</div>
		{#if winner || isDraw}
			<div
				transition:fade={{ duration: 100 }}
				class="fixed inset-0 z-50 flex h-full w-full justify-center bg-gray-900 bg-opacity-50"
			>
				<div
					class="absolute top-[35%] flex w-[80%] flex-col justify-center gap-4 rounded-3xl border-8 border-mongoose-800 bg-mongoose-100 py-20 text-center sm:top-[30%] sm:gap-12 lg:w-[40%]"
					transition:fly={{ duration: 100, y: 100 }}
				>
					<p class="text-4xl font-semibold text-mongoose-600 sm:text-5xl">
						{#if winner}
							Winner is {winner == 'X' ? player1?.username : player2?.username}
						{:else if isDraw}
							Draw
						{/if}
					</p>
					<div class="flex w-full flex-row justify-center gap-2 sm:flex-col sm:gap-4">
						<button
							class="button mx-auto rounded-full bg-mongoose-400 px-3 py-2 text-base text-mongoose-100 sm:w-[60%] sm:py-4 sm:text-3xl"
							on:click={playAgain}
						>
							Play Again</button
						>
							<button
								class="button mx-auto rounded-full bg-mongoose-700 px-3 py-2 text-base text-mongoose-100 sm:w-[60%] sm:py-4 sm:text-3xl"
								on:click={backToMain}
							>
								Back to main menu</button
							>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="order-3 space-y-5 p-10">
		<p class="text-end text-3xl font-bold">{player2?.username || 'Loading..'}</p>
		<div class="flex flex-col items-center justify-end gap-4 sm:flex-row sm:gap-10">
			<p
				class="text-5xl font-bold text-[#D18A8A] transition duration-100 sm:text-8xl"
				class:text-opacity-50={$turn != 'O'}
			>
				O
			</p>
			<img
				src="https://via.placeholder.com/150"
				alt="player 1"
				class="aspect-square w-28 rounded-2xl sm:w-40"
			/>
		</div>
	</div>
</div>
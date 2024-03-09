<script>
	import TictacButton from '$lib/Components/TictacButton.svelte';
	import { turn } from '$lib/stores/turn.js';
	import { boardYai } from '$lib/stores/boardYai.js';
	import { checkWinner } from '$lib/utils/checkWinner.js';
	import { scale } from 'svelte/transition';
	import { ref, onValue, update } from 'firebase/database';
	import { db } from '$lib/firebase/firebase.client';
	import { authStore } from '$lib/stores/authStore';
	let isHost = false;
	let isChallenger = false;
	let isLoading = true;
	let winner = null;
	let board = Array(9).fill('');
	let skills = [];
	export let boardCell;
	export let roomId;
	let skillpic = 'https://via.placeholder.com/150';

	$: skill = skills?.find((skill) => skill.pos === boardCell)
	
	// switch(skill){
	// 	case 'STAR':
	// 		skillpic = '/star.png';
	// 		break;
	// 	case 'SKIP':
	// 		skillpic = '/no-stopping.png';
	// 		break;
	// }

	$: if (checkWinner(board)) {
		winner = checkWinner(board);
	}
	
	onValue(ref(db, `rooms/${roomId}/board/${boardCell}`), (snapshot) => {
		const data = snapshot.val();
		if (data) {
			board = data || Array(9).fill('');
		}
	});

	onValue(ref(db, `rooms/${roomId}`), (snapshot) => {
		const data = snapshot.val();
		if (data) {
			if (isLoading) {
				isLoading = false;
			}
			skills = data.skills;
			if ($authStore.currentUser?.uid) {
				isHost = data.host === $authStore.currentUser.uid;
			}
			if ($authStore.currentUser?.uid) {
				isChallenger = data.challenger === $authStore.currentUser.uid;
			}
			$turn = data.turn;
		}
	});
	$: isDraw = board.every((cell) => cell !== '');
</script>

{#if !winner}
	{#if skill}
		<div class="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
			{skill.skill}
		</div>
	{/if}
	{#each board as cell, i}
		<div class="text-[#73593B]" class:opacity-70={isDraw}>
			<TictacButton
				mark={cell}
				disabled={cell !== '' ||
					(winner !== null && !isLoading) ||
					($turn == 'X' && !isHost) ||
					($turn == 'O' && !isChallenger)}
				onClick={() => {
					if (
						cell === '' &&
						winner === null &&
						!isLoading &&
						(($turn == 'X' && isHost) || ($turn == 'O' && isChallenger))
					) {
						update(ref(db, `rooms/${roomId}/board/${boardCell}`), {
							[i]: $turn
						});
						update(ref(db, `rooms/${roomId}`), {
							turn: $turn == 'X' ? 'O' : 'X'
						});
					}
				}}
			/>
		</div>
	{/each}
{:else if winner}
	<div
		transition:scale
		class={`col-span-3 h-full w-full ${
			winner == 'X' ? 'bg-[#7F8CAE]' : 'bg-[#D18A8A]'
		} flex items-center justify-center`}
	>
		<h1 class="text-9xl font-bold text-[#FFF6E9]">{winner}</h1>
	</div>
{/if}

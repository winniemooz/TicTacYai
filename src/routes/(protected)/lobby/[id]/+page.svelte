<script>
	import { page } from '$app/stores';
	import { ref, onValue, update, remove } from 'firebase/database';
	import { db, firestore } from '$lib/firebase/firebase.client';
	import { doc, getDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/authStore';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	const roomId = $page.params.id;
	const roomRef = ref(db, `rooms/${roomId}`);
	let player1;
	let player2;

	const getProfile = async (uid) => {
		try {
			return (await getDoc(doc(firestore, 'UserProfile', uid))).data();
		} catch (error) {
			return null;
		}
	};

	let isHost = false;
	let isChallenger = false;
	let roomInfo = null;

	$: ready = roomInfo?.hostCharacter && roomInfo?.challengerCharacter;

	const selectCharacter = (character) => {
		if (isHost) {
			update(roomRef, {
				hostCharacter: character
			});
		} else if (isChallenger) {
			update(roomRef, {
				challengerCharacter: character
			});
		}
	};

	const startGame = async () => {
		if (ready && isHost) {
			const skillset = ["SKIP", "STAR"]
			const skills = []
			
			skillset.forEach((skill) => {
				let pos = Math.floor(Math.random() * 9)
				let isAlreadyExist = skills.find((s) => s.pos === pos)
				while (isAlreadyExist) {
					pos = Math.floor(Math.random() * 9)
					isAlreadyExist = skills.find((s) => s.pos === pos)
				}
				if (!isAlreadyExist) {
					skills.push({ skill, pos })
				}
			});
			await update(roomRef, {
				phrase: '1',
				board: {
					0: Array(9).fill(''),
					1: Array(9).fill(''),
					2: Array(9).fill(''),
					3: Array(9).fill(''),
					4: Array(9).fill(''),
					5: Array(9).fill(''),
					6: Array(9).fill(''),
					7: Array(9).fill(''),
					8: Array(9).fill('')
				},
				turn: 'X',
				skills
			});
		}
	};

	const leaveRoom = async () => {
		if (isHost) {
			await remove(roomRef);
		} else if (isChallenger) {
			await update(roomRef, {
				challenger: null,
				challengerCharacter: null
			});
		}
		if (browser) {
			goto('/home');
		}
	};

	onValue(roomRef, async (snapshot) => {
		const data = snapshot.val();
		if (data) {
			if (data.phrase === '1' && browser) {
				goto(`/game/${roomId}`);
			}
			roomInfo = data;
			player1 = await getProfile(data.host);
			player2 = await getProfile(data.challenger);
			if ($authStore.currentUser?.uid) {
				isHost = data.host === $authStore.currentUser.uid;
			}
			if ($authStore.currentUser?.uid) {
				isChallenger = data.challenger === $authStore.currentUser.uid;
			}
		} else {
			if (browser) {
				goto('/home');
			}
		}
	});
</script>

<div
	class="flex min-h-dvh w-full flex-col items-center justify-between bg-mongoose-100 font-fredoka text-mongoose-700"
>
	<p class=" mt-10 text-base font-normal sm:text-2xl lg:text-3xl">ROOM CODE</p>
	<h1 class="code text-8xl font-bold tracking-widest">{roomId}</h1>
	<div class="player flex flex-row justify-around">
		<div class="player-x flex flex-col items-center gap-10 text-5xl">
			{#if player1}
				{player1.username}
			{:else}
				Waiting for player
			{/if}
			<div class="card-container flex flex-row items-center justify-center gap-2">
				<button
					class={`card flex flex-col items-center justify-center border-8 font-semibold border-[#D89874] bg-[#F3C9AA] text-[#D89874] transition 
					${isHost && 'hover:scale-100 hover:opacity-100'} 
					${roomInfo?.hostCharacter == 'puppy' ? 'scale-100 opacity-100 bg-[#D89874] text-white' : 'scale-90 opacity-50'}
					${!isHost && 'cursor-not-allowed'}`}
					id="puppy"
					on:click={() => selectCharacter('puppy')}
					disabled={!isHost}
				>
					<img src="/Puppy.png" alt="" class="h-auto w-48" />
					PUPPY
				</button>
				<p class="text-mb text-[#D89874]">PUPPY</p>
				<button
					class={`card flex flex-col items-center justify-center border-8 font-semibold border-[#98AAC0] bg-[#C8DAF0] text-[#98AAC0]  transition 
					${isHost && 'hover:scale-100 hover:opacity-100'} 
					${roomInfo?.hostCharacter == 'kitty' ? 'scale-100 opacity-100 bg-[#98AAC0] text-white' : 'scale-90 opacity-50'}
					${!isHost && 'cursor-not-allowed'}`}
					id="kitty"
					on:click={() => selectCharacter('kitty')}
					disabled={!isHost}
				>
					<img src="/Kitty.png" alt="" class="h-auto w-48" />
					KITTY
				</button>
				<p class="text-mb text-[#98AAC0]">KITTY</p>
				<button
					class={`card flex flex-col items-center justify-center border-8 font-semibold border-[#B78B8B] bg-[#EECCCC] text-[#B78B8B]  transition 
					${isHost && 'hover:scale-100 hover:opacity-100'} 
					${roomInfo?.hostCharacter == 'piglet' ? 'scale-100 opacity-100 bg-[#B78B8B] text-white' : 'scale-90 opacity-50'}
					${!isHost && 'cursor-not-allowed'}`}
					id="piglet"
					on:click={() => selectCharacter('piglet')}
					disabled={!isHost}
				>
					<img src="/piglet.png" alt="" class="h-auto w-48" />
					PIGLET
				</button>
				<p class="text-mb text-[#B78B8B]">PIGLET</p>
			</div>
		</div>
		<div class="player-o gap flex flex-col items-center gap-10 text-5xl">
			{#if player2}
				{player2.username}
			{:else}
				Waiting for player
			{/if}
			<div
				class="card-container flex flex-row justify-center gap-2
			"
			>
				<button
					class={`card flex flex-col items-center justify-center border-8 font-semibold border-[#D89874] bg-[#F3C9AA] text-[#D89874]  transition 
					${isChallenger && 'hover:scale-100 hover:opacity-100'} 
					${roomInfo?.challengerCharacter == 'puppy' ? 'scale-100 opacity-100 bg-[#D89874] text-white' : 'scale-90 opacity-50'}
					${!isChallenger && 'cursor-not-allowed'}`}
					id="puppy"
					on:click={() => selectCharacter('puppy')}
					disabled={!isChallenger}
				>
					<img src="/Puppy.png" alt="" class="h-auto w-48" />
					PUPPY
				</button>
				<p class="text-mb text-[#D89874]">PUPPY</p>
				<button
					class={`card flex flex-col items-center justify-center border-8 font-semibold border-[#98AAC0] bg-[#C8DAF0] text-[#98AAC0]  transition 
					${isChallenger && 'hover:scale-100 hover:opacity-100'} 
					${roomInfo?.challengerCharacter == 'kitty' ? 'scale-100 opacity-100 bg-[#98AAC0] text-white' : 'scale-90 opacity-50'}
					${!isChallenger && 'cursor-not-allowed'}`}
					id="kitty"
					on:click={() => selectCharacter('kitty')}
					disabled={!isChallenger}
				>
					<img src="/Kitty.png" alt="" class="h-auto w-48" />
					KITTY
				</button>
				<p class="text-mb text-[#98AAC0]">KITTY</p>
				<button
					class={`card flex flex-col items-center justify-center border-8 font-semibold border-[#B78B8B] bg-[#EECCCC] text-[#B78B8B]  transition 
					${isChallenger && 'hover:scale-100 hover:opacity-100'} 
					${roomInfo?.challengerCharacter == 'piglet' ? 'scale-100 opacity-100 bg-[#B78B8B] text-white' : 'scale-90 opacity-50'}
					${!isChallenger && 'cursor-not-allowed'}`}
					id="piglet"
					on:click={() => selectCharacter('piglet')}
					disabled={!isChallenger}
				>
					<img src="/piglet.png" alt="" class="h-auto w-48" />
					PIGLET
				</button>
				<p class="text-mb text-[#B78B8B]">PIGLET</p>
			</div>
		</div>
	</div>
	<p class="text-4xl text-mongoose-500">Select your character</p>
	<button
		class={`readyBtn rounded-full  px-12 py-4 text-3xl text-mongoose-100 transition ${isHost && ready ? 'cursor-pointer bg-mongoose-700' : 'cursor-not-allowed bg-mongoose-400'}`}
		disabled={!ready && isHost}
		on:click={startGame}
	>
		{#if ready}
			{#if isHost}
				Start
			{:else}
				Wait for host to start
			{/if}
		{:else}
			Waiting for both players
		{/if}
	</button>
	<div class="button-container-bottom flex w-full flex-row justify-start">
		<a href="/home"
			><button
				class="button left-0 m-5 rounded-full bg-[#5a4134] px-12 py-3 text-4xl text-mongoose-100"
				on:click={leaveRoom}>Back</button
			></a
		>
	</div>
</div>

<style>
	.player {
		width: 100%;
	}
	.card {
		width: 35%;
		height: 400px;
		border-radius: 20px;
	}
	.text-mb {
		font-size: 0px;
	}
	@media (max-width: 1280px) {
		.player {
			justify-content: space-around;
		}
		.player-x,
		.player-o {
			font-size: 2rem;
			flex-direction: column;
		}
		.card {
			width: 25%;
			height: 260px;
			border-radius: 20px;
			font-size: 1.5rem;
			padding: 5px;
		}
	}
	@media (max-width: 640px) {
		.code {
			font-size: 3rem;
		}
		.card-container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
			margin: 0;
			padding: 0;
			width: 100%;
		}
		.player-x,
		.player-o {
			font-size: 1.5rem;
			flex-direction: column;
			width: 45%;
		}
		.player {
			justify-content: center;
			gap: 0;
		}
		.card {
			width: 110px;
			height: 110px;
			border-radius: 20px;
			font-size: 0px;
			padding: 2px;
		}
		img {
			width: 80%;
		}
		.text-mb {
			font-size: 1.5rem;
			font-weight: 600;
		}
		.button,
		.readyBtn {
			font-size: 1.25rem;
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			padding-left: 2rem;
			padding-right: 2rem;
		}
		p {
			font-size: 1.5rem;
		}
	}
</style>

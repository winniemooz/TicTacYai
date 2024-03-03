<script>
	import Tictac from '$lib/Components/Tictac.svelte';
	import { boardYai } from '$lib/stores/boardYai.js';
	import { checkWinner } from '$lib/utils/checkWinner.js';
	import { turn } from '$lib/stores/turn.js';

	let winner = null;
	$: winner = checkWinner($boardYai);
	$: isDraw = $boardYai.every((cell) => cell !== '');
	const board = Array(9).fill('');
</script>

<div class=" grid min-h-screen w-full grid-cols-2 bg-[#FFEDDA] font-fredoka lg:grid-cols-4">
	<div class="order-2 space-y-5 p-10 lg:order-1">
		<p class="text-3xl font-bold">Player 1</p>
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
		<p class=" text-4xl font-bold text-mongoose-800 lg:text-6xl">16990</p>
		{#if !winner && !isDraw}
			<div
				class="grid aspect-square w-10/12 grid-cols-3 gap-1 rounded-lg bg-[#73593B] outline outline-4 outline-[#73593B] sm:w-8/12"
			>
				{#each board as _, i}
					<Tictac boardCell={i} />
				{/each}
			</div>
		{:else if isDraw && !winner}
			<p class="text-5xl">Draw</p>
		{:else if !isDraw && winner}
			<div class="fixed inset-0 z-50 flex h-full w-full justify-center bg-gray-900 bg-opacity-50">
				<div
					class="absolute top-[35%] flex w-[80%] flex-col justify-center gap-4 rounded-3xl border-8 border-mongoose-800 bg-mongoose-100 py-20 text-center sm:top-[30%] sm:gap-12 lg:w-[40%]"
				>
					<p class="text-4xl font-semibold text-mongoose-600 sm:text-5xl">Winner is {winner}</p>
					<div class="flex w-full flex-row justify-center gap-2 sm:flex-col sm:gap-4">
						<a href="/lobby"
							><button
								class="button mx-auto rounded-full bg-mongoose-400 px-3 py-2 text-base text-mongoose-100 sm:w-[60%] sm:py-4 sm:text-3xl"
							>
								Play Again</button
							></a
						>
						<a href="/home"
							><button
								class="button mx-auto rounded-full bg-mongoose-700 px-3 py-2 text-base text-mongoose-100 sm:w-[60%] sm:py-4 sm:text-3xl"
							>
								Back to main menu</button
							></a
						>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="order-3 space-y-5 p-10">
		<p class="text-end text-3xl font-bold">Player 2</p>
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

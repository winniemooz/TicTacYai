<script>
  import Tictac from "$lib/Components/Tictac.svelte";
  import { boardYai } from "$lib/stores/boardYai.js";
  import { checkWinner } from "$lib/utils/CheckWinner.js";
  import { turn } from "$lib/stores/turn.js";
  let winner = null;
  $: winner = checkWinner($boardYai);
  $: isDraw = $boardYai.every((cell) => cell !== "");
  const board = Array(9).fill("");
</script>

<div class="w-full min-h-screen grid grid-cols-4 bg-[#FFEDDA] font-fredoka">
  <div class="p-10 space-y-5">
    <p class="text-3xl font-bold">Player 1</p>
    <div class="flex gap-10 items-center">
      <img
        src="https://via.placeholder.com/150"
        alt="player 1"
        class="w-40 aspect-square rounded-2xl"
      />
      <p
        class="text-8xl font-bold text-[#7F8CAE] transition duration-100"
        class:text-opacity-50={$turn != "X"}
      >
        X
      </p>
    </div>
  </div>
  <div
    class="w-full h-full flex flex-col col-span-2 gap-12 justify-center items-center"
  >
    <p class="text-3xl font-bold"><span>Logo Clock</span> 10</p>
    {#if !winner && !isDraw}
      <div
        class="outline outline-[#73593B] rounded-lg outline-4 gap-1 bg-[#73593B] grid grid-cols-3 w-8/12 aspect-square"
      >
        {#each board as _, i}
          <Tictac boardCell={i} />
        {/each}
      </div>
    {:else if isDraw && !winner}
      <p class="text-5xl">Draw</p>
    {/if}
    <p class="text-3xl font-bold">16990</p>
  </div>
  <div class="p-10 space-y-5">
    <p class="text-3xl font-bold text-end">Player 2</p>
    <div class="flex gap-10 items-center justify-end">
      <p
        class="text-8xl font-bold text-[#D18A8A] transition duration-100"
        class:text-opacity-50={$turn != "O"}
      >
        O
      </p>
      <img
        src="https://via.placeholder.com/150"
        alt="player 1"
        class="w-40 aspect-square rounded-2xl"
      />
    </div>
  </div>
</div>

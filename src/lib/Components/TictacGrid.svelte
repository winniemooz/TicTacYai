<script>
  import TictacButton from "$lib/Components/TictacButton.svelte";
  import { turn } from "$lib/stores/turn.js";
  import { boardYai } from "$lib/stores/boardYai.js";
  import { checkWinner } from "$lib/utils/checkWinner.js";
  import { scale } from "svelte/transition";
  let winner = null;
  let board = Array(9).fill("");
  export let boardCell;

  $: if (checkWinner(board)) {
    winner = checkWinner(board);
    boardYai.update((n) => {
      n[boardCell] = winner;
      return n;
    });
  }
  $: isDraw = board.every((cell) => cell !== "");
</script>

{#if !winner}
  {#each board as cell, i}
    <div class="text-[#73593B]" class:opacity-70={isDraw}>
      <TictacButton
        mark={cell}
        disabled={cell !== "" || winner !== null}
        onClick={() => {
          if (cell === "" && winner === null) {
            board[i] = $turn;
            $turn = $turn == "X" ? "O" : "X";
          }
        }}
      />
    </div>
  {/each}
{:else if winner}
  <div
    transition:scale
    class={`w-full col-span-3 h-full ${
      winner == "X" ? "bg-[#7F8CAE]" : "bg-[#D18A8A]"
    } flex justify-center items-center`}
  >
    <h1 class="text-9xl font-bold text-[#FFF6E9]">{winner}</h1>
  </div>
{/if}


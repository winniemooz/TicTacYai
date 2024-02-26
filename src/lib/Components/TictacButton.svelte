<script>
  import { fade } from "svelte/transition";

  export let mark = null;
  export let disabled = false;

  export let onClick = () => {};
</script>

<button
  class={`border border-[#CAB8A2] bg-[#FFEDDA] w-full h-full flex justify-center items-center transition duration-100 ${
    !mark && "hover:bg-[#ffe4c8]"
  }`}
  on:click={onClick}
  {disabled}
>
  {#if mark}
    <p transition:fade={{ duration: 100 }} class="text-3xl font-bold">
      {mark}
    </p>
  {:else}
    <p class="text-3xl font-bold">&nbsp;</p>
  {/if}
</button>

<script>
	import { fade } from 'svelte/transition';

	export let mark = null;
	export let disabled = false;

	export let onClick = () => {};
</script>

<button
	class={`flex h-full w-full items-center justify-center border border-[#CAB8A2] bg-[#FFEDDA] transition duration-100 ${
		!mark && !disabled && 'hover:bg-[#ffe4c8]'
	} ${disabled && 'cursor-not-allowed'}`}
	on:click={onClick}
	{disabled}
>
	{#if mark}
		<p transition:fade={{ duration: 100 }} class="select-none text-3xl font-bold">
			{mark}
		</p>
	{:else}
		<p class="select-none text-3xl font-bold">&nbsp;</p>
	{/if}
</button>

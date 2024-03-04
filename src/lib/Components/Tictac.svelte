<script>
  import TictacGrid from "$lib/Components/TictacGrid.svelte";
  export let boardCell;
  export let roomId;
</script>

<div class="grid grid-cols-3 aspect-square">
  <TictacGrid {boardCell} {roomId} />
</div>

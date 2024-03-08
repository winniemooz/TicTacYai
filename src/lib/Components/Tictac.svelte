<script>
  import TictacGrid from "$lib/Components/TictacGrid.svelte";
  export let boardCell;
  export let roomId;
</script>

<div class="grid grid-cols-3 aspect-square relative">
  <TictacGrid {boardCell} {roomId} />
</div>

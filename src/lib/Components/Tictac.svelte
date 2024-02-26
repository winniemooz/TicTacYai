<script>
  import TictacGrid from "$lib/Components/TictacGrid.svelte";
  export let boardCell;
</script>

<div class="grid grid-cols-3 aspect-square">
  <TictacGrid {boardCell} />
</div>

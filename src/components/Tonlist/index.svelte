<script>
  import Plata from "./Plata.svelte";
  import { albums } from "./albums";
</script>

<style>
  .wrap {
    display: grid;
    box-sizing: border-box;
    grid-gap: 50px;
  }
</style>

<div class="wrap">
  {#each albums as album}
    <Plata {album} />
  {/each}
</div>

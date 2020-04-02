<script>
  import { tonlist } from "src/db";
  import Plata from "./Plata.svelte";
</script>

<style>
  .wrap {
    display: grid;
    box-sizing: border-box;
    grid-gap: 50px;
  }
</style>

<div class="wrap">
  {#each tonlist as plata}
    <Plata {plata} />
  {/each}
</div>

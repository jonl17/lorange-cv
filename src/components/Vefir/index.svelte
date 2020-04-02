<script>
  import { vefir } from "src/db";
  import Vefur from "src/components/Vefir/Vefur.svelte";
</script>

<style>
  div {
    display: grid;
    grid-gap: 50px;
  }
</style>

<div>
  {#each vefir as vefur}
    <Vefur {vefur} />
  {/each}
</div>

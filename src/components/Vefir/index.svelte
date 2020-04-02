<script>
  import { vefir } from "src/db";
  import Vefur from "src/components/Vefir/Vefur.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
</script>

<style>
  div {
    display: grid;
    grid-gap: 50px;
  }
</style>

<div>
  {#each vefir as vefur}
    <IntersectionObserver let:intersecting>

      <Vefur {vefur} />

    </IntersectionObserver>
  {/each}
</div>

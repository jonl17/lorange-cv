<script>
  import { vefir } from "src/db";
  import Vefur from "src/components/Vefir/Vefur.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import { onMount } from "svelte";

  let width = 0;
</script>

<style>
  div {
    display: grid;
    grid-gap: 50px;
  }
</style>

<svelte:window bind:innerWidth={width} />

<div>
  {#each vefir as vefur}
    {#if width > 900}
      <IntersectionObserver let:intersecting>

        <Vefur {vefur} />

      </IntersectionObserver>
    {:else}
      <Vefur {vefur} />
    {/if}
  {/each}
</div>

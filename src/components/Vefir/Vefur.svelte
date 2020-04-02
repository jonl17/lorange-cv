<script>
  import Details from "./Details.svelte";
  export let vefur;
</script>

<style>
  img {
    width: 100%;
  }
</style>

{#if vefur}
  <div>
    <img alt={vefur.nafn} src={vefur.image} />
    <Details nafn={vefur.nafn} />
  </div>
{/if}

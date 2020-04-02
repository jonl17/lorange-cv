<script>
  import Section from "src/components/Section/index.svelte";
  import Bio from "src/components/Bio/index.svelte";
  import Vefir from "src/components/Vefir/index.svelte";
  import Tonlist from "src/components/Tonlist/index.svelte";
</script>

<style>
  .section-wrap {
    display: grid;
    grid-template-columns: 0.3fr 0.8fr 0.4fr;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    grid-gap: 35px;
  }
</style>

<svelte:head>
  <title>Jón Gabríel Lorange</title>
</svelte:head>

<div class="section-wrap">
  <Section name="Jón Gabríel Lorange">
    <Bio />
  </Section>
  <Section name="Verkefni">
    <Vefir />
  </Section>
  <Section name="Tónlist">
    <Tonlist />
  </Section>
</div>

<script>
  import Section from "src/components/Section/index.svelte";
  import Bio from "src/components/Bio/index.svelte";
  import Vefir from "src/components/Vefir/index.svelte";
  import Tonlist from "src/components/Tonlist/index.svelte";
  import Header from "src/components/Header/index.svelte";
  import { icelandic } from "src/store";
</script>

<style>
  .section-wrap {
    display: grid;
    grid-template-columns: 0.03fr 0.3fr 0.8fr 0.3fr;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    grid-gap: 35px;
  }
</style>

<div class="section-wrap">
  <Header />
  <Section name="Jón Gabríel Lorange">
    <Bio />
  </Section>
  <Section name={$icelandic ? 'Kóðun' : 'Coding'}>
    <Vefir />
  </Section>
  <Section name={$icelandic ? 'Tónlist' : 'Music'}>
    <Tonlist />
  </Section>
</div>

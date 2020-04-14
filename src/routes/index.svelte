<script>
  import Section from "src/components/Section/index.svelte";
  import Bio from "src/components/Bio/index.svelte";
  import Vefir from "src/components/Vefir/index.svelte";
  import Tonlist from "src/components/Tonlist/index.svelte";
  import Header from "src/components/Header/index.svelte";
  import { icelandic, darkMode } from "src/store";
</script>

<style>
  .section-wrap {
    display: grid;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    grid-gap: 35px;
    grid-template-columns: 0.03fr 0.3fr 0.8fr 0.3fr;
    overflow: hidden;
    /* mode properties */
    background: var(--background);
    color: var(--color);
    transition: 0.2s ease-in-out;
  }

  /* mobile */
  @media (max-width: 900px) {
    .section-wrap {
      grid-template-columns: 1fr;
      overflow: visible;
      height: 100%;
    }
  }
</style>

<div
  style="--background:{$darkMode ? '#333' : 'white'}; --color:{$darkMode ? 'white' : '#333'}"
  class="section-wrap">
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

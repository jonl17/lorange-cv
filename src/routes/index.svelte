<script>
  import Section from "../components/Section/index.svelte";
  import Bio from "../components/Bio/index.svelte";
  import Vefir from "../components/Vefir/index.svelte";
  import Tonlist from "../components/Tonlist/index.svelte";
  import Header from "../components/Header/index.svelte";
  import { icelandic, darkMode } from "../store";
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
    transition: 0.2s ease-in-out;
  }
  .lightMode {
    background: #fff;
    color: #333;
  }
  .darkMode {
    background: #333;
    color: #fff;
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

<div class={$darkMode ? 'section-wrap darkMode' : 'section-wrap lightMode'}>
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

<script>
  import { icelandic } from "src/store";
  import Burger from "src/components/Burger/index.svelte";
  import { onMount } from "svelte";

  export let vefur;

  let txtCollapsed = false;

  const toggleText = () => {
    txtCollapsed = !txtCollapsed;
  };
</script>

<style>
  .wrap {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 0 25px 0;
  }
  p {
    margin: 0.3rem 0;
  }
  .heading > span {
    font-weight: bold;
  }
  .about {
    box-sizing: border-box;
    padding: 0 0 1rem;
  }
  .collapsable {
    overflow: hidden;
    transform: var(--scale);
    height: var(--height);
    transform-origin: top;
  }
  .year {
    font-weight: bold;
  }
  .top-box {
    display: flex;
    justify-content: space-between;
  }
  .subtitle {
    text-transform: lowercase;
  }
  .heading > a {
    text-decoration: underline;
  }
  .heading > a:hover {
    cursor: pointer;
  }
</style>

<div class="wrap">

  <div class="top-box">
    <div>
      <p>
        <a target="_blank" href={vefur.url} class="subtitle">{vefur.title}</a>
      </p>
      <p class="year">{vefur.year}</p>
    </div>
    <Burger on:trigger={toggleText} />
  </div>

  <div
    style="--scale:{txtCollapsed ? 'scaleY(0)' : 'scaleY(1)'}; --height:{txtCollapsed ? '0px' : 'auto'}"
    class="collapsable">
    <div class="about-wrap">
      <div class="about">
        {#if $icelandic}
          {@html vefur.html.is}
        {:else}
          {@html vefur.html.en}
        {/if}
      </div>
    </div>
    <p class="heading">
      <span>{$icelandic ? 'Samstarf: ' : 'Collaboration: '}</span>
      {$icelandic ? vefur.collaboration.is : vefur.collaboration.en}
    </p>
    <p class="heading">
      <span>{$icelandic ? 'Tækni notuð: ' : 'Tech used: '}</span>
      {vefur.stack}
    </p>
    {#if vefur.github}
      <p class="heading">
        <a target="_blank" href={vefur.github}>Github</a>
      </p>
    {/if}
  </div>
</div>

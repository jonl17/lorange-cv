<script>
  import { icelandic } from "src/store";
  export let vefur;

  let txtCollapsed = true;

  const toggleText = () => {
    txtCollapsed = !txtCollapsed;
  };
</script>

<style>
  .wrap {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 0;
    border-bottom: 1px solid;
  }
  p {
    margin: 0.3rem;
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
    transition: 0.2s ease-in-out;
    transform: var(--scale);
    height: var(--height);
    transform-origin: top;
  }
  .year {
    font-weight: bold;
  }
</style>

<div class="wrap">
  <p>
    <a target="_blank" href={vefur.url} class="subtitle">{vefur.nafn} ↗</a>
  </p>
  <p on:click={toggleText} class="year">{vefur.year}</p>

  <div
    style="--scale:{txtCollapsed ? 'scaleY(0)' : 'scaleY(1)'}; --height:{txtCollapsed ? '0px' : 'auto'}"
    class="collapsable">
    <div class="about-wrap">
      <p class="about">
        {@html $icelandic ? vefur.about.is : vefur.about.en}
      </p>
    </div>
    <p class="heading">
      <span>{$icelandic ? 'Samstarf: ' : 'Collaboration: '}</span>
      {$icelandic ? vefur.collaboration.is : vefur.collaboration.en}
    </p>
    <p class="heading">
      <span>{$icelandic ? 'Stakkur: ' : 'Stack: '}</span>
      {vefur.stack}
    </p>
  </div>
</div>

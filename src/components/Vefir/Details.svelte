<script>
  export let stack = ["js", "firebase", "netlify cms"];
  export let nafn = "Nafn";

  export let vefur;
</script>

<style>
  .wrap {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .stack {
    display: flex;
  }
  p {
    margin: 0;
  }
</style>

<div class="wrap">
  <a href="/" class="subtitle">{nafn}</a>
  {#if stack}
    <div class="stack">
      {#each stack as item, i}
        <p>{i !== stack.length - 1 ? item + ', ' : item + '.'}</p>
      {/each}
    </div>
  {/if}
</div>

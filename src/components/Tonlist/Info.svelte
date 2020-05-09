<script>
  import { onMount } from "svelte";
  export let title, releaseDate;
  let year;
  onMount(() => {
    year = releaseDate.split("-")[0];
  });
</script>

<style>
  .wrap {
    position: absolute;
    top: 0;
    left: 0;
    height: 98%;
    width: 100%;
    background: rgba(16, 16, 16, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1,
  p {
    margin: 0;
    text-align: center;
  }
</style>

<div class="wrap">
  <div>
    <h1>{title}</h1>
    <p>{year}</p>
  </div>
</div>

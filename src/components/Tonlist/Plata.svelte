<script>
  export let album;
</script>

<style>
  img {
    width: 100%;
    transition: transform 0.2s;
  }
  img:hover {
    cursor: pointer;
  }
</style>

{#if album}
  <a href={album.url} target="_blank">
    <img src={album.image} alt={album.title} />
  </a>
{/if}

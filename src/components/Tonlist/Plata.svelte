<script>
  export let album;
</script>

<style>
  img {
    width: 100%;
    transition: transform 0.2s;
    object-fit: cover;
  }
  img:hover {
    cursor: pointer;
  }
  a {
    position: relative;
  }
  a:hover {
    color: inherit;
  }
</style>

{#if album}
  <a href={album.url} target="_blank">
    <img src={album.image} alt={album.title} />
  </a>
{/if}

<script>
  export let plata;
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

<a href={plata.url} target="_blank">
  <img src={plata.image} alt={plata.nafn} />
</a>

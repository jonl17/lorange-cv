<script>
  export let name;
</script>

<style>
  .container {
    overflow-y: auto;
    box-sizing: border-box;
    padding: 15px 20px;
  }
  .container::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    .container {
      overflow-y: visible;
      margin-top: -35px;
    }
  }
</style>

<div id="scrollArea" class="container">
  <h1 class="title">{name}</h1>
  <slot />
</div>

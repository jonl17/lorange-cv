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
</style>

<div class="container">
  <h1 class="title">{name}</h1>
  <slot />
</div>

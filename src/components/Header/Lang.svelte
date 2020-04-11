<script>
  import { icelandic } from "src/store";
</script>

<style>
  div {
    width: 100%;
  }
  div:hover {
    cursor: pointer;
  }
  p {
    margin: 15px 0;
    text-align: center;
    font-weight: bold;
  }
  ::selection {
    background: transparent;
    color: inherit;
  }
</style>

<div on:click={icelandic.set(!$icelandic)}>
  <p>
    <span style={$icelandic ? 'color: orange' : 'color: inherit'}>IS</span>
    /
    <span style={$icelandic ? 'color: inherit' : 'color: orange'}>EN</span>
  </p>
</div>

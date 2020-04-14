<script>
  import { darkMode } from "src/store";

  const toggleMode = () => {
    darkMode.set(!$darkMode);
  };
</script>

<style>
  img {
    width: 50%;
    box-sizing: border-box;
    margin: 0 auto;
  }
  img:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    img {
      width: auto;
      max-height: 35px;
      padding-left: 25px;
    }
  }
</style>

<img
  on:click={toggleMode}
  src={$darkMode ? './favicon.png' : './moon.png'}
  alt="moon" />

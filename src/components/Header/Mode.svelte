<script>
  import { darkMode } from "src/store";

  const toggleMode = () => {
    darkMode.set(!$darkMode);
  };
</script>

<style>
  @keyframes turn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  img {
    width: 50%;
    box-sizing: border-box;
    margin: 0 auto;
    animation: turn 30s ease 0s infinite alternate;
    filter: contrast(1.2);
  }
  img:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    img {
      width: auto;
      max-height: 35px;
    }
  }
</style>

<img
  on:click={toggleMode}
  src={$darkMode ? './favicon.png' : './moon.png'}
  alt="moon" />

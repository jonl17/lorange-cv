<script>
  import Lang from "./Lang.svelte";
  import Mode from "./Mode.svelte";
  import { metadata } from "src/db";
  import { darkMode } from "src/store";
</script>

<style>
  .main-wrap {
    box-sizing: border-box;
    margin-right: -35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  .section-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .top {
    justify-content: flex-start;
  }
  .bottom {
    justify-content: flex-end;
  }
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
  }

  @media (max-width: 900px) {
    .main-wrap {
      flex-direction: row;
      margin: 0;
      overflow: visible;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 1.5rem;
    }
    .section-wrap {
      flex-direction: row;
      align-items: center;
    }
    img {
      width: auto;
      height: 100%;
      max-height: 65px;
      color: var(--color);
    }
    .cv {
      padding-right: 15px;
    }
  }
  .cv {
    margin: 0 auto;
    max-height: 65px;
    height: 100%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .cv > p {
    padding-right: 5px;
  }
</style>

<div class="main-wrap">
  <div class="section-wrap top">
    <Lang />
    <Mode />
  </div>
  <div class="section-wrap bottom">
    <a class="cv" href="JGL_CV.pdf" target="_blank">
      <p class="subtitle">cv</p>

      <i class="gg-attachment" />
    </a>
    <a href={metadata.contact.github} target="_blank">
      <img
        alt="github-logo"
        src={$darkMode ? './git-white.svg' : './git.svg'} />
    </a>
    <a href={metadata.contact.spotify} target="_blank">
      <img
        alt="spotify-logo"
        src={$darkMode ? './spotify-white.svg' : './spotify.svg'} />
    </a>
  </div>
</div>
<link href="https://css.gg/attachment.css" rel="stylesheet" />

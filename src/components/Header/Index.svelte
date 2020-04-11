<script>
  import Lang from "./Lang.svelte";
  import { metadata } from "src/db";
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
</style>

<div class="main-wrap">
  <div class="section-wrap top">
    <Lang />
  </div>
  <div class="section-wrap bottom">
    <a href={metadata.contact.github} target="_blank">
      <img
        alt="github-logo"
        src="https://res.cloudinary.com/dgekvli3k/image/upload/v1586599301/git_vw9cld.png" />
    </a>
    <a href={metadata.contact.spotify} target="_blank">
      <img
        alt="spotify-logo"
        src="https://res.cloudinary.com/dgekvli3k/image/upload/v1586599301/spotify_unx0ur.png" />
    </a>
  </div>
</div>

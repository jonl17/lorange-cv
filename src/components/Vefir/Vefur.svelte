<script>
  import cloudinary from "cloudinary-core";
  import Details from "./Details.svelte";
  import PlayBtn from "./playBtn.svelte";
  import { onMount } from "svelte";

  const cl = new cloudinary.Cloudinary({
    cloud_name: "balkan-studio",
    secure: true
  });

  export let vefur;
  let playing = false;
  let browserWidth;

  const setPlayBtnsHeight = () => {
    let vid = document.getElementById(vefur.video.publicId);
    let btns = document.getElementsByClassName("play-btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].style.height = vid.clientHeight + "px";
    }
  };

  onMount(() => {
    setPlayBtnsHeight();
    if (browserWidth <= 900) {
      document
        .getElementById(vefur.video.publicId)
        .addEventListener("click", () => pause());
    }
  });

  const play = () => {
    document.getElementById(vefur.video.publicId).play();
    playing = true;
  };
  const pause = () => {
    if (browserWidth <= 900) {
      // only on mobile devices!
      document.getElementById(vefur.video.publicId).pause();
      playing = false;
    }
  };
</script>

<style>
  .vefur-wrap {
    position: relative;
  }
</style>

<svelte:window bind:innerWidth={browserWidth} on:resize={setPlayBtnsHeight} />

{#if vefur}
  <div class="vefur-wrap">
    {@html cl
      .videoTag(vefur.video.publicId, {
        quality: 'auto',
        fetchFormat: 'auto',
        id: vefur.video.publicId,
        muted: true,
        loop: true,
        playsInline: true,
        style: 'width: 100%; position: relative;'
      })
      .toHtml()}
    <PlayBtn {playing} on:trigger={play} />
    <Details {vefur} />
  </div>
{/if}

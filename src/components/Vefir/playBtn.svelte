<script>
  import { createEventDispatcher } from "svelte";

  export let playing;

  const dispatch = createEventDispatcher();

  const playVideo = () => {
    dispatch("trigger");
  };
</script>

<style>
  span {
    display: none;
  }
  @media (max-width: 900px) {
    .play-btn {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: var(--width);
      border: none;
      background: rgba(200, 200, 200, 0.7);
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0px; /* initial value, before the parent component sets height equal to video element client height */
      overflow: hidden;
    }
    span:hover {
      cursor: pointer;
    }
    .play-icon {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -20px;
      margin-left: -35px;
      width: 40px;
      height: 40px;
      border-style: solid;
      border-width: 20px 0px 20px 40px;
      box-sizing: border-box;
      border-color: transparent transparent transparent #333;
    }
  }
</style>

<span
  style="--width:{playing ? '0%' : '100%'}"
  on:click={playVideo}
  class="play-btn">
  <span class="play-icon" />
</span>

<script>
  import { createEventDispatcher } from "svelte";
  let open = true;
  const dispatch = createEventDispatcher();
  const triggerOpen = () => {
    dispatch("trigger");
    open = !open;
  };
</script>

<style>
  div {
    height: 40px;
    width: 40px;
    display: flex;
    box-sizing: border-box;
    padding: 5px;
    position: relative;
    transition: 0.1s ease-in-out;
  }
  div:hover {
    cursor: pointer;
  }
  .ex {
    transform: rotate(180deg) translateX(10px);
  }
  div > span {
    position: absolute;
    width: 50%;
    height: 50%;
  }
  div > .two {
    transform: rotate(-45deg);
  }
  div > .three {
    transform: rotate(45deg);
  }
  span {
    border-bottom: 1px solid;
  }
</style>

<div class={!open ? 'burger' : 'ex'} on:click={triggerOpen}>

  <span class="two" />
  <span class="three" />

</div>

<script>
  import { createEventDispatcher } from "svelte";
  let open = false;
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
  }
  div:hover {
    cursor: pointer;
  }
  .ex {
    flex-direction: column;
    justify-content: center;
  }
  .burger {
    position: relative;
  }
  .burger > span {
    position: absolute;
    width: 50%;
    height: 50%;
  }
  .burger > .two {
    transform: rotate(-45deg);
  }
  .burger > .three {
    transform: rotate(45deg);
  }
  .ex > .two {
    transform: rotate(-45deg);
  }
  .ex > .three {
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

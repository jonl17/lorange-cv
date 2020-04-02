<script>
  import cloudinary from "cloudinary-core";
  import Details from "./Details.svelte";

  const cl = new cloudinary.Cloudinary({
    cloud_name: "dgekvli3k",
    secure: true
  });

  export let vefur;
</script>

{#if vefur}
  <div class="vefur-wrap">
    {@html cl
      .videoTag('cv/' + vefur.videoUrl, {
        secure: true,
        width: '100%',
        autoplay: false,
        muted: true,
        loop: true,
        quality: 50
      })
      .transformation()
      .toHtml()}
    <Details nafn={vefur.nafn} />
  </div>
{/if}

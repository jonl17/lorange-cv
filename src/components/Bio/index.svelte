<script>
  import { metadata } from "src/db";
  import { icelandic } from "src/store";
</script>

<style>
  .wrap {
    display: grid;
    grid-gap: 50px;
  }
  p {
    margin: 0;
  }
  img {
    width: 100%;
  }
</style>

<div class="wrap">
  <p class="texti">{$icelandic ? metadata.about.is : metadata.about.en}</p>
  <div class="contact-wrap">
    <p class="subtitle">{$icelandic ? 'Hafðu samband' : 'Contact'}</p>
    <p>{metadata.contact.email}</p>
    <p>{metadata.contact.tel}</p>
  </div>
  <img
    src="https://res.cloudinary.com/dbnti3by9/image/upload/v1589017454/nonni-motto1_wlaswz_yknzps.jpg"
    alt="self-portrait" />
</div>

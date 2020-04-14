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
    src="https://res.cloudinary.com/dgekvli3k/image/upload/c_scale,f_auto,q_auto,w_901/v1585672982/nonni-motto1_wlaswz.jpg"
    alt="self-portrait" />
</div>

<template>
  <figure class="avatar">
      <img :src="src" :alt="alt" :width="size" :height="size"> 
  </figure>
</template>

<script>
export default {
    name: 'Avatar',
    props: {
        src: {
            type: String,
            default:'https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118685787_1248152492189207_4271858257479947492_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=BB3h7nBiGvgAX9Avbps&oh=9f9f59411584aa5e953d85f317463399&oe=607A4FBF'
        },
        alt: {
            type: String
        },
        size: {
            type: Number
        }
    }
}
</script>

<style>
.avatar {
    padding: 2px;
    border-radius: 999px;
    padding: 2px;
    display: inline-flex;
    background: linear-gradient(219deg, rgba(184,63,140,1) 0%, rgba(237,158,90,1) 100%);
    img {
        border: 2px solid white;
        border-radius: inherit;
    }
}
</style>
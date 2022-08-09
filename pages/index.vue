<template>
  <div>
    <Carousel></Carousel>
    <div class="relative">
      <div class="content__page">
        <section class="w-full h-screen section-1 container mx-auto">
          <img id="section-1" src="../assets/images/Special_menu.png" alt="" class="w-full">
        </section>
        <section>
        content to
        </section>
        <section>
        content to
        </section>
      </div>
  </div>
  </div>

</template>

<script>
  import Carousel from '~/components/Carousel/Carousel.vue';
export default {
  name: 'IndexPage',
  layout: 'home',
  component: {Carousel}
}
</script>
<style scoped>
body {
  font-family: 'poppins'
}
</style>

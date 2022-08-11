<template>
  <div class="card rounded-sm overflow-hidden">
    <div class="image h-60 cursor-grab overflow-hidden">
      <img :src=img alt="" class="object-cover transition ease-in-out delay-150 hover:scale-110 duration-200">
    </div>
    <div class="content_card cursor-pointer p-4 bg-bg-tranparent">
      <span class="start text-primary">
        <span class="bi-star-fill"></span>
        <span class="bi-star-fill"></span>
        <span class="bi-star-fill"></span>
        <span class="bi-star-fill"></span>
        <span class="bi-star-half"></span>
      </span>
      <h4 class="text-white text-xl md:text-2xl font-bold flex justify-between mt-4">{{data.title}}
        <span class="price button text-xl">${{data.price}}</span></h4>
      <p class="text-gray-200 py-4 text-white">{{data.description}}</p>
      <button class="button btn-order">Order Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ["data", 'img']
}
</script>

<style lang="scss">
.card{
  img{
    width: 100%;
    height: inherit;
  }
}
</style>

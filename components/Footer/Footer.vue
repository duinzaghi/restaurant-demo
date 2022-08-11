<template>
  <div class="Footer">
    <div class="text-white text-center my-8">
      <div class="bi-chevron-double-up"></div><br/>
      <a href="#header" class="border-solid py-4 px-6 border-gray-300 rounded-lg border-2">Back to top</a>
    </div>
    <div class="container mx-auto flex justify-between mt-4 text-white flex-row pb-6">
      <div class="basis-1/3 p-2">
        <div class="flex mr-4 mb-4">
          <img src="../../assets/images/logo2.png" alt="">
          <h4 class="text-white text-3xl md:text-4xl">ACasa</h4>
        </div>
        <p class="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat.</p>
      </div>
      <div class="basis-1/3 p-2">
        <h4 class="mb-4 text-2xl md:text-3xl">Contact</h4>
        <p>Call: +84 (094) 754 43 7I</p>
        <p>Timing: <span class="text-primary text-bold">Everyday from 10a.m - 11p.m</span></p>
        <p>Location: 23 Tran Thien Thuat street, HCMC, Viet Nam.</p>
      </div>
      <div class="basis-1/3 p-2">
        <h4 class="mb-4 text-2xl md:text-3xl">Subscribe</h4>
        <input type="text" placeholder="email" class="w-full subscribe"><br/>
        <button class="button mt-2 w-full rounded-lg">Subscribe</button>
      </div>
    </div>
    <div class="bg-gray-800">
      <div class="container mx-auto flex justify-between text-gray-400 py-4">
        <p class="">Copyright © 2021 CASA | All Rights Reserved</p>
        <div class="flex ">
          <span class="bi-facebook px-2"></span>
          <span class="bi-twitter px-2"></span>
          <span class="bi-instagram px-2"></span>
          <span class="bi-youtube px-2"></span>
          <span class="bi-google px-2"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style>

</style>

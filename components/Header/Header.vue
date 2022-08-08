<template>
  <div class="header">
    <div class="container w-11/12 my-0 mx-auto bg-black">
      <header class="flex justify-between items-center text-primary">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="menu_list">
          <ul class="menu_list_item">
              <li v-for="(item, index) in menu" :key="index" class="menu__item px-4 py-2">
                <nuxt-link :to="{path: item.url}"
                class=""
                >{{item.name}}</nuxt-link>
              </li>
          </ul>
        </div>
        <div class="box_action">
          <span class="icon bi-cart text-primary"></span>
          <button class="btn px-4 px-2 bg-yellow-400">login/logout</button>
        </div>
      </header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      menu: [
        {name: 'home',url: '/home'},
        {name: 'about us',url: '/home2'},
        {name: 'menu',url: '/home3'},
        {name: 'blog',url: '/home4'},
        {name: 'support',url: '/home5'},
      ]
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="header absolute z-50 w-full">
    <div class="container w-11/12 my-0 mx-auto">
      <header class="flex justify-between items-center text-primary">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="menu_list">
          <ul class="menu_list_item">
              <li v-for="(item, index) in menu" :key="index" class="menu__item px-4 py-2">
                <div v-if="!!item.children">
                  <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="capitalize focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center" type="button">{{item.name}} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <!-- Dropdown menu -->
                  <div v-show="true" id="dropdown"  class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-primary">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                      </ul>
                  </div>
                </div>
                <nuxt-link v-else :to="{path: item.url}" class="capitalize" >{{item.name}}</nuxt-link>
              </li>
          </ul>
        </div>
        <div class="box_action">
          <span class="icon bi-cart text-primary"></span>
          <button class="btn px-4 px-2 bg-yellow-400 border-solid rounded-lg text-black">Sign up/Log in</button>
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
        {name: 'menu',url: '/home3', children: [{name: 'cate1', url: '/cate1'}, {name: 'cate2', url: '/cate2'}]},
        {name: 'blog',url: '/home4'},
        {name: 'support',url: '/home5'},
      ]
    }
  }
}
</script>

<style>
  .header{
    height: 85px;
  }
</style>

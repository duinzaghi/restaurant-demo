<template>
<div class="root">
  <Header/>
  <nuxt/>
  <footer>foooter</footer>
</div>
</template>
<script>
  import Header from '~/components/Header/Header.vue';
export default {
  name: 'HomeLayout',
  component: {Header},
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

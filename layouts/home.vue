<template>
<div class="root">
  <Header/>
  <nuxt/>
  <Footer/>
</div>
</template>
<script>
  import Header from '~/components/Header/Header.vue';
  import Footer from '~/components/Footer/Footer.vue';
export default {
  name: 'HomeLayout',
  components: {Header, Footer},
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

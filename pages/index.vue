<template>
  <div>
    <Carousel></Carousel>
    <div class="relative">
      <div class="content__page">
        <section class="w-full md:h-screen section-1 container mx-auto">
          <img id="section-1" src="../assets/images/Special_menu.png" alt="" class="w-full">
        </section>
        <section class="container section-2 mx-auto">
          <h2 class="text-white text-7xl text-center py-6 font-homeMadeApple">Menu</h2>
          <div class="gird grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4" style="display: grid;">
          <CardMenu v-for="(item,index) in data" :key="index" :data="item" :img="require(`~/assets/images/${item.img}`)"></CardMenu>
          </div>
          <div class="text-right py-4">
            <a class="text-blue-500 text-xl">More...</a>
          </div>
        </section>
      </div>
        <section class="section_sale relative">
          <div class="container mx-auto text-white top-16 relative">
            <h3 class="text-6xl py-4">Our Special <br/>Good Food Price</h3>
            <p class="font-thin text-2xl italic">Pizza size L</p>
            <p class="text-primary font-bold text-7xl py-4">$1<span class="text-8xl">8</span>.99</p>
            <button class="button">Add To Cart</button>
          </div>
          <img src="../assets/images/sale.png" alt="" class="absolute bottom-0 right-0 w-2/5 md:w-auto">
          <img src="../assets/images/sale_number.png" alt="" class="absolute bottom-1 right-14 md:right-1/3">
        </section>
        <section class="section_3 py-4">
          <div class="container mx-auto text-white">
            <h2 class="text-center text-4xl md:text-7xl mb-6">Listen to our customers</h2>
            <div class="grid-cols-2 gap-2 md:grid-cols-3 md:gap-4" style="display:grid">
              <div class="card_manager text-center bg-bg-tranparent p-10">
                <div class="py-4">
                  <img src="../assets/images/Rectangle.png" alt="" class="mx-auto"/>
                </div>
                <span class="start text-primary">
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-half"></span>
                </span>
                <p class="italic font-thin">“It is a long established fact that a reader will be distracted by the readable content of a page”</p>
                <h3 class="text-primary font-bold text-3xl">Rahim Khan</h3>
              </div>
              <div class="card_manager text-center bg-bg-tranparent p-10">
                <div class="py-4">
                  <img src="../assets/images/Rectangle1.png" alt="" class="mx-auto"/>
                </div>
                <span class="start text-primary">
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-half"></span>
                </span>
                <p class="italic font-thin">“It is a long established fact that a reader will be distracted by the readable content of a page”</p>
                <h3 class="text-primary font-bold text-3xl">Usman Shand</h3>
              </div>
              <div class="card_manager text-center bg-bg-tranparent p-10">
                <div class="py-4">
                  <img src="../assets/images/Rectangle2.png" alt="" class="mx-auto"/>
                </div>
                <span class="start text-primary">
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-fill"></span>
                  <span class="bi-star-half"></span>
                </span>
                <p class="italic font-thin">“It is a long established fact that a reader will be distracted by the readable content of a page”</p>
                <h3 class="text-primary font-bold text-3xl">Sangeen wali</h3>
              </div>
            </div>
            <div class="counter my-10 flex flex-row justify-around">
              <div class="text-center">
                <span class="text-3xl md:text-6xl">56789</span>
                <br/>
                <span class="font-thin">Customers Served</span>
              </div>
              <div class="text-center">
                <span class="text-3xl md:text-6xl">10023</span><br/>
                <span class="font-thin">Customers Served</span>
              </div>
              <div class="text-center">
                <span class="text-3xl md:text-6xl">4544</span><br/>
                <span class="font-thin">Customers Served</span>
              </div>
              <div class="text-center">
                <span class="text-3xl md:text-6xl">12520</span><br/>
                <span class="font-thin">Customers Served</span>
              </div>
            </div>
          </div>
        </section>
  </div>
  </div>

</template>

<script>
  import Carousel from '~/components/Carousel/Carousel.vue';
  import CardMenu from '~/components/Card/CardMenu.vue';
export default {
    name: "IndexPage",
    components: { CardMenu, Carousel },
    layout: "home",
    data() {
        return {
            data: [
                { title: "Special Salad", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img1.png" },
                { title: "Italian Poke", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img2.png" },
                { title: "Roast Goose", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img3.png" },
                { title: "Italian Fillet", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img4.png" },
                { title: "Side Salad", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img5.png" },
                { title: "Seafood Pasta", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img6.png" },
                { title: "Grill Mussels", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img7.png" },
                { title: "Bruschetta", price: 99, description: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque", img: "img8.png" },
            ]
        };
    }
}
</script>
<style scoped lang="scss">
body {
  font-family: 'poppins'
}

</style>

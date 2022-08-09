<template>
<div id="slider" class="h-screen">
  <transition-group tag="div" :name="transitionName" class="slides-group">
    <div v-if="show" :key="current" class="slide" :class="slides[current].className">
      <div v-show="current===0" class="content_banner text-white absolute">
        <p>DINNING OUT IN SAIGON</p>
        <h1 class="text-7xl font-serif">Come A Casa</h1>
        <p class="text-primary">Proudly serving dishes that are
        <span>"homemade from scratch"</span> A Casa is all about sharing the love and nourishment through family recipes.</p>
      </div>
      <div v-show="current===1" class="content_banner text-white absolute">
        <p>DINNING OUT IN ACASA</p>
        <h1 class="text-7xl font-serif">Toast</h1>
        <p class="text-primary">Toast  is the ideal absorptive foundation for juicy sauteed mushrooms and eggs</p>
      </div>
      <div v-show="current===2" class="content_banner text-white absolute">
        <p>DINNING OUT IN ACASA</p>
        <h1 class="text-7xl font-serif">Chicken breast</h1>
        <p class="text-primary">Toast  is the ideal absorptive foundation for juicy sauteed mushrooms and eggs</p>
      </div>
      <div v-show="current===3" class="content_banner text-white absolute">
        <p>DINNING OUT IN ACASA</p>
        <h1 class="text-7xl font-serif">Fruit pizza</h1>
        <p class="text-primary">Fruit Pizza is the ideal absorptive foundation for juicy sauteed mushrooms and eggs</p>
      </div>
      <div v-show="current===4" class="content_banner text-white absolute">
        <p>DINNING OUT IN ACASA</p>
        <h1 class="text-7xl font-serif">Toast</h1>
        <p class="text-primary">Toast  is the ideal absorptive foundation for juicy sauteed mushrooms and eggs</p>
      </div>
    </div>
  </transition-group>
  <div :disabled="current===0" class="btn btn-prev text-gray-400 text-4xl" aria-label="Previous slide" @click="slide(-1)">
    &#10094;
  </div>
  <div class="btn btn-next text-gray-400 text-4xl" aria-label="Next slide" @click="slide(1)">
    &#10095;
  </div>
  <div class="div__linearGreaient w-full absolute bottom-0 flex justify-center items-center" @click="goto">
    <a href="#section-1" class="flex flex-col justify-center items-center">
      <span class="icon bi-mouse2 text-white text-2xl"></span>
      <span class="icon bi-chevron-double-down text-white"></span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'CarouselComponent',

  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        { className: "banner1" },
        { className: "banner2" },
        { className: "banner3" },
        { className: "banner4" },
        { className: "banner5" }
      ]
    }
  },
  mounted() {
    this.show = true;
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      const len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    },
    goto() {
        // this.$router.replace({ name: this.$route.name, hash: '#section-1' });
        window.scrollTo(1000,100);
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.banner1 {
  background: url("../../assets/images/banner1.png");
  background-size: cover;
  background-position: center;
}

.banner2 {
  background: url("../../assets/images/banner2.png");
  background-size: cover;
  background-position: center;
}

.banner3 {
  background: url("../../assets/images/banner3.png");
  background-size: cover;
  background-position: center;
}

.banner4 {
  background: url("../../assets/images/banner4.png");
  background-size: cover;
  background-position: center;
}

.banner5 {
  background: url("../../assets/images/banner5.png");
  background-size: cover;
  background-position: center;
}


/* SLIDER STYLES */
body {
  /* overflow: hidden; */
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}
.div__linearGreaient{
  height: 200px;
  background-image: linear-gradient(rgba(51, 51, 51, 0), rgba(39, 39, 39, 0.43), rgb(29, 29, 29) );
}
</style>

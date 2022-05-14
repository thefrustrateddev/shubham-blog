<template>
  <div>
    <div v-if="isDefault" class="hero-banner">
      <div class="centered">{{ bannerText }}</div>
      <div
        class="bottom-centered"
        @click="scrollToElement({ behavior: 'smooth' })"
      >
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>
    <div v-else class="blog-img">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogBanner",
  inheritAttrs: false,
};
</script>
<script setup>
import { defineProps } from "vue";
defineProps({
  image: {
    type: String,
    required: false,
    default: `url(${require("@/assets/notfound.jpeg")})`,
  },
  bannerText: {
    type: String,
    required: false,
    default: `The Truecaller Blog`,
  },
  isDefault: {
    type: Boolean,
    required: false,
    default: true,
  },
});
// eslint-disable-next-line no-unused-vars
const scrollToElement = (options) => {
  const el = this.$el.getElementsByClassName("post-list")[0];

  if (el) {
    el.scrollIntoView(options);
  }
};
</script>

<style scoped lang="scss">
@import "../styles/variables";
.hero-banner {
  position: relative;
  text-align: center;
  width: 100%;
  height: calc(100vh - 70px);
  background-image: v-bind("image");
  background-position-y: -100px;
  background-repeat: no-repeat;
  background-position-x: center;
  // background-size: cover;
  img {
    width: 100%;
    height: 100%;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-white;
    font-weight: 900;
    font-size: 65px;
  }
  .bottom-centered {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    color: $color-white;
    font-weight: 900;
    font-size: 40px;
    cursor: pointer;
  }
}
.blog-img {
  img {
    width: 100%;
  }
}
</style>

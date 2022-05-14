<template>
  <div>
    <div v-if="isDefault" class="hero-banner" ref="heroBanner">
      <div class="centered">{{ bannerText }}</div>
      <div class="bottom-centered" @click="scrollToBottom()">
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>
    <div v-else class="blog-img">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
/**
 * @Component BlogBanner
 * This is component refers to the top banner bewing shown on the list page as well as the detail view
 * @param isDefault: is true when banner being shown has a center text. Home page in this case
 * @param isDefault: is false when banner being shown doesnt contain a center text
 * @param bannerText: text to be shown on the image
 * @param image: image to be shown on the top of the page
 */
export default {
  name: "BlogBanner",
  inheritAttrs: false,
};
</script>
<script setup>
import { defineProps, ref } from "vue";
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
const heroBanner = ref(null);
// eslint-disable-next-line no-unused-vars
const scrollToBottom = () => {
  // scroll to start of latest-artciles
  let element = document.querySelector(`#latest-articles`);
  element.scrollIntoView({ behavior: "smooth" });
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

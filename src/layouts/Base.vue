<template>
  <blog-header></blog-header>
  <router-view />
  <blog-footer></blog-footer>
</template>
<script>
import BlogHeader from "./BlogHeader.vue";
import BlogFooter from "./BlogFooter.vue";
export default {
  components: { BlogHeader, BlogFooter },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

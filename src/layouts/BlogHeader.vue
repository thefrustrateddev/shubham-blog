<template>
  <div class="header pl-15 pt-20 pb-20">
    <img
      data-cy="logo"
      class="logo"
      src="../assets/truecaller.svg"
      @click="redirectToHomePage"
    />
  </div>
</template>
<script>
export default {
  name: "BlogHeader",
};
</script>
<script setup>
const redirectToHomePage = () => {
  window.location.href = "/";
};
</script>
<style lang="scss">
.header {
  img {
    max-height: 30px;
  }
}
</style>

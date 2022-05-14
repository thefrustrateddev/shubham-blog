<template>
  <div class="header pl-15 pt-20 pb-20">
    <router-link to="/" data-cy="logo">
      <img class="logo" src="../assets/truecaller.svg" />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "BlogHeader",
};
</script>
<style lang="scss">
.header {
  img {
    max-height: 30px;
  }
}
</style>

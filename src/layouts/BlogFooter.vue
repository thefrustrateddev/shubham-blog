<template>
  <footer class="footer pt-30 pb-30">
    <div class="wrapper">© True Software Scandinavia AB</div>
  </footer>
</template>
<script>
export default {
  name: "BlogFooter",
};
</script>
<style scoped lang="scss">
@import "../styles/variables";

.footer {
  background: $color-blue-2;
  color: $color-white;
  font-weight: 700;
  font-size: 14px;
}
</style>

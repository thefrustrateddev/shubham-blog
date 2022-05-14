<template>
  <div class="not-found">
    <img src="@/assets/404.png" />
  </div>
</template>

<script>
/**
 * @View 404 NOT FOUND
 */

export default {
  name: "NotFound",
};
</script>
<style lang="scss">
.not-found {
  height: calc(100vh - 140px);
  display: flex;
  align-items: center;
}
</style>

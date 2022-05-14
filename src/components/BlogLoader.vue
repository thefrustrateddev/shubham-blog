<template>
  <div class="loader mt-50 mb-50">
    <div class="loader-element"></div>
  </div>
</template>
<script>
export default {
  name: "BlogLoader",
};
</script>
<style lang="scss">
@import "../styles/variables";
.loader {
  display: flex;
  justify-content: center;
  .loader-element {
    border: 12px solid $color-white;
    border-radius: 50%;
    border-top: 12px solid $color-blue;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

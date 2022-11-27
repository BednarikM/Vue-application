<template>
  <div class="loading-div">
    <span class="loading-text">... Loading ...</span>
  </div>
</template>

<script>
export default {
  name: "LoadingComp",
};
</script>

<style scoped>
.loading-div {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}

.loading-text {
  font-family: inherit;
  font-size: 30px;
  font-weight: bold;
}
</style>

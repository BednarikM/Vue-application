<template class="main-page-container">
  <NavBarComp />
  <router-view class="router" />
  <footer class="footer">
    <div class="footer-text">Created by Martin Bednařík</div>
  </footer>
</template>

<script>
import NavBarComp from "./components/NavBarComp";

export default {
  name: "App",
  components: { NavBarComp },
};
</script>

<style lang="stylus">

@import "./styles/variables"

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", sans-serif;
}

.footer {
  display flex
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  justify-content: center
  align-items: center
  color: $white-color;
  background: $black-color;
}
</style>

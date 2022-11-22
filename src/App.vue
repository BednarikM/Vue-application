<template>
  <NavBarComp />
  <router-view />
</template>

<script>
import NavBarComp from "./components/NavBarComp";

export default {
  name: "App",
  components: { NavBarComp },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", sans-serif;
}
</style>

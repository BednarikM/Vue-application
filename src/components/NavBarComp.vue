<template>
  <nav>
    <ul>
      <li>
        <router-link
          to="/"
          :class="{ 'link-active': ['/', '/home'].indexOf($route.path) > -1 }"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/form"
          :class="{ 'link-active': $route.path === '/form' }"
          >Form</router-link
        >
      </li>
      <li>
        <router-link
          to="/about"
          :class="{ 'link-active': $route.path === '/about' }"
          >About</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBarComp",
};
</script>

<style lang="stylus" scoped>

@import "../styles/variables.styl"

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 100px;
  background: $black-color;
}

ul li {
  padding: 1rem;
}

a {
  text-decoration: none;
  color: $white-color;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
}

a::after {
  content: ""
  height: 3px;
  width: 100%;
  position: absolute;
  top: 110%;
  left: 0%;
  transform-origin:left;
  background: $white-color;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}

a:hover::after{
  transform: scaleX(1);
}

a.link-active::after {
  transform: scaleX(1);
}
</style>

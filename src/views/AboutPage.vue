<template>
  <div class="page">
    <h1>About</h1>
    <div class="paragraph">
      <p>
        Welcome to my first Vue.js application. However, it's still under
        development and unfortunately a lot of things still don't work.
      </p>
      <p>
        As a backend I use json-server, to start it use the command
        <strong>npm run backend</strong> and to start the server itself
        <strong>npm run serve</strong>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", sans-serif;
}

.page {
  max-width: 500px;
  margin: 30px auto;
  min-height: 400px;
  border: 1px solid rgb(0, 0, 0);
  padding: 30px;
  border-radius: 5px;
}

p {
  margin-bottom: 20px;
  font-size: 20px;
}
.paragraph {
  margin-top: 20px;
}
</style>

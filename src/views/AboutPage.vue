<template>
  <LoadingComp v-if="loading" />
  <div v-else class="page">
    <h1>About</h1>
    <p class="paragraph text">
      Hello, my name is Martin B. and welcome to my first Vue.js application.
    </p>
    <p class="paragraph text"><strong>Before start you must:</strong></p>
    <p class="text">
      1. Install all dependencies by using command
      <strong>npm install.</strong>
    </p>
    <p class="text">
      2. As a backend I use json-server, to start it use the command
      <strong>npm run backend</strong> and to start the application itself
      <strong>npm run serve</strong>.
    </p>
    <p class="text add-margin">Application consists of 2 main pages.</p>
    <p class="text"><strong>Home:</strong></p>
    <p class="text">
      You can see an overview of all tasks, if you double-click on them you
      change their importance (blue color is the indicator, can be done aswell
      in editing mode), then there are icons for detailed information, direct
      editing (which is also possible from the detailed information page) and
      then the option to delete the record.
    </p>
    <p class="text"><strong>Form:</strong></p>
    <p class="text">
      The form can be opened in 2 modes, depending on whether you use the Form
      tab in the navigation or the add task or edit button. In the case of add
      task and Form navigation, the application redirects you to an empty form.
      In the case of editing, a form will be displayed with filled-in data
      related to individual tasks.
    </p>
  </div>
</template>

<script>
import LoadingComp from "../components/LoadingComp.vue";

export default {
  name: "AboutPage",
  data() {
    return { loading: true };
  },
  components: { LoadingComp },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
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
  min-width: 700px;
  max-width: 700px;
  margin: 30px auto;
  border: 1px solid rgb(0, 0, 0);
  padding: 30px;
  border-radius: 5px;
}

p.text {
  margin-bottom: 20px;
  font-size: 20px;
}
.paragraph {
  margin-top: 20px;
}

.add-margin {
  margin-top: 40px;
}
</style>

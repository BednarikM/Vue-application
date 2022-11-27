<template>
  <header>
    <h1 class="header-title">{{ title }}</h1>
    <ButtonComp
      @btn-click="sendTo"
      :text="computedText"
      :primaryColor="computedColor"
    />
  </header>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";

export default {
  name: "HeaderComp",
  props: {
    title: String,
  },
  methods: {
    sendTo() {
      let result;

      if (this.$route.path === "/") {
        this.$router.push("/form");
      }
      if (this.$route.path.slice(0, 5) === "/form") {
        this.$router.push("/");
      }

      return result;
    },
  },
  computed: {
    computedText() {
      let result;

      if (this.$route.path === "/") {
        result = "Add task";
      }
      if (this.$route.path.slice(0, 5) === "/form") {
        result = "Go back";
      }

      return result;
    },
    computedColor() {
      let result;

      if (this.$route.path === "/") {
        result = true;
      }
      if (this.$route.path.slice(0, 5) === "/form") {
        result = false;
      }

      return result;
    },
  },
  components: { ButtonComp },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-title {
  font-size: 30px;
}
</style>

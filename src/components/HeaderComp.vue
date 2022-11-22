<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonComp
      @btn-click="toggleAddTask"
      :text="showAddTask ? 'Close' : 'Add task'"
      :color="showAddTask ? '#e28743' : '#1e81b0'"
    />
  </header>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";

export default {
  name: "HeaderComp",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  methods: {
    toggleAddTask() {
      this.$emit("toggle-add-task");
    },
  },
  components: { ButtonComp },
};
</script>

<style lang="stylus" scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>

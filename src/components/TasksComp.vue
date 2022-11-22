<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskComp
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :task="task"
    />
  </div>
</template>

<script>
import TaskComp from "./TaskComp.vue";

export default {
  name: "TasksComp",
  props: {
    tasks: Object,
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
    toggleReminder(id) {
      this.$emit("toggle-reminder", id);
    },
  },
  emits: ["delete-task", "toggle-reminder"],
  components: { TaskComp },
};
</script>

<style scoped></style>
